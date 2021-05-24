import {REDO, STATUS, UNDO, PLUS, MINUS, POP_UNDO, CALCULATE} from "../actions/type";



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

        case UNDO:
            let tempArray = state.undo;
            tempArray.push(action.payload)
            return {
                ...state,
                undo: tempArray
            };

        case POP_UNDO:
            state.undo.pop()
            // console.log(state.currVal, state.undo.pop())
            return{
                ...state,
                undo: state.undo,
                currVal: state.undo[state.undo.length - 1]
            }

        case REDO:
            return {};
        default:
            return state;
    }
};


// default 해주지 않으면 index.js 에서 지정한 currVal 이 undefined 가 된다.