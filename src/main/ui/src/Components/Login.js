import React, { Component } from 'react';
import LoginForm from './LoginForm';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logUsername: '',
      isLoggedIn: false
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
  render(){
    const { isLoggedIn, logUsername } = this.state;
    return(
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
    )
  }
}
export default Login;


