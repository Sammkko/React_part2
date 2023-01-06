import {types} from "../types";

const initialState = {
    user: {}
}


export default function creatReducer(state= initialState, action){
    switch (action.type) {
        case types.GET_USERS:
            return {...state, user: action.payload}

        default: return state
    }


}