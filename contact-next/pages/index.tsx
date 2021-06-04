import {
    RecoilRoot,
} from "recoil";
import React from "react";
import Root from "./Root";


export default function Home() {
    return (
        <RecoilRoot>
            <Root/>
        </RecoilRoot>
    )
}
