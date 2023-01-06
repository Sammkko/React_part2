import {combineReducers} from "redux";
import preloaderReducer from "./preloaderReducer";
import alertReducer from "./alertReducer";
import creatReducer from "./creatReducer";


export const rootReducer = combineReducers({
    preloaderReducer,
    alertReducer,
    creatReducer
})