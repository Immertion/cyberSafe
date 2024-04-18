import Link from 'next/link'


const Security = () => {


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
                        <Link href="#">Transactions</Link>
                        <Link href="security" className="active">Security</Link>
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

export default Security;