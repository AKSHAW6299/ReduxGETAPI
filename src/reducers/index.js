import { combineReducers } from "redux";
import useReducer from "./itemsReducer";

const rootReducer = combineReducers({
    anandStore: useReducer,
})
export default rootReducer;



