import React, { Component } from 'react';
import  LoginForm  from './Components/LoginForm';
import './App.css';
import settingImg from "./img/setting.png";
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

  handleLogin = (logUsername) => {
    this.setState({
      isLoggedIn: true,
      logUsername: logUsername
    });
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('logUsername', logUsername);
  }
  handleLogout = (logUsername) => {
    this.setState({
      isLoggedIn: false,
      logUsername: ''
    });
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('logUsername');
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, username, password, email, phoneNumber } = this.state;
    const user = { firstName, lastName, username, password, email, phoneNumber };

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      async: true
    }).then(() => {
      console.log("New user added")
    })
  }





  render() {
    const { isLoggedIn, logUsername, firstName, lastName, username, password, email, phoneNumber } = this.state;
    return (
      <div className="App">
        <header>
          <button id="burger-menu">
            <img src={burgerMenu} alt="" />
          </button>
          <h2>$ Real World App</h2>
          <span>
              <button id="new">$ NEW</button>
              <button id="bell"><img src={bell} alt="" /></button>
          </span>
          <aside>
            <section id="usuario">
              {/*<img src={user} alt="" />*/}
              <p id="firstname">Nombre</p>
              <p id="username">Apellido</p>
            </section>
            <section id="balance">
              <p id="total"></p>
              <p>Account balance</p>
            </section>
            <section id="opciones">
              <p id="opcion-home">
                <img src={homeIcon} alt="" />
                <p>Home</p>
              </p>
              <p id="opcion-mi-cuenta">
                <img src={userIcon} alt="" />
                <p>My Account</p>
              </p>
              <p id="opcion-cuentas">
                <img src={accountsIcon} alt="" />
                <p>Bank Accounts</p>
              </p>
              <p id="opcion-notificaciones">
                <img src={bell} alt="" />
                <p>Notifications</p>
              </p>
              <p id="opcion-logout">
                <img src={logoutIcon} alt="" />
                <p>Logout</p>
              </p>
            </section>
          </aside>
        </header>
        <div className="container">
          <h2>User Settings</h2>
          <section className="setting-section" id="setting-img"><img src={settingImg} alt="" /></section>
          <section className="setting-section" id="setting-form">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange} />
              <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
              <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
              <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
              <input type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={this.handleChange} />
              <button type="submit">SAVE</button>
            </form>
          </section>
        </div>
        
        <div className="Login">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {logUsername}!</h1>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={this.handleLogin} />
      )}
    </div>


      </div>
    );
  }
}

export default App;