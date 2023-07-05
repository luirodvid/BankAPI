import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name1: '',
        name2: '',
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
   handleClick(){
    const { name1, name2, username, password, email, phoneNumber } = this.state;
    const user ={name1,name2,username,password, email, phoneNumber}
    fetch("http://localhost:8080/users",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("New Student added")
    })
  }
  



  render() {
    const { name1, name2, username, password, email, phoneNumber } = this.state;
    return (
      <div className="App">
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
          <input type="text" name="name1" placeholder="First Name" value={name1} onChange={this.handleChange} />
          <input type="text" name="name2" placeholder="Last Name" value={name2} onChange={this.handleChange} />
          <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={this.handleChange} />
          <button type="submit">Create User</button>
        </form>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
        </div>
      </div>
    );
  }
}

export default App;