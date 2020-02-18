import React from 'react';
import axios from 'axios';

export class Register extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    register = e => {
        e.preventDefault();

        axios
            .post('https://arw-node-auth.herokuapp.com/users/register', {
                userName: this.state.username,
                password: this.state.password
            })
            .then(res => {
               setTimeout(() => {window.location='/'}, 2000);
            })
            .catch(err => console.log(err.message))
    }

    render() {
        return (
            <div>
                <h1>Register Page</h1>
                <form onSubmit={this.register}>
                    <input
                        type='text'
                        name='username'
                        placeholder='User Name'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}