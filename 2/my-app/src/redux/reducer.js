

const initialState = {
    users: []
};

export default function reducer(state = initialState, action){

    if (action.type === "PLUS"){
        return {...state, users: [...state.users, action.payload1 + action.payload2] }
    }
    else if (action.type === "MINUS"){
        return {...state,  users: [...state.users, action.payload1 - action.payload2] }
    }
    else if (action.type === "MULTIPLY"){
        return {...state,  users: [...state.users, action.payload1 * action.payload2] }
    }
    else if (action.type === "SEPARATION"){
        return {...state,  users: [...state.users, action.payload1 / action.payload2] }
    }
    else if (action.type === "DELETE"){
        return {...state,  users: [...state.users = []] }
    }
    return state;
}