import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {UserPrivateRoute} from './components/privateRoute';
import Login from './components/login';
import Users from './components/users';
import { UserPrivateRoute } from './components/privateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Login}/>
        <UserPrivateRoute path='/users' component={Users}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
