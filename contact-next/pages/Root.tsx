import {
    useRecoilState, useSetRecoilState
} from "recoil";
import React from "react";
import Detail from "./detail";
import Contacts from "./contacts";
import {DetailState} from "./atom";

const Root = () => {

    const setDetailState = useSetRecoilState<boolean>(DetailState);

    const onAdd = () => {
        setDetailState(true)
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