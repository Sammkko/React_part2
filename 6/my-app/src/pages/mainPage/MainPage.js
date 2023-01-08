import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInputValue1, changeInputValue2, plusBtn,
    minusBtn, multiplyBtn, separationBtn, alertReducer} from "../../store/CalculateSlice";



function MainPage() {

    const dispatch = useDispatch();
    const {num, inputValue1,  inputValue2, message} = useSelector(state => state.calculateReducer)

    const [num1, setNum1] = useState({});
    const [num2, setNum2] = useState({});

    const valueInputCheck = (event) => {
        event.preventDefault()
        if (inputValue1 === ""){
            dispatch(alertReducer("1 поле пустое"))

            setTimeout(()=>{
                dispatch(alertReducer(""))
            },3000)
        }
        else if (inputValue2 === ""){
            dispatch(alertReducer("2 поле пустое"))

            setTimeout(()=>{
                dispatch(alertReducer(""))
            },3000)
        }
    }
    const changeInput1 = (event) => {
      dispatch(changeInputValue1(setNum1(+event.target.value)))
    }
    const changeInput2 = (event) => {
        dispatch(changeInputValue2(setNum2(+event.target.value)))
    }

    const plusBtnFunc = () => {
      dispatch(plusBtn(num1 + num2))
    }

    const minusBtnFunc = () => {
        dispatch(minusBtn(num1 - num2))
    }

    const multiplyBtnFunc = () => {
        dispatch(multiplyBtn(num1 * num2))
    }

    const separationBtnFunc = () => {
        dispatch(separationBtn(num1 / num2))
    }


    return (
        <div>
            <form onSubmit={valueInputCheck}>
            <input
                value={inputValue1}
                onChange={changeInput1}
                placeholder="num1"
                type="number"/>
            <input
                value={inputValue2}
                onChange={changeInput2}
                placeholder="num2"
                type="number"/>

         <button onClick={plusBtnFunc}>+</button>
            <button onClick={minusBtnFunc}>-</button>
            <button onClick={multiplyBtnFunc}>*</button>
            <button onClick={separationBtnFunc}>/</button>
            </form>

            <h1>{message} {num}</h1>



        </div>
    );
}

export default MainPage;