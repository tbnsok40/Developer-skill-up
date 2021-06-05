import React, {Fragment} from 'react';
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

// 초기 배열 / 전체 배열
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


// const showingContacts = selector({
//     key: 'data',
//     get: ({get}) => {
//         return get(initList);
//     }
// })



export const UpdateAtom = atom({
    key: 'UpdateAtom',
    default: false
})
const Contacts = () => {

    const data = useRecoilValue(initList);
    const [select, setSelect] = useRecoilState<number>(index);
    const [inputState, setInputState] = useRecoilState<boolean>(currentState);
    const [newData, setNewData] = useRecoilState(initList)

    // const deleteData = (id) = selector({
    //     key: 'deleteData',
    //     get: ({get}) => {
    //         const beforeFiltered = get(initList);
    //         beforeFiltered.filter(data => data.id !== id);
    //     }
    // });

    const selectContact = (id: number):void => {
        console.log(id)
        setSelect(id)
        setUpdateState(false)
    }

    const onDelete = (id) => {
        let tempData = [...newData];
        let temp = tempData.filter(data => data.id !== id);
        setNewData(temp);
    }

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
