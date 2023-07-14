
import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

const SubHeader = () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const logFirstname = localStorage.getItem('logFirstName');
  const logLastname = localStorage.getItem('logLastName');

  // setShowSubHeader("false");
  return (
    <nav id="transfer-nav">
      <ul>
        <li className="transfer-nav-li" id="everyone-li"><button>EVERYONE</button></li>
        <li className="transfer-nav-li" id="friends-li"><button>FRIENDS</button></li>
        <li className="transfer-nav-li" id="mine-li"><button>MINE</button></li>
      </ul>
    </nav>
  )
}
export default SubHeader;