import {atom, selector} from "recoil";
import contacts from "../contacts";
import {IContacts} from "./contacts";

export const initList = atom<IContacts[]>({
    key: 'defaultList',
    default: contacts
})

export const searchedList = atom<IContacts[]>({
    key: 'searchedList',
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

export const PageState = atom<boolean>({
    key: 'PageState',
    default: false
})

export const filterState = atom({
    key: 'filterState',
    default: "All"
})

export const UpdateAtom = atom({
    key: 'UpdateAtom',
    default: false
})


export const searchInputState = atom<string>({
    key: "searchInputState",
    default: ""
});


// const filteredState = selector({
//     key: 'filteredState',
//     get: ({get}) => {
//         // const filter = 'All'
//         const filter = get(filterState); // 순환참조 원인, 'filteredState' selector 이름을 참조하고 있었음
//         const list = get(initList);
//         const search = get(searchedList);
//
//         switch (filter) {
//             case 'All':
//                 return list;
//
//             case 'SearchMode':
//                 return search;
//         }
//     }
// })


export const selectedContact = atom<IContacts[] | null>({
    key: "selectedContact",
    default: null
});

export const filteredState = selector({
    key: "filteredState",
    get: ({ get }) => {
        const searchInput = get(searchInputState);
        const searchList = get(initList);
        return searchList.filter(data => data.name.toLowerCase().includes(searchInput));
    }
});