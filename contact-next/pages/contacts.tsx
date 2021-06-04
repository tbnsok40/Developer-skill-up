import React, {useRef} from 'react';
import contacts from '../contacts.json';
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import Search from "./Search";


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


    const selectContact = (id: number):void => {setSelect(id)}

    return (
            <div className="col left">
                <Search/>
                {/*<ContactList/> refactoring with Using Selector */}
                < div className="contact-list">
                    <ul>
                        {!inputState && contacts.map((contact, id) => {
                            return (
                                <li key={id}>
                                    <button type="button"
                                            onClick={e => selectContact(contact.id)}>
                                        {contact.name}
                                    </button>
                                </li>
                            )
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
    )
}

export default Contacts;
