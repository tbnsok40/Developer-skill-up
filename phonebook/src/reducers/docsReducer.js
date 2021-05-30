import {GET_DOCS, SEARCH_DOCS, CLICK_DOCS} from "../actions/type";

const initialState = {
    doc: null,
    loading: false,
    error: null,
    click: null
}

const docsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOCS:
            return {
                ...state,
                doc: action.payload,
                loading: false
            };

        case SEARCH_DOCS:
            return {
                ...state,
                doc: action.payload
            }
        case CLICK_DOCS:
            return {
                ...state,
                click: action.payload
                // doc: action.payload
            }

        default:
            return state
    }
}

export default docsReducer;
