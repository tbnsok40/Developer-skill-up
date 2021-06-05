import React, {useEffect, useState} from 'react';
import contacts from '../contacts.json';
import Contacts from "./contacts";

const Detail = ({selected}: any) => {
    const [selectedPerson, setSelectedPerson] = useState<Contacts | undefined>()

    useEffect(() => {
        setSelectedPerson(contacts[selected])
    },[selected]) // deps 에 지정한 값이 바뀔 때 마다 useEffect 호출


    return (
        <div className="col right">
            <div className="details">
                {
                    selectedPerson &&
                    <ul className="info">
                        <li>이름: {selectedPerson.name}</li>
                        <li>휴대폰:{selectedPerson.phone} </li>
                        <li>SNS:{selectedPerson.sns} </li>
                        <li>주소:{selectedPerson.address} </li>
                    </ul>
                }
            </div>
        </div>
    )
}
export default Detail;

