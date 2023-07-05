import React, { Component } from 'react';
import  LoginForm  from './Components/LoginForm';
import './App.css';
import settingImg from "./img/setting.png";
import Header from './Components/Header';
import Register from './Components/Register';
import Login from './Components/Login';
import bell from "./img/bell.svg";
import userIcon from "./img/bell.svg";
import homeIcon from "./img/bell.svg";
import logoutIcon from "./img/bell.svg";
import accountsIcon from "./img/bell.svg";
import burgerMenu from "./img/burger-menu.svg";


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
      <div className="App">
        <Header/>
       <Register/>
        <Login/>
      </div>
    );
  }
}

export default App;