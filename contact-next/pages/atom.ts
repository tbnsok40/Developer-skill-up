import {atom} from "recoil";
import contacts from "../contacts";
import {IContacts} from "./contacts";

export const initList = atom<IContacts[]>({
    key: 'defaultList',
    default: contacts
})

// useRecoilState 의 인자는 atom 과 selector 만 가능하다.
export const currentState = atom<boolean>({
    key: 'currentState',
    default: false
})

export const actionState = atom<string>({
    key: 'actionState',
    default: 'read'
})

export const index = atom<number>({
    key: 'index',
    default: -1
})

// const showingContacts = selector({
//     key: 'data',
//     get: ({get}) => {
//         return get(initList);
//     }
// })

export const UpdateAtom = atom({
    key: 'UpdateAtom',
    default: false
})
