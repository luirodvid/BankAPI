import React, { Component } from 'react';
import settingImg from "../img/setting.png";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          username: '',
          password: '',
          email: '',
          phoneNumber: ''
        };
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
    const {firstName, lastName, username, password, email, phoneNumber } = this.state;
    return (
      
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
    );
  }
}

export default Register;