

const initialState = {
    num: 0
}


export default  function reducer (state = initialState, action) {


    console.log(action)
    if(action.type === "INCREASE"){
        return {...state, num: initialState.num += 1}
    }else if (action.type === "DECREASE"){
        return {...state, num: initialState.num -= 1}
    }

    return state
}