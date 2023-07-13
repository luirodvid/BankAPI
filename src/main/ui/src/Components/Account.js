import React from 'react';

const BankAccounts = (props) => {
    const { account } = props;

    const deleteAccount = () => {
        let userId = localStorage.getItem('logId');
        
        fetch(`http://localhost:8080/users/${userId}/bankAccounts/${account.id}`, {
            method: "DELETE",
        })

            .then(response => response.text())
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    };


    return (
        <li>
            <p className="account-info">
                <span id="bank-name">{account.name}</span>
                <span id="money">{account.balance}</span>
            </p>
            <form onSubmit={deleteAccount}>
                <button className="create-delete white-button" type="submit">DELETE</button>
            </form>
        </li>
    )
}
export default BankAccounts;