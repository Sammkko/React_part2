import React from 'react';
import {useDispatch} from "react-redux";
import {fetchUserOneAction} from "../../redux/actions/actions";


function User({userInfo}) {
    const dispatch = useDispatch()
    const getOneUserInfo = (event) => {
        dispatch(fetchUserOneAction(event.target.value))
    }
    return (
        <ul className="userName">
            <li>name: {userInfo.name}</li>
            <li>city: {userInfo.address.city}</li>
            <li>
                <button className="btn custom-btn" value={userInfo.id}
                        onClick={getOneUserInfo}>more info
                </button>
            </li>
        </ul>
    );
}

export default User;