import React, {Fragment} from 'react';
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import Search from "./Search";
import contacts from "../contacts";
import {currentState, index, initList, UpdateAtom} from "./atom";

export interface IContacts {
    id: number,
    name: string,
    phone: string,
    address: string,
    sns?: string
}

const Contacts = () => {

    const data = useRecoilValue(initList);
    const [select, setSelect] = useRecoilState<number>(index);
    const [inputState, setInputState] = useRecoilState<boolean>(currentState);
    const [newData, setNewData] = useRecoilState(initList)

    const selectContact = (id: number):void => {
        console.log(id)
        setSelect(id)
        setUpdateState(false)
    }

    const onDelete = (id) => {
        let tempData = [...newData];
        tempData = tempData.filter(data => data.id !== id);
        setNewData(tempData);
    }

    // const deleteData = (id) = selector({
    //     key: 'deleteData',
    //     get: ({get}) => {
    //         const beforeFiltered = get(initList);
    //         beforeFiltered.filter(data => data.id !== id);
    //     }
    // });

    const [updateState, setUpdateState] = useRecoilState(UpdateAtom);

    const onUpdate = (id) => {
        setSelect(id)
        setUpdateState(true)
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
                                            // onClick={e => selectContact(contact.id)}>
                                            onClick={e => setSelect(contact.id)}>
                                        {contact.name}

                                    </button>
                                    <button
                                        onClick={e => onUpdate(contact.id)}
                                        style={{"width": "50px", "background": "gray",
                                        "opacity":"50%" }}>
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
