import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/login';
import Users from './components/users';
import {Register} from './components/register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Login}/>
        <Route path='/users' component={Users}/>
        <Route path='/register' component={Register}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
