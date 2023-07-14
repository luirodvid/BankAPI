
import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bell from "../img/bell.svg";
import userIcon from "../img/user.svg";
import homeIcon from "../img/home.svg";
import logoutIcon from "../img/exit.svg";
import accountsIcon from "../img/bank.svg";
import burgerMenu from "../img/burger-menu.svg";
import SubHeader from "./SubHeader";
import { useLocation } from 'react-router-dom';

const Header = () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const logFirstname = localStorage.getItem('logFirstName');
  const logLastname = localStorage.getItem('logLastName');
  const navigate = useNavigate();

  const [showSubHeader, setShowSubHeader] = useState(false);

  const location = useLocation();

  const handleClick = (params) => () => {
    navigate("/"+params);
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('logId');
    localStorage.removeItem('logUsername');
    localStorage.removeItem('logFirstName');
    localStorage.removeItem('logLastName');
    navigate("/");
    
  };
  useEffect(() => {
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
        {/*<section id="balance">
          <p id="total"></p>
          <p>Account balance</p>
        </section>*/}
        <section id="opciones">
          <p id="opcion-home" onClick={handleClick("")}>
            <img src={homeIcon} alt="" />
            <span>Home</span>
          </p>
          <p id="opcion-mi-cuenta"  onClick={handleClick("details")}>
            <img src={userIcon} alt="" />
            <span>My Account</span>
          </p>
          <p id="opcion-cuentas" onClick={handleClick("accounts")}>
            <img src={accountsIcon} alt="" />
            <span>Bank Accounts</span>
          </p>
          {/*<p id="opcion-notificaciones">
            <img src={bell} alt="" />
            <span>Notifications</span>
          </p>*/}
          <p id="opcion-logout" onClick={handleLogout}>
            <img src={logoutIcon} alt="" />
            <span>Logout</span>
          </p>
        </section>
        
      </aside>
      
      

    </header>
  )
}
export default Header;