import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };
    
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();

        axios
            .post('https://arw-node-auth.herokuapp.com/users/login',                 
                this.state.credentials,
                {withCredentials: true}
            )
            .then(res => {
                localStorage.setItem('username', this.state.credentials.username);
                localStorage.setItem('cookie', res.headers)
                this.props.history.push('/users');
                console.log(res.headers);
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <div>
                <Link to='./register'>
                    <button className='buttonLink'>Register</button>
                </Link>
                
                <h1 className='pageTitle'>Users Log In Page</h1>

                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='User Name'
                        className='loginInput'
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='Password'
                        className='loginInput'
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login