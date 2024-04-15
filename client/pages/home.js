"use client"
import Link from 'next/link'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home = () => {
    const decimalPlaces = 1000
    const router = useRouter();
    const token = Cookies.get('jwtToken');
    const [balance, setBalance] = useState('');
    useEffect(() => {
        if (token == null){
            router.push("auth")
        }
    })

    useEffect(() => {
        fetch("http://localhost:8080/wallet/etc",{
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ token,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setBalance((Math.round((data)["balanceUsd"] * decimalPlaces) / decimalPlaces) + " usd")
            document.getElementById('spinner').style.display = 'none'
    })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    })

    return (


        <div className="body">
            <header>
                <div className="navbar">
                    <div className="logo ">
                        CryptoSafe
                        </div>
                    <div className="nav-links">
                        <Link href="home" className="active">Home</Link>
                        <Link href="wallet">Wallets</Link>
                        <Link href="#">Transactions</Link>
                        <Link href="#">Security</Link>
                    </div>
                    <div className="search-bar">
                        <input type="search" placeholder="Search"/>
                        <button type="submit">🔍</button>
                    </div>
                </div>
            </header>

        <div className="container_home">
            
    

    
            <div className="split-container">
                <div className="left-pane">
                    <div  className="title">Wallet</div>
                    <div className="description">Your personal wallet management system</div>
                    <div className="balance">
                        <h2>Total balance</h2>
                        <p>
                        {balance}
                        </p>
                        <div id="spinner" className="spinner" ></div>

                    </div>
                    <button className="start-btn">Send</button>
                    <div className="register-invitation">

                    </div>
                </div>
                <div className="right-pane">
                    <div className="transactions">
                        <h2 className='h-tran'>Transactions history</h2>
                        <div className="chart">
                           
                        </div>
                    </div>
                   
                </div>
            </div>
    
        </div>
                
            <footer>
                <div className="footer-container">
                    <p>CryptoSafe</p>
                </div>
            </footer>
        <style jsx>
            {`
            .container_home {
                text-align: left; /* Align text to the left for a cleaner look */
                border-radius: 10px; /* Smoothed the corners */
                background: #222;
                padding: 2em;
                max-width: 1200px; /* Adjusted for a wider layout */
                width: 100%;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.7); /* Subtle shadow for depth */
            }

            .h-tran{
                padding: 20px
            }
            
      
            `}
        </style>
        </div>



        
    );

}

export default Home