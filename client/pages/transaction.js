import Link from 'next/link'


const Transaction = () => {


    return ( 
        <div className="body">
            <header>
                <div className="navbar">
                    <div className="logo ">
                        CryptoSafe
                        </div>
                    <div className="nav-links">
                        <Link href="home" >Home</Link>
                        <Link href="wallet" >Wallets</Link>
                        <Link href="transaction" className="active">Transactions</Link>
                        <Link href="security">Security</Link>
                    </div>
                    <div className="search-bar">
                        <input type="search" placeholder="Search"/>
                        <button type="submit">🔍</button>
                    </div>
                </div>
            </header>
                
            <footer>
                <div className="footer-container">
                    <p>CryptoSafe</p>
                </div>
            </footer>
        <style jsx>
            {`
            `}
        </style>
        </div>
    )

}

export default Transaction;