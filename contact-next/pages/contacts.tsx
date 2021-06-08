import React, {Fragment} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import Search from "./Search";
import {filteredState, index, initList, PageState} from "./atom";
import UpdatePage from "./Page/UpdatePage";

export interface IContacts {
    id: number,
    name: string,
    phone: string,
    address: string,
    sns?: string
}

const Contacts = () => {


    const [newData, setNewData] = useRecoilState(initList)
    const setSelect = useSetRecoilState<number>(index);
    const setPage = useSetRecoilState<string>(PageState);

    const selectContact = (id: number): void => {
        setSelect(id)
        setPage("DETAIL")
    }

    const onDelete = (id) => {
        let tempData = [...newData];
        tempData = tempData.filter(data => data.id !== id);
        setNewData(tempData);
    }

    const onUpdate = (id) => {
        setSelect(id)
        setPage('UPDATE')
    }

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
