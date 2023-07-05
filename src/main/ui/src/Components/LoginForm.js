import React, { Component } from 'react';
class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }
  
    handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { username, password } = this.state;
      
    const user = { username, password };
      // Realiza la validación de inicio de sesión y llamada a API aquí
      // ...
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
        async: true
      }).then(response => response.json())
      .then(data => {
        if (data !== null) {
          // Inicio de sesión exitoso, accede a los datos del usuario
          console.log('Usuario autenticado:', data);
          this.props.onLogin(data.username); // Llama a la función de devolución de llamada con los datos del usuario
        } else {
          // Inicio de sesión fallido
          alert('Nombre de usuario o contraseña inválidos');
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
        alert('Error al realizar la solicitud');
      });
      
      // Simulando una validación de inicio de sesión exitosa
      
    }
  
    render() {
        const { username, password } = this.state;
    
        return (
          <form onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        );
      }
    }
    
    export default LoginForm;