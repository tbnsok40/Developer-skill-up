import React from 'react';
import {useRecoilState, useResetRecoilState} from "recoil";
import {searchInputState, selectedContact} from "./atom";


const Search = () => {

    // const [contactList, setContactList] = useRecoilState<IContacts[]>(initList);
    // const setSearchList = useSetRecoilState<IContacts[]>(searchedList)
    // const setSelect = useSetRecoilState<number>(index);
    // const setInputState = useSetRecoilState<boolean>(currentState);
    // const textRef = useRef<HTMLInputElement>(null);
    // const setFilter = useSetRecoilState(filterState);
    //
    // const onInput = ():void => {
    //     if (!textRef.current.value) {
    //         setFilter("All");
    //
    //         // setInputState(false);
    //         setContactList(contactList)
    //         setSelect(-1)
    //     } else {
    //         setFilter("SearchMode")
    //
    //         // setInputState(true);
    //         let currentInput = textRef.current.value.toLowerCase();
    //         let tempData = contactList.filter(d => d.name.toLowerCase().indexOf(currentInput) > -1);
    //         if (tempData.length === 0) {
    //             setSelect(-1)
    //         }
    //         setSearchList(tempData)
    //     }
    // }

    // Search 만 하면 되는 컴포넌트에서 너무 많은 것을 제어하려고 했다.
    const [searchInput, setSearchInput] =
        useRecoilState<string>(searchInputState);

    const resetContacts = useResetRecoilState(selectedContact);

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.toLowerCase();
        resetContacts();
        setSearchInput(input);
    };

    return (
        <div className="search-box">
            <input type="text"
                   className="inp-sch"
                // ref={textRef}
                   placeholder="검색어를 입력하세요."
                   value={searchInput}
                   onChange={onInput}/>
        </div>
    )
}

export default Search;
