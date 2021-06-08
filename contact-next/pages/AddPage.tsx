import React, {useState} from 'react';
import {IContacts} from "./contacts";
import {useRecoilState, useResetRecoilState} from "recoil";
import {PageState} from "./atom";
import {index, initList} from "./atom";

const DetailPage = () => {
    const setDetailState = useResetRecoilState(PageState);
    const setCurrentIndex = useResetRecoilState(index)

    const [lists, setLists] = useRecoilState(initList);
    const [input, setInput] = useState<IContacts>({
        id: null, name: '', phone: '', sns: '', address: ''
    });
    const {name, phone, sns, address} = input;


    const getId = (List) => {
        return List[List.length - 1].id + 1;
    }

    const addItem = () => {
        let id = getId(lists);
        // 여기에 useRecoilValue 를 쓸 수 없는 이유가 useRecoilValue 는 writable 하지 않기 때문이다(=수정불가)
        setLists((oldList: IContacts[]) => [
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
        setDetailState();
        setInput({
            id: null, name: '', phone: '', sns: '', address: ''
        });
        setCurrentIndex();
    }

    const onChange = (e) => {
        const {value, name} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    };

    return (
        <div className="col right">
            <div className="details">
                <ul className="info">
                    <li>이름: <input type="text" name='name' value={name} onChange={onChange}/></li>
                    <li>휴대폰: <input type="text" name='phone' value={phone} onChange={onChange}/></li>
                    <li>SNS: <input type="text" name='sns' value={sns} onChange={onChange}/></li>
                    <li>주소: <input type="text" name='address' value={address} onChange={onChange}/></li>
                    <button onClick={addItem}>완료</button>
                </ul>
            </div>
        </div>
    )
}
export default DetailPage;
