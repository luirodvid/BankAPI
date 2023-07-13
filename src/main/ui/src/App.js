import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import Header from './Components/Header';
import Register from './Components/Register';
import Login from './Components/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      logUsername: '',
      logId: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: '',
      phoneNumber: ''
    };
  }
  render() {
    return (
    <Router>
      <div className="App">
          <Header />
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route path="/details/:id" element={<UserDetails/>}/>
          </Routes>
      </div>
    </Router>
    );
  }
}

export default App;