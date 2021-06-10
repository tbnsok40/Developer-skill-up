import {
    useRecoilValue, useSetRecoilState
} from "recoil";
import React, {useEffect} from "react";
import DetailPage from "./Page/DetailPage";
import Contacts from "./contacts";
import {initList, Page, PageState} from "./atom";
import AddPage from "./Page/AddPage";
import UpdatePage from "./Page/UpdatePage";
import axios from "axios";

const Root = () => {
    const setPage = useSetRecoilState<string>(PageState);
    const onAdd = () => {
        setPage('ADD')
    }
    const setData = useSetRecoilState(initList);
    const SelectedPage = useRecoilValue(Page);

    useEffect(() => {
        axios.get("http://localhost:5000/contacts").then(res => {
            setData(() => [
                ...res.data
            ])
        });
    },[])


    return (
        <div className="container">
            <h1 className="subject">Phone Book</h1>
            <div className="contact-wrap">
                <Contacts/>
                {SelectedPage === "ADD" && <AddPage/>}
                {SelectedPage === "DETAIL" && <DetailPage/>}
                {SelectedPage === "UPDATE" && <UpdatePage/>}
            </div>
            <button onClick={onAdd}>추가</button>
        </div>
    );
}
export default Root
