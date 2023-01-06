import React from 'react';
import {Table, Container} from "react-bootstrap";
import {useSelector} from "react-redux";

function UsersListPage() {

    const {user} = useSelector(state => state.creatReducer)

    return (
        <Container>
            <h1>USER LIST</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default UsersListPage;