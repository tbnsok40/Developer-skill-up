import React, {useRef} from 'react';
import contacts from '../contacts.json';
import {useRecoilState, useSetRecoilState} from "recoil";
import {IContacts} from "./contacts";
import {currentState, index, initList} from "./atom";


const Search = () => {

    const [contactList, setContactList] = useRecoilState<IContacts[]>(initList);
    const setSelect = useSetRecoilState<number>(index);
    const setInputState = useSetRecoilState<boolean>(currentState);
    const textRef = useRef<HTMLInputElement>(null);

    const onInput = ():void => {
        if (!textRef.current.value) {
            setInputState(false);
            setContactList(contacts)
            setSelect(-1)
        } else {
            setInputState(true);
            let currentInput = textRef.current.value.toLowerCase();
            let tempData = contactList.filter(d => d.name.toLowerCase().indexOf(currentInput) > -1);
            if (tempData.length === 0) {
                setSelect(-1)
            }
            setContactList(tempData)
        }
    }
    return (
            <div className="search-box">
                <input type="text"
                       className="inp-sch"
                       ref={textRef}
                       placeholder="검색어를 입력하세요."
                       onChange={onInput}/>
            </div>
    )
}

export default Search;
