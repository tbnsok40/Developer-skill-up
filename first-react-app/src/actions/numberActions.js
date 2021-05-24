import {
    STATUS,
    SET_UNDO, POP_UNDO,
    REDO,
    CALCULATE
} from '../actions/type';

export const getNumber = () => async dispatch => {
    try {
        dispatch({
            type: STATUS,
        });
    } catch (err) {
    }

}

export const calcNumber = (inputNumber) => async dispatch => {
    try {
        dispatch({
            type: CALCULATE,
            payload: inputNumber
        })
    } catch (err) {
    }
}

export const setUndo = (number) => async dispatch => {
    try {
        dispatch({
            type: SET_UNDO,
            payload: number
        });
    } catch (err) {
    }
}

export const popUndo = () => async dispatch => {
    try {
        dispatch({
            type: POP_UNDO
        });
    } catch (err) {
    }
}

// export const checkUndo = () => async dispatch => {
//     try{
//         dispatch({
//
//         })
//     }
// }
