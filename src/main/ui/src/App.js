import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import Header from './Components/Header';
import Register from './Components/Register';
import Login from './Components/Login';
import BankAccounts from './Components/BankAccounts';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="/details/:id" element={<UserDetails />} />
          <Route path="/accounts" element={<BankAccounts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
