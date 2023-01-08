import {createSlice} from "@reduxjs/toolkit";


const calculateSlice = createSlice({
    name: "calculateSlice",
    initialState: {
        num: "",
        inputValue1: "",
        inputValue2: "",
        message: ""
    },
    reducers: {
        alertReducer: (state, action)=> {
         state.message = action.payload
            console.log(action)
        },
        changeInputValue1: (state, action) =>{
            state.inputValue1 = action.payload
        },
        changeInputValue2: (state, action) =>{
            state.inputValue2 = action.payload
        },
        plusBtn: (state, action) => {
            state.num = action.payload
        },
        minusBtn: (state, action) => {
            state.num = action.payload

        },
        multiplyBtn: (state, action) => {
            state.num = action.payload
        },
        separationBtn: (state, action) => {
            state.num = action.payload
        }
    }
})

export const {changeInputValue1, changeInputValue2, plusBtn,
    minusBtn, multiplyBtn, separationBtn, alertReducer} = calculateSlice.actions;

export default calculateSlice.reducer