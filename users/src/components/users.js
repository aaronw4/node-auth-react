import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './axiosWithAuth';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = () => {
            axiosWithAuth()
                .get('/')
                .then(res => {
                    setUsers(res.data);
                    console.log(res.data);
                })
                .catch(err => console.log(err.message))
        };
        getUsers();
    },[]);

    return (
        <div>
            <h1 className='usersTitle'>Users Page</h1>
            {users.map(user => (
                <div className='userList' key={user.id}>
                    <p>User: {user.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Users