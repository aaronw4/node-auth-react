import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://arw-node-auth.herokuapp.com/users',
        headers: {
            authorization: token
        }
    })
}