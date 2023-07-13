import React, { useState, useEffect } from 'react';
import settingImg from "../img/setting.png";
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  let { id } = useParams();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    //
    if (id==null) id = localStorage.getItem('logId');
    fetch(`http://localhost:8080/users/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      async: true
    })
      .then(response => response.json())
      .then(data => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setUsername(data.username);
        setPassword(data.password);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
      })
      .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
        alert('Error al obtener los datos del usuario');
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      id,
      firstName,
      lastName,
      username,
      password,
      email,
      phoneNumber
    };

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      async: true
    })
      .then(() => {
        console.log("New user added");
      })
      .catch(error => {
        console.error('Error al guardar los datos del usuario:', error);
        alert('Error al guardar los datos del usuario');
      });
  };

  return (
    <div className="container">
      <h2>User Settings</h2>
      <section className="setting-section" id="setting-img">
        <img src={settingImg} alt="" />
      </section>
      <section className="setting-section" id="setting-form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={handleChange} />
          <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={handleChange} />
          <button type="submit">SAVE</button>
        </form>
      </section>
    </div>
  );
};

export default UserDetails;
