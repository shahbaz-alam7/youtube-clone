import { combineReducers } from "redux";
import handleData from "./data";

const rootReducer = combineReducers({ data: handleData });

export default rootReducer;
