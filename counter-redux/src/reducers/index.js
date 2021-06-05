// this file is root reducer
import {combineReducers} from "redux";
// import logReducer from "./logReducer";
// import categoryReducer from "./categoryReducer";
// import docsReducer from "./docsReducer";
// import patientReducer from './patientReducer';

import numberReducer from './numberReducer'

export default combineReducers({
    currVal: numberReducer
});
