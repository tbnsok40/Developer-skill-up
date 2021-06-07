import React, {useEffect, useState} from 'react';
import contacts from '../contacts.json';
import {IContacts} from "./contacts";
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {DetailState} from "./atom";
import {index, initList, UpdateAtom} from "./atom";



const individualData = atom<IContacts>({
    key: 'individualData',
    default: null
})

const Detail = () => {
    const [detailState, setDetailState] = useRecoilState<boolean>(DetailState);

    const currentIndex = useRecoilValue<number>(index)
    const newData = useRecoilValue(initList)

    let temp = newData.filter(data => data.id === currentIndex);
    let data:IContacts = temp[0];
    // const [udData, setUdData] = useRecoilState(individualData);
    // const [individual, setIndividual] = useRecoilState(individualData);
    const [input, setInput] = useState<IContacts>({
        id: null, name: '', phone: '', sns: '', address: ''
    });

    const {name, phone, sns, address} = input;

    const setData = useSetRecoilState(initList);
    const List = useRecoilValue(initList);
    const updateState = useRecoilValue(UpdateAtom);

    const getId = (List) => {
        return List[List.length - 1].id + 1;
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
    // const onUpdate = (e) => {
    //     const {value, name} = e.target;
    // }
    // const updateItem = () => {
    //
    // }

    const onChange = (e) => {
        const {value, name} = e.target;
        console.log(input)
        setInput({
            ...input,
            [name]: value
        })
    };



    return (
        <div className="col right">
            {!detailState && !updateState &&
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
            {/*        <li>이름: <input type="text" name='name' value={UpdateName} onChange={onUpdate}/></li>*/}
            {/*        <li>휴대폰: <input type="text" name='phone' value={UpdatePhone} onChange={onUpdate}/></li>*/}
            {/*        <li>SNS: <input type="text" name='sns' value={UpdateSns} onChange={onUpdate}/></li>*/}
            {/*        <li>주소: <input type="text" name='address' value={UpdateAddress} onChange={onUpdate}/></li>*/}
            {/*        <button onClick={updateItem}>수정 완료</button>*/}
            {/*    </ul>*/}
            {/*</div>}*/}
        </div>
    )
}
export default Detail;

