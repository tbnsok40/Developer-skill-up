// import Contacts from "./contacts";
import {
    RecoilRoot,
} from "recoil";
import React from "react";
import Detail from "./detail";
import Contacts from "./contacts";


export default function Home() {
    return (
        <RecoilRoot>
            <div className="container">
                <h1 className="subject">Phone Book</h1>
                <div className="contact-wrap">
                    <Contacts/>
                    <Detail/>
                </div>
            </div>
        </RecoilRoot>
    )
}
