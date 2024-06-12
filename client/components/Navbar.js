import { useState, useEffect } from 'react';
import Link from 'next/link'
import WalletSearch from './WalletSearch';

export default function Navbar({activeWindow}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    };


    return (
        <header>
                <div className="navbar unselectable">
                    <div className="logo ">
                        CryptoSafe
                        </div>
                        <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
                        <div className={`nav-links ${isMenuOpen ? 'show-nav-links' : ''}`}>
                            <Link href="home" className={activeWindow=="home" ? 'active' : ''} >Home</Link>
                            <Link href="wallet" className={activeWindow=="wallet" ? 'active' : ''}>Wallets</Link>
                            <Link href="transaction" className={activeWindow=="transaction" ? 'active' : ''}>Transactions</Link>
                            <Link href="security" className={activeWindow=="security" ? 'active' : ''}>Settings</Link>
                        </div>
                    <div className="search-bar">
                        <WalletSearch />
                    </div>
                </div>
            </header>
    );
}