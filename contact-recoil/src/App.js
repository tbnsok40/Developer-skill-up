import './App.css';
import Contacts from './components/Contacts';
import {RecoilRoot, atom, useRecoilState} from "recoil";
import contacts from './contacts.json';
import Detail from "./components/Detail";
import React, {useRef} from "react";

export const numberState = atom({
    key: 'numberState',
    default: ''
})

export const inputBool = atom({
    key: 'inputBool',
    default: false
})

export const jsonData = atom({
    key: 'jsonData',
    default: contacts
})

export const currentData = atom({
    key: 'currentData',
    default: contacts
})


function App() {
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
    );
}

export default App;
