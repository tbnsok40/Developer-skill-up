import React, {Fragment} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import Search from "./Search";
import {currentState, index, initList, searchedList} from "./atom";

export interface IContacts {
    id: number,
    name: string,
    phone: string,
    address: string,
    sns?: string
}

const Contacts = () => {

    const data = useRecoilValue(initList);
    const [newData, setNewData] = useRecoilState(initList)

    const setSelect = useSetRecoilState<number>(index);
    const inputState = useRecoilValue<boolean>(currentState);

    const [searchList, setSearchList] = useRecoilState<IContacts[]>(searchedList)


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

    return (
        <Fragment>
            <div className="col left">
                <Search/>
                < div className="contact-list">
                    <ul>
                        {!inputState && newData.map((contact, idx) => {
                            return (
                                <li key={idx} style={{"display": "flex"}}>
                                    <button type="button"
                                            onClick={e => selectContact(contact.id)}>
                                        {/*onClick={e => setSelect(contact.id)}>*/}
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
                                        // onClick={e => deleteData(contact.id)}
                                        onClick={e => onDelete(contact.id)}
                                        style={{"width": "50px", "background": "gray"}}>
                                        X
                                    </button>
                                </li>
                            );
                        })}
                        {inputState && searchList.map((contact, id) => {
                            return (
                                <li key={id}>
                                    <button type="button"
                                            onClick={e => selectContact(contact.id)}>
                                        {contact.name}
                                    </button>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Contacts;
