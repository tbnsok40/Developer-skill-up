import React, {useRef} from 'react';
import contacts from '../contacts.json';
import {useRecoilState, useSetRecoilState} from "recoil";
import {currentState, index, initList} from "./contacts";


export interface IContacts {
    id: number,
    name: string,
    phone: string,
    address: string,
    sns?: string
}

const Search = () => {

    const [data, setData] = useRecoilState<IContacts[]>(initList);
    const setSelect = useSetRecoilState<number>(index);
    const setInputState = useSetRecoilState<boolean>(currentState);

    const textRef = useRef<HTMLInputElement>(null);

    const onInput = ():void => {
        if (!textRef.current.value) {
            setInputState(false);
            setData(contacts)
            setSelect(-1)
        } else {
            let currentInput = textRef.current.value.toLowerCase();
            setInputState(true);
            let tempData = data.filter(d => d.name.toLowerCase().indexOf(currentInput) > -1);
            if (tempData.length === 0) {
                setSelect(-1)
            }
            setData(tempData)
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
