import {
    useRecoilState,
    useSetRecoilState
} from "recoil";
import React from "react";
import DetailPage from "./DetailPage";
import Contacts from "./contacts";
import {PageState} from "./atom";
import AddPage from "./AddPage";

const Root = () => {

    const [page, setPage] = useRecoilState<boolean>(PageState);
    const onAdd = () => {
        setPage(true)
    }

    return (
        <div className="container">
            <h1 className="subject">Phone Book</h1>
            <div className="contact-wrap">
                <Contacts/>
                {!page ? <DetailPage/> : <AddPage/>}
            </div>
            <button onClick={onAdd}>추가</button>
        </div>
    )
}
export default Root