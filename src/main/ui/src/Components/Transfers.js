import SubHeader from "./SubHeader";

const Transfers = () => {

    return(
        <main className="main-container" id="transfer-main">
            <form action="">
                <select name="date-select" id="date-select">
                    <option value="all">Date: ALL</option>
                </select>
                <select name="amount-select" id="amount-select">
                    <option value="1000">Amount: $0 - $1,000</option>
                </select>
            </form>
        </main>
    )
}

export default Transfers;