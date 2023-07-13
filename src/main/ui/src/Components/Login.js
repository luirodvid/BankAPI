import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  const [logUsername, setLogUsername] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [logId, setLogId] = useState('');

  const handleLogin = (username, id) => {
    setLoggedIn(true);
    setLogUsername(username);
    setLogId(id);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('logUsername', username);
    localStorage.setItem('logId', id);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLogUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('logUsername');
  };

  return (
    <div className="Login">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {logUsername}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Login;