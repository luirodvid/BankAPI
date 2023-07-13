import { createElement } from "react";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Account from './Account';
const BankAccounts = () => {



  const [name, setAccountName] = useState('');
    const navigate = useNavigate();
    const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    
    let id = localStorage.getItem('logId');
    if( id != null){
    fetch(`http://localhost:8080/users/${id}/bankAccounts`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      async: true
    })
      .then(response => response.json())
      .then(data => {
        setAccounts(data);
      })
      .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
        alert('Error al obtener los datos del usuario');
      });}
      else{
        navigate("/");
        ///Aquí quiero que redireccione a la vista principal, a poder ser usando route
      }
      
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'new-account-name') {
      setAccountName(value);
    } 
  };

    const onHandleCreate = (event) => {
        event.preventDefault();

        document.getElementById("new-account-name").style.display = "inline";
        document.getElementById("send-account-name").style.display = "inline";
        document.getElementById("create-account-button").style.display = "none";
    }

    const onHandleSend = () => {
      let id = localStorage.getItem('logId');
      let balance = 0;
      const newAccount={
        name,
        balance
      };
        fetch(`http://localhost:8080/users/${id}/bankAccounts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAccount),
      async: true
    })
      .then(() => {
        console.log("New account added");
      })
      .catch(error => {
        console.error('Error al guardar los datos de la cuenta:', error);
        alert('Error al guardar los datos de la cuenta');
      });

    }
    const createAccount = () => {
      console.log("adios");
    }

    return (
        <main className="main-container" id="accounts-container">
            {/* form igual se puede eliminar */}
            <div>
                <h2>Bank Accounts</h2>
                <form id="create-account-form">
                    <button id="send-account-name" onClick={onHandleSend} className="create-delete darkblue-button" type="submit">SEND</button>
                    <input id="new-account-name" name="new-account-name" placeholder="Bank account name..." type="text" onChange={handleChange} />
                    <button id="create-account-button" onClick={onHandleCreate} className="create-delete darkblue-button" type="submit">CREATE</button>
                </form>
            </div>
            <ul>
                {/*Deberá ser un List de las cuentas*/}
                
                
                {accounts.map((account)=>
                <Account key={account.id} account = {account}/>
                )


                }
              
            </ul>
        </main>
    )
}

export default BankAccounts;