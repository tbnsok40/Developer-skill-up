import React, {Fragment} from 'react';
import {selector, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import Search from "./Search";
import {filteredState, filterState, index, initList, searchedList} from "./atom";

export interface IContacts {
    id: number,
    name: string,
    phone: string,
    address: string,
    sns?: string
}

const Contacts = () => {

    // const data = useRecoilValue(initList);
    const [newData, setNewData] = useRecoilState(initList)
    const setSelect = useSetRecoilState<number>(index);
    // const inputState = useRecoilValue<boolean>(currentState);
    // const [searchList, setSearchList] = useRecoilState<IContacts[]>(searchedList)


    const selectContact = (id: number): void => {
        setSelect(id)
    }

    const onDelete = (id) => {
        let tempData = [...newData];
        tempData = tempData.filter(data => data.id !== id);
        setNewData(tempData);
    }

    const onUpdate = (id) => {
        setSelect(id)
    }

    // selector
    // const filteredState = selector({
    //     key: 'filteredState',
    //     get: ({get}) => {
    //         // const filter = 'All'
    //         const filter = get(filterState); // 순환참조 원인, 'filteredState' selector 이름을 참조하고 있었음
    //         const list = get(initList);
    //         const search = get(searchedList);
    //
    //         switch (filter) {
    //             case 'All':
    //                 return list;
    //
    //             case 'SearchMode':
    //                 return search;
    //         }
    //     }
    // })
    // const filteredData = useRecoilValue(filteredState);
    const filteredData = useRecoilValue(filteredState);

    return (
        <Fragment>
            <div className="col left">
                <Search/>
                < div className="contact-list">
                    <ul>
                        {filteredData.map((contact, idx) => {
                            return (
                                <li key={idx} style={{"display": "flex"}}>
                                    <button type="button"
                                            onClick={e => selectContact(contact.id)}>
                                        {contact.name}

                                    </button>
                                    <button
                                        onClick={e => onUpdate(contact.id)}
                                        style={{
                                            "width": "50px", "background": "gray",
                                            "opacity": "50%"
                                        }}>
                                        Edit
                                    </button>
                                    <button
                                        onClick={e => onDelete(contact.id)}
                                        style={{"width": "50px", "background": "gray"}}>
                                        X
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Contacts;
