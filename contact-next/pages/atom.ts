import {atom, selector} from "recoil";
import {IContacts} from "./contacts";

export const initList = atom<IContacts[]>({
    key: 'defaultList',
    default: []
})

export const index = atom<number>({
    key: 'index',
    default: -1
})

export const PageState = atom<string>({
    key: 'PageState',
    default: 'DETAIL'
})

export const searchInputState = atom<string>({
    key: "searchInputState",
    default: ""
});

export const selectedContact = atom<IContacts[] | null>({
    key: "selectedContact",
    default: null
});

export const filteredState = selector({
    key: "filteredState",
    get: ({get}) => {
        const searchInput = get(searchInputState);
        const searchList = get(initList);
        return searchList.filter(data => data.name.toLowerCase().includes(searchInput));
    }
});

export const Page = selector({
    key: 'Page',
    get: ({get}) => {
        const filter = get(PageState);

        switch (filter) {
            case "ADD":
                return "ADD";
            case "DETAIL":
                return "DETAIL";
            case "UPDATE":
                return "UPDATE";
        }
    }
})
