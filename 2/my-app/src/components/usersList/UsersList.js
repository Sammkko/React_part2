import React from 'react';
import {useSelector} from "react-redux";

function UsersList(props) {
    const users = useSelector(state => state.users);

    return (
        <ul>
            {
                users.length > 0
              ?
                users.map(users =>  <li>{users}</li>)
                    :
                    <p>Empty value</p>
            }
        </ul>
    );
}

export default UsersList;