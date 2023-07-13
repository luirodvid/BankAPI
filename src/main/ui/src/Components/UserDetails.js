import React, { Component } from 'react';
import settingImg from "../img/setting.png";
import { useParams } from 'react-router-dom';
class UserDetails extends Component {
    constructor(props) {
        super(props);
        const userId = this.props.id;
        this.state = {
          id: this.props.id,
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

  
  handleGet = (event) => {
    event.preventDefault();
    const id = this.state.id;
    console.log( this.userId);
    fetch(`http://localhost:8080/users/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      async: true
    }).then((data) => {
      this.state = {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        password: data.password,
        email: data.email,
        phoneNumber: data.phoneNumber
      };
      
    })
  }

  render() {
    const {firstName, lastName, username, password, email, phoneNumber } = this.state;
    return (
      
        <div className="container">
          <h2>User Settings</h2>
          <section className="setting-section" id="setting-img"><img src={settingImg} alt="" /></section>
          <section className="setting-section" id="setting-form">
            <form onSubmit={this.handleGet}>
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

export default UserDetails;