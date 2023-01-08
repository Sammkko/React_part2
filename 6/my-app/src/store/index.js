import {configureStore} from "@reduxjs/toolkit";
import calculateReducer from "./CalculateSlice";


export const store = configureStore({
    reducer: {
        calculateReducer
    }
})