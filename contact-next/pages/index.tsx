import Contacts from "./contacts";
import {
    RecoilRoot,
    atom, selector, useRecoilState, useRecoilValue
} from "recoil";
import contacts from '../contacts.json';


// interface Icontacts {
//     id: number,
//     name: string,
//     phone: string,
//     address: string,
//     sns?: string
// }


export default function Home() {
    return (
        <RecoilRoot>
            <div className="container">
                <h1 className="subject">Phone Book</h1>
                <div>
                    <Contacts/>
                </div>
            </div>
        </RecoilRoot>
    )
}
