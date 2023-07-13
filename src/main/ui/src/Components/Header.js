
import React, { Component } from 'react';
import bell from "../img/bell.svg";
import userIcon from "../img/bell.svg";
import homeIcon from "../img/bell.svg";
import logoutIcon from "../img/bell.svg";
import accountsIcon from "../img/bell.svg";
import burgerMenu from "../img/burger-menu.svg";

const Header = () => {
    
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
          <aside>
            <section id="usuario">
              {/*<img src={user} alt="" />*/}
              <p id="firstname">Nombre</p>
              <p id="username">Apellido</p>
            </section>
            <section id="balance">
              <p id="total"></p>
              <p>Account balance</p>
            </section>
            <section id="opciones">
              <p id="opcion-home">
                <img src={homeIcon} alt="" />
                <p>Home</p>
              </p>
              <p id="opcion-mi-cuenta">
                <img src={userIcon} alt="" />
                <p>My Account</p>
              </p>
              <p id="opcion-cuentas">
                <img src={accountsIcon} alt="" />
                <p>Bank Accounts</p>
              </p>
              <p id="opcion-notificaciones">
                <img src={bell} alt="" />
                <p>Notifications</p>
              </p>
              <p id="opcion-logout">
                <img src={logoutIcon} alt="" />
                <p>Logout</p>
              </p>
            </section>
          </aside>
        </header>
)}
export default Header;