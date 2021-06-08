import React from 'react';
import {IContacts} from "../contacts";
import {useRecoilValue} from "recoil";
import {index, initList} from "../atom";

const DetailPage = () => {
    const lists = useRecoilValue(initList);
    const currentIndex = useRecoilValue<number>(index)
    const data: IContacts = lists.find(data => data.id === currentIndex);
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
export default DetailPage;
