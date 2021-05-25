import {
    GET_DOCS,
    LOGS_ERROR, SEARCH_DOCS, CLICK_DOCS
} from './type'

export const getDocs = () => async dispatch => {
    try {
        const res = await fetch('/docs');
        const data = await res.json();
        // console.log("getDocs: ", data);
        dispatch({
            type: GET_DOCS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response
        })
    }
}

export const searchDocs = (text) => async dispatch => {
    try {
        const res = await fetch(`/docs?q=${text}`)
        const data = await res.json();
        dispatch({
            type: SEARCH_DOCS,
            payload: data
        })
    } catch (err) {
    }
}


export const clickedDocs = (id) => async dispatch => {
    const res = await fetch(`/docs/${id}`);
    const data = await res.json();
    dispatch({
        type: CLICK_DOCS,
        payload: data
    })
}
