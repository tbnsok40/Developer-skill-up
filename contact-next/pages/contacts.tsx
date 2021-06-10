import React from 'react';
import {useRecoilValue, useSetRecoilState} from "recoil";
import Search from "./Search";
import {filteredState, index, initList, PageState} from "./atom";
import axios from "axios";

export interface IContacts {
    id: number,
    name: string,
    phone: string,
    address: string,
    sns?: string
}

const Contacts = () => {
    const setNewData = useSetRecoilState(initList);
    const setSelect = useSetRecoilState<number>(index);
    const setPage = useSetRecoilState<string>(PageState);

    const selectContact = (id: number): void => {
        setSelect(id)
        setPage("DETAIL")
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:5000/contacts/${id}`).then(res => {
            setNewData([
                ...res.data
            ])
        });
    }

    const onUpdate = (id) => {
        setSelect(id)
        setPage('UPDATE')
    }

    const filteredData = useRecoilValue(filteredState);

    return (
        <div className="col left">
            <Search/>
            < div className="contact-list">
                <ul>
                    {filteredData.map((contact, idx) => {
                        return (
                            <li key={idx} style={{"display": "flex"}}>
                                <button type="button"
                                        onClick={() => selectContact(contact.id)}>
                                    {contact.name}
                                </button>
                                <button
                                    onClick={() => onUpdate(contact.id)}
                                    style={{
                                        "width": "50px", "background": "gray",
                                        "opacity": "50%"
                                    }}>
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(contact.id)}
                                    style={{"width": "50px", "background": "gray"}}>
                                    X
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Contacts;
