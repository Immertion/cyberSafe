import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';

const Security = () => {
    const router = useRouter()

    const token = Cookies.get('jwtToken');

    useEffect(() => {
        if (token == null){
            router.push("auth")
        }
    })

    const handleLogout = () => {
        Cookies.remove('jwtToken');
        router.push("auth")
        
    };
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
                        <Link href="security" className="active">Security</Link>
                    </div>
                    <div className="search-bar">
                        <input type="search" placeholder="Search"/>
                        <button type="submit">🔍</button>
                    </div>
                </div>
            </header>
            <main className="main">
            <h1 className="title-setting">Settings</h1>
            <div className="settings">
            <div className="settingItem">
                <h2>Logout</h2>
                <button className="button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="settingItem">
                <h2>Two-Factor Authentication   (soon)</h2>
                <button className="button">Enable 2FA</button>
            </div>
            <div className="settingItem">
                <h2>Change Password</h2>
                <input type="password" placeholder="New Password" className="input" />
                <button className="button">Change Password</button>
            </div>
            </div>
        </main>
            <footer>
                <div className="footer-container">
                    <p>CryptoSafe</p>
                </div>
            </footer>
        <style jsx>
            {`
            .main {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 2rem;
              }
              
              .title-setting {
                font-size: 2rem;
                margin-bottom: 2rem;
              }
              
              .settings {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                width: 100%;
                max-width: 600px;
              }
              
              .settingItem {
                background-color: #2a2a2a;
                padding: 1.5rem;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
              }
              
              .settingItem h2 {
                margin-bottom: 1rem;
              }
              
              .button {
                padding: 0.75rem;
                background-color: #7d3c98;
                border: none;
                border-radius: 4px;
                color: #fff;
                cursor: pointer;
                width: 100%;
              }
              
              .input {
                width: 100%;
                padding: 0.75rem;
                margin-bottom: 1rem;
                border: none;
                border-radius: 4px;
              }
            `}
        </style>
        </div>
    )

}

export default Security;