import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Register from './Components/Register';
import Login from './Components/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      logUsername: '',
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
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
          </Routes>
      </div>
    </Router>
    );
  }
}

export default App;