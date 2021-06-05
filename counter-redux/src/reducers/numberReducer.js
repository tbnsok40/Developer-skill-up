import {SET_REDO, STATUS, SET_UNDO, PLUS, MINUS,POP_REDO, POP_UNDO, CALCULATE} from "../actions/type";


const initialState = {
    currVal: 0,
    undo: [],
    redo: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case STATUS:
            return {
                ...state
            };

        case CALCULATE:
            return {
                ...state,
                currVal: action.payload,
            };

        case SET_UNDO:
            let tempArray = state.undo;
            tempArray.push(action.payload)
            return {
                ...state,
                undo: tempArray
            };

        case POP_UNDO:
            let temp = state.undo.pop()
            return {
                ...state,
                undo: state.undo,
                currVal: state.undo[state.undo.length - 1]
            }

        case SET_REDO:
            let tempArray2 = state.redo;
            tempArray2.push(action.payload)
            return {
                ...state,
                redo: tempArray2
            };

        case POP_REDO:

            let temp2 = state.redo.pop()
            console.log(temp2)
            return{
                ...state,
                redo: state.redo,
                currVal: temp2

            }

        default:
            return state;
    }
};


// default 해주지 않으면 index.js 에서 지정한 currVal 이 undefined 가 된다.