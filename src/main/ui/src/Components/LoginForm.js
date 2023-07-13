import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { username, password };

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      async: true
    })
      .then(response => response.json())
      .then(data => {
        if (data !== null) {
          console.log('Usuario autenticado:', data);
          onLogin(data.username, data.id, data.firstName, data.lastName);
        } else {
          alert('Nombre de usuario o contraseña inválidos');
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
        alert('Error al realizar la solicitud');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;