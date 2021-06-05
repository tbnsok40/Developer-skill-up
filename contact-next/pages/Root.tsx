import {
    atom, useRecoilState, useRecoilValue, useSetRecoilState,
} from "recoil";
import React from "react";
import Detail from "./detail";
import Contacts from "./contacts";

export const DetailState = atom<boolean>({
    key: 'DetailState',
    default: false
})


const Root = () => {

    const [detailState, setDetailState] = useRecoilState<boolean>(DetailState);

    const onAdd = () => {
        setDetailState(!detailState)
    }

    return (
            <div className="container">
                <h1 className="subject">Phone Book</h1>
                <div className="contact-wrap">
                    <Contacts/>
                    <Detail/>
                </div>
                <button onClick={onAdd}>추가</button>
            </div>
    )
}
export default Root