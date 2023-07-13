
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bell from "../img/bell.svg";
import userIcon from "../img/bell.svg";
import homeIcon from "../img/bell.svg";
import logoutIcon from "../img/bell.svg";
import accountsIcon from "../img/bell.svg";
import burgerMenu from "../img/burger-menu.svg";
import SubHeader from "./SubHeader";
import { useLocation } from 'react-router-dom';

const Header = () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const logFirstname = localStorage.getItem('logFirstName');
  const logLastname = localStorage.getItem('logLastName');

  const [showSubHeader, setShowSubHeader] = useState(false);

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if(location.pathname === "/transfers"){
      setShowSubHeader(true);
    }
  }, [location.pathname])

  return (
    <header>
      <button id="burger-menu">
        <img src={burgerMenu} alt="" />
      </button>
      <h2>$ Real World App</h2>
      <span>
        <button id="new">$ NEW</button>
        <button id="bell"><img src={bell} alt="" /></button>
      </span>

      {showSubHeader && <SubHeader /> }

      <aside>
        <section id="usuario">
          {/*<img src={user} alt="" />*/}
          <p id="firstname">{isLoggedIn ? logFirstname : "Nombre"}</p>
          <p id="username">{isLoggedIn ? logLastname : "Apellido"}</p>
        </section>
        <section id="balance">
          <p id="total"></p>
          <p>Account balance</p>
        </section>
        <section id="opciones">
          <span id="opcion-home">
            <img src={homeIcon} alt="" />
            <p>Home</p>
          </span>
          <span id="opcion-mi-cuenta">
            <img src={userIcon} alt="" />
            <p>My Account</p>
          </span>
          <span id="opcion-cuentas">
            <img src={accountsIcon} alt="" />
            <p>Bank Accounts</p>
          </span>
          <span id="opcion-notificaciones">
            <img src={bell} alt="" />
            <p>Notifications</p>
          </span>
          <span id="opcion-logout">
            <img src={logoutIcon} alt="" />
            <p>Logout</p>
          </span>
        </section>
      </aside>
    </header>
  )
}
export default Header;