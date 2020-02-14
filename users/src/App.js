import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/login';
import Users from './components/users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Login}/>
        <Route path='/users' component={Users}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
