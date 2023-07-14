import React, { useState , useEffect  } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  const [logUsername, setLogUsername] = useState('');
  const [isLoggedIn, setLoggedIn] = useState('');
  const [logFirstName, setLogFirstName] = useState('');
  const [logLastName, setLogLastName] = useState('');
  const [logId, setLogId] = useState('');


  useEffect(() => {
    const storedUsername = localStorage.getItem('logUsername');
    const storedFirstName = localStorage.getItem('logFirstName');
    const storedLastName = localStorage.getItem('logLastName');
    const storedLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUsername && storedFirstName && storedLastName && storedLoggedIn) {
      setLogUsername(storedUsername);
      setLogFirstName(storedFirstName);
      setLogLastName(storedLastName);
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (logUsername, logId, logFirstName, logLastName) => {
    setLoggedIn(true);
    setLogUsername(logUsername);
    setLogFirstName(logFirstName);
    setLogLastName(logLastName);
    setLogId(logId);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('logUsername', logUsername);
    localStorage.setItem('logFirstName', logFirstName);
    localStorage.setItem('logLastName', logLastName);
    localStorage.setItem('logId', logId);
    window.location.reload();
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLogUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('logId');
    localStorage.removeItem('logUsername');
    localStorage.removeItem('logFirstName');
    localStorage.removeItem('logLastName');
    
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