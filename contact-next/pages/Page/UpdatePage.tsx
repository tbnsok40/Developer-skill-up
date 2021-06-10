import React, {useEffect, useState} from 'react';
import {IContacts} from "../contacts";
import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import {PageState} from "../atom";
import {index, initList} from "../atom";
import axios from "axios";

const UpdatePage = () => {
    const [lists, setLists] = useRecoilState(initList);
    const currentIndex = useRecoilValue<number>(index)
    const data: IContacts = lists.find(data => data.id === currentIndex);
    const setPage = useResetRecoilState(PageState);

    const [input, setInput] = useState<IContacts>({
        id: data.id, name: data.name, phone: data.phone, sns: data.sns, address: data.address
    });
    const {name, phone, sns, address} = input;

    useEffect(() => {
        setInput({
            id: data.id, name: data.name, phone: data.phone, sns: data.sns, address: data.address
        })
    }, [])


    const onChange = (e) => {
        const {value, name} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    };

    const updateItem = () => {
        const temp = lists.filter(list => list.id !== currentIndex);
        axios.patch(`http://localhost:5000/contacts/${currentIndex}`, input).then(r => console.log(r))
        setLists([...temp, input])
        setPage()
    }

    return (

        <div className="col right">
            <div className="details">
                <ul className="info">
                    <li>이름: <input type="text" name='name' value={name} onChange={onChange}/></li>
                    <li>휴대폰: <input type="text" name='phone' value={phone} onChange={onChange}/></li>
                    <li>SNS: <input type="text" name='sns' value={sns} onChange={onChange}/></li>
                    <li>주소: <input type="text" name='address' value={address} onChange={onChange}/></li>
                    <button onClick={updateItem}>완료</button>
                </ul>
            </div>
        </div>
    )
}
export default UpdatePage;
