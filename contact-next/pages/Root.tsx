import {
    useRecoilState, useRecoilValue
} from "recoil";
import React from "react";
import DetailPage from "./Page/DetailPage";
import Contacts from "./contacts";
import {Page, PageState} from "./atom";
import AddPage from "./Page/AddPage";
import UpdatePage from "./Page/UpdatePage";

const Root = () => {

    // const [page, setPage] = useRecoilState<boolean>(PageState);
    const [page, setPage] = useRecoilState<string>(PageState);
    const onAdd = () => {
        setPage('ADD')
    }

    const SelectedPage = useRecoilValue(Page);

    return (
        <div className="container">
            <h1 className="subject">Phone Book</h1>
            <div className="contact-wrap">
                <Contacts/>
                {/*{!page ? <DetailPage/> : <AddPage/>}*/}
                {SelectedPage === "ADD" && <AddPage/>}
                {SelectedPage === "DETAIL" && <DetailPage/>}
                {SelectedPage === "UPDATE" && <UpdatePage/>}
            </div>
            <button onClick={onAdd}>추가</button>
        </div>
    );
}
export default Root