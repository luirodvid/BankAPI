import { createElement } from "react";

const BankAccounts = () => {

    //Aparece un input text en lugar del button
    const onHandleCreate = (event) => {
        event.preventDefault();

        document.getElementById("new-account-name").style.display = "inline";
        document.getElementById("send-account-name").style.display = "inline";
        document.getElementById("create-account-button").style.display = "none";
    }

    const onHandleSend = (event) => {
        event.preventDefault();

    }


    return (
        <div id="accounts-container">
            {/* form igual se puede eliminar */}
            <div>
                <h2>Bank Accounts</h2>
                <form id="create-account-form" action="">
                    <button id="send-account-name" onClick={onHandleSend} className="create-delete darkblue-button" type="submit">SEND</button>
                    <input id="new-account-name" name="new-account-name" placeholder="Bank account name..." type="text" />
                    <button id="create-account-button" onClick={onHandleCreate} className="create-delete darkblue-button" type="submit">CREATE</button>
                </form>
            </div>
            <ul>
                {/*Deberá ser un List de las cuentas*/}
                <li><p className="account-info"><span id="bank-name">Nombre del banco</span><span id="money">$5.000</span></p><form action=""><button className="create-delete white-button" type="submit">DELETE</button></form></li>
                <li><p className="account-info"><span id="bank-name">Nombre del banco</span><span id="money">$5.000</span></p><form action=""><button className="create-delete white-button" type="submit">DELETE</button></form></li>
                <li><p className="account-info"><span id="bank-name">Nombre del banco</span><span id="money">$5.000</span></p><form action=""><button className="create-delete white-button" type="submit">DELETE</button></form></li>
                <li><p className="account-info"><span id="bank-name">Nombre del banco 2</span><span id="money">$10.000</span></p><form action=""><button className="create-delete white-button" type="submit">DELETE</button></form></li>

            </ul>
        </div>
    )
}

export default BankAccounts;