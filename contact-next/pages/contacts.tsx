import React, {Fragment, useRef} from 'react';
// import contacts from '../contacts.json';
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import Search from "./Search";
import contacts from "../contacts";


export interface IContacts {
    id: number,
    name: string,
    phone: string,
    address: string,
    sns?: string
}

export const initList = atom<IContacts[]>({
    key: 'defaultList',
    default: contacts
})

// useRecoilState 의 인자는 atom 과 selector 만 가능하다.
export const currentState = atom<boolean>({
    key: 'currentState',
    default: false
})

export const index = atom<number>({
    key: 'index',
    default: -1
})

const showingContacts = selector({
    key: 'data',
    get: ({get}) => {
        return get(initList);
    }
})

const Contacts = () => {

    const data = useRecoilValue(showingContacts);
    const [select, setSelect] = useRecoilState<number>(index);
    const [inputState, setInputState] = useRecoilState<boolean>(currentState);
    // const newData = useRecoilValue(initList)
    const [newData, setNewData] = useRecoilState(initList)

    const selectContact = (id: number):void => {
        console.log(id)
        setSelect(id)
    }

    const onDelete = (id) => {
        let tempData = [...newData];
        let temp = tempData.filter(data => data.id !== id);
        setNewData(temp);
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
                                            onClick={e => selectContact(idx)}>
                                        {contact.name}

                                    </button>
                                    <button
                                        onClick={e => onDelete(contact.id)}
                                        style={{"width": "50px", "background": "gray",
                                        "opacity":"50%" }}>
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
                        {inputState && data.map((contact, id) => {
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
