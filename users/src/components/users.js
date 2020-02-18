import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = () => {
            axios
                .get('https://arw-node-auth.herokuapp.com/users',
                    {withCredentials: true}                
                )
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
            <h1 className='pageTitle'>Users Page</h1>
            {users.map(user => (
                <div className='userList' key={user.id}>
                    <p>User: {user.userName}</p>
                </div>
            ))}
        </div>
    )
}

export default Users