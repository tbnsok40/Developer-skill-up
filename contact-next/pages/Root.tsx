import {
    atom,
    RecoilRoot, useRecoilValue, useSetRecoilState,
} from "recoil";
import React from "react";
import Detail from "./detail";
import Contacts from "./contacts";
import datass from "../contacts";

export const DetailState = atom<boolean>({
    key: 'DetailState',
    default: false
})


// 추가 버튼 -> detail state 변경해야한다.
// 다른 컴포넌트로 보내야함 : recoil 사용해야한다.

const Root = () => {

    const setDetailState = useSetRecoilState(DetailState);
    const detailState = useRecoilValue<boolean>(DetailState);

    const onAdd = () => {
        setDetailState(!detailState)
        // console.log(detailState);
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