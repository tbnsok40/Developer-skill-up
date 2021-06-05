import React, {useState, useRef} from 'react';
import contacts from '../contacts.json';
import Detail from "./detail";


interface Contacts {
    id: number,
    name: string,
    phone: string,
    address: string,
    sns?: string
}


const Contacts = () => {
    const [select, setSelect] = useState<number>();
    const [inputState, setInputState] = useState<boolean>(false);
    const [data, setData] = useState<Contacts []>(contacts);
    const textRef = useRef<HTMLInputElement>(null);

    const selectContact = (id: number):void => {setSelect(id)}

    const onInput = ():void => {
        // @ts-ignore
        if (!textRef.current.value) {
            setInputState(false);
            setData(contacts)
            setSelect(-1)
        } else {
            // @ts-ignore
            let currentInput = textRef.current.value.toLowerCase();
            setInputState(true);
            let tempData = data.filter(d => d.name.toLowerCase().indexOf(currentInput) > -1);
            if (tempData.length === 0) {
                setSelect(-1)
            }
            setData(tempData)
        }
    }
    return (
        <div className="contact-wrap">
            <div className="col left">
                <div className="search-box">
                    <input type="text"
                           className="inp-sch"
                           ref={textRef}
                           placeholder="검색어를 입력하세요."
                           onChange={onInput}
                    />
                </div>
                < div className="contact-list">
                    <ul>
                        {!inputState && contacts.map((contact, index) => {
                            return (
                                <li key={index}>
                                    <button type="button"
                                            onClick={e => selectContact(contact.id)}>
                                        {contact.name}
                                    </button>
                                </li>
                            )
                        })}
                        {inputState && data.map((contact, index) => {
                            return (
                                <li key={index}>
                                    <button type="button"
                                            onClick={e => selectContact(contact.id)}>
                                        {contact.name}
                                    </button>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
            <Detail selected={select}/>
        </div>
    )
}

export default Contacts;
