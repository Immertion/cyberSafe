import Link from 'next/link'
import WalletSearch from '../components/WalletSearch';
import PersonalArea from '../components/PersonalArea';

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
                        <Link href="transaction">Transactions</Link>
                        <Link href="security" className="active">Settings</Link>
                    </div>
                    <div className="search-bar">
                        <WalletSearch />
                    </div>
                </div>
            </header>
            <PersonalArea />
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