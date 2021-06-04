import React, {useEffect, useState} from 'react';
import contacts from '../contacts.json';
import {index, IContacts, initList} from "./contacts";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {DetailState} from "./Root";


const Detail = () => {
    const [detailState, setDetailState] = useRecoilState<boolean>(DetailState);

    const currentIndex = useRecoilValue<number>(index)
    const newData = useRecoilValue(initList)
    const data: IContacts = newData[currentIndex];
    console.log(data, newData, currentIndex, '----')
    const [input, setInput] = useState<IContacts>({
        id: null, name: '', phone: '', sns: '', address: ''
    });
    const {name, phone, sns, address} = input;
    const setData = useSetRecoilState(initList);
    const List = useRecoilValue(initList);

    const getId = (List) => {
        return List.length;
    }

    const addItem = () => {
        let id = getId(List);
        setData((oldList: IContacts[]) => [
                ...oldList,
                {
                    id: id,
                    name: input.name,
                    phone: input.phone,
                    sns: input.sns,
                    address: input.address,
                },
            ]
        );
        setDetailState(false);
        setInput({
            id: null, name: '', phone: '', sns: '', address: ''
        });
    }

    const onChange = (e) => {
        const {value, name} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <div className="col right">
            {!detailState &&
            <div className="details">
                {data &&
                <ul className="info" key={data.id}>
                    <li>이름: {data.name}</li>
                    <li>휴대폰:{data.phone} </li>
                    <li>SNS:{data.sns} </li>
                    <li>주소:{data.address} </li>
                </ul>}
            </div>}
            {detailState &&
            <div className="details">
                <ul className="info">
                    <li>이름: <input type="text" name='name' value={name} onChange={onChange}/></li>
                    <li>휴대폰: <input type="text" name='phone' value={phone} onChange={onChange}/></li>
                    <li>SNS: <input type="text" name='sns' value={sns} onChange={onChange}/></li>
                    <li>주소: <input type="text" name='address' value={address} onChange={onChange}/></li>
                    <button onClick={addItem}>완료</button>
                </ul>
            </div>}
            {/*{updateState &&*/}
            {/*<div className="details">*/}
            {/*    <ul className="info">*/}
            {/*        <li>이름: <input type="text" name='name' value={name} onChange={onChange}/></li>*/}
            {/*        <li>휴대폰: <input type="text" name='phone' value={phone} onChange={onChange}/></li>*/}
            {/*        <li>SNS: <input type="text" name='sns' value={sns} onChange={onChange}/></li>*/}
            {/*        <li>주소: <input type="text" name='address' value={address} onChange={onChange}/></li>*/}
            {/*        <button onClick={addItem}>완료</button>*/}
            {/*    </ul>*/}
            {/*</div>}*/}
        </div>
    )
}
export default Detail;

