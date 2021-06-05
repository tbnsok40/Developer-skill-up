import React from 'react';
import contacts from '../contacts.json';
import {selector, useRecoilState, useRecoilValue} from "recoil";
import {jsonData, numberState} from '../App';

const countState = selector({
    key: 'selectState',
    get: ({get}) => {
        const numState = get(numberState);
        return numState
    }
})

const Detail = () => {
    const count = useRecoilValue(countState)
    const [data, setData] = useRecoilState(jsonData);

    return (
        <div className="col right">
            <div className="details">
                {
                    data[count] &&
                    <ul className="info">
                        <li>이름: {data[count].name}</li>
                        <li>휴대폰: {data[count].phone}</li>
                        <li>SNS: {data[count].sns}</li>
                        <li>주소: {data[count].address}</li>
                    </ul>
                }
                <p className="emptyset"></p>
            </div>
        </div>
    )
}
export default Detail;

