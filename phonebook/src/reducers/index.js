// this file is root reducer
import {combineReducers} from "redux";
import docsReducer from "./docsReducer";

export default combineReducers({
    doc: docsReducer,
});
