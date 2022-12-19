import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function MainPage() {

    const dispatch = useDispatch()
    const num = useSelector(state => state.num)

    const increase = () => {
        dispatch({
            type: "INCREASE"
        })
    }

    const decrease = () => {
        dispatch({
            type: "DECREASE"
        })
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default MainPage;