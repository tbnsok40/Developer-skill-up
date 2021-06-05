import React, {useState, useRef} from 'react';
import Detail from "./Detail";
import {useRecoilState, useRecoilValue} from "recoil";
import {numberState, inputBool, jsonData, currentData} from '../App';

const Contacts = () => {
    const [select, setSelect] = useRecoilState(numberState);
    const [inputState, setInputState] = useRecoilState(inputBool);
    const [data, setData] = useRecoilState(jsonData);

    const selectContact = (id) => {
        setSelect(id)
    }

    const initData = useRecoilValue(currentData)

    const text = useRef('');

    const onInput = () => {
        if (!text.current.value) {
            setInputState(false);
            setData(initData)
            setSelect(-1)
        } else {
            let currentInput = text.current.value.toLowerCase();
            setInputState(true);
            let tempData = data.filter(d => d.name.toLowerCase().indexOf(currentInput) > -1);
            if (tempData.length === 0) {
                setSelect(-1)
            }
            setData(tempData)
        }
    }

    return (
        <div className="col left">
            <div className="search-box">
                <input type="text" className="inp-sch" ref={text} placeholder="검색어를 입력하세요."
                       onChange={onInput}/>
            </div>
            <div className="contact-list">
                <ul>
                    {!inputState && data.map((contact, index) => {
                        return (
                            <li key={index}>
                                <button type="button"
                                        onClick={e => selectContact(contact.id)}>{contact.name}</button>
                            </li>)
                    })}
                    {inputState && data.map((contact, index) => {
                            return (
                                <li key={index}>
                                    <button type="button"
                                            onClick={e => selectContact(contact.id)}>{contact.name}</button>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}
export default Contacts