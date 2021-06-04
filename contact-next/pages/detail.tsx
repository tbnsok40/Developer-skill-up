import React, {useEffect, useState} from 'react';
import contacts from '../contacts.json';
import {index, IContacts} from "./contacts";
import {useRecoilValue} from "recoil";


const Detail = () => {

    const currentIndex = useRecoilValue<number>(index)
    const data: IContacts =  contacts[currentIndex]

    return (
        <div className="col right">
            <div className="details">
                {data &&
                    <ul className="info" key={data.id}>
                        <li>이름: {data.name}</li>
                        <li>휴대폰:{data.phone} </li>
                        <li>SNS:{data.sns} </li>
                        <li>주소:{data.address} </li>
                    </ul>}
            </div>
        </div>
    )
}
export default Detail;

