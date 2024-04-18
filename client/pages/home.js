"use client"
import Link from 'next/link'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ethLogo from "../images/ethereum.svg"
import Image from 'next/image'



const Home = () => {
    const decimalPlaces = 100
    const router = useRouter();
    const token = Cookies.get('jwtToken');
    const [balance, setBalance] = useState('');
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        if (token == null){
            router.push("auth")
        }
    })

    useEffect(() => {
        fetch("http://localhost:8080/wallet/balanceETC",{
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
            setBalance((Math.round((data)["balanceUsd"] * decimalPlaces) / decimalPlaces) + " USD")
            document.getElementById('spinner').style.display = 'none'
    })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    })

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="body">
            <header>
                <div className="navbar">
                    <div className="logo">
                        CryptoSafe
                    </div>
                    <div className="nav-links">
                        <Link href="/home"className="active">Home</Link>
                        <Link href="/wallet">Wallets</Link>
                        <Link href="/transactions">Transactions</Link>
                        <Link href="/security">Security</Link>
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
                        <div className="title">Wallet</div>
                        <div className="description">Your personal wallet management system</div>
                        <div className="balance-container">
                            <div className="balance-card">
                                <div className="balance-title">Balance</div>
                                <div className="balance-amount">{balance}</div>
                                <div id="spinner" className="spinner"></div>
                            </div>
                        </div>
                        <button className="start-btn" onClick={handleOpenModal}>Send</button>
                    </div>
                    <div className="right-pane">
                        <div className="transactions">
                            <h2 className="h-tran">Transactions history</h2>
                            <div className="chart">
                                {/* Chart will be here */}
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
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                <div className="modal-trans" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">Транзакция</div>
                  <div className="modal-body">
                        <label htmlFor="wallet">Кошелек:</label>
                        <select id="wallet" name="wallet">
                            <option value="wallet1">
                            <Image src={ethLogo}
                                alt="etcLogo"
                                width={30}
                                height={30}>
                            </Image>
                            Ethereum
                            </option>
                            <option value="wallet2">Bitcoin</option>
                            <option value="wallet3">USDT</option>
                        </select>

                        <label htmlFor="amount">Сумма:</label>
                        <input type="number" id="amount" name="amount" placeholder="Введите сумму" min="0" max={balance} step="0.01"/>

                        <label htmlFor="to-wallet">Отправить на кошелек:</label>
                        <input type="text" id="to-wallet" name="to_wallet" placeholder="Адрес кошелька"/>

                        <button type="submit" className="button-trans">Отправить</button>
                        <br></br>
                        <br></br>
                        <button type="button" className="button-trans" onClick={handleCloseModal}>Закрыть</button>
                    </div>
                </div>
            </div>
            )}

        <style jsx>
            {`
            .container_home {
                text-align: center; /* Align text to the left for a cleaner look */
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

            .spinner{
                margin-left: 10%;
                margin-top: 5%;
                
            }

            p{
                
                font-size: 1.2em
            }
            
            .balance-container {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
              }
              
              .balance-card {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 15px;
                padding: 20px 40px;
                box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: all 0.3s ease;
              }
              
              .balance-card:hover {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.4);
              }
              
              .balance-title {
                font-size: 18px;
                color: #fff;
                opacity: 0.7;
                margin-bottom: 10px;
              }
              
              .balance-amount {
                font-size: 0.9em;
                font-weight: bold;
                color: #fff;
                letter-spacing: 1px;
              }

              .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
              }
              
              
            .modal-trans {
                background: #232323;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
                width: 100%;
                max-width: 400px;
                transform: translateY(-100vh);
                animation: slideIn 0.5s forwards;
            }

            @keyframes slideIn {
                from {
                transform: translateY(-100vh);
                opacity: 0;
                }
                to {
                transform: translateY(0);
                opacity: 1;
                }
            }

            .modal-header {
                font-size: 24px;
                color: #efefef;
                text-align: center;
                margin-bottom: 20px;
            }

            .modal-body {
                margin-bottom: 20px;
            }

            label {
                display: block;
                margin-bottom: 5px;
            }

            select, input {
                width: calc(100% - 20px);
                padding: 10px;
                margin-bottom: 20px;
                background: #333;
                border: 1px solid #444;
                border-radius: 5px;
                color: white;
            }

            .button-trans {
                background-color: #5f27cd;
                color: white;
                padding: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                width: 100%;
                transition: background-color 0.3s ease;
            }

            .button-trans:hover {
                background-color: #7a5cbd;
            }

            input[type=number]::-webkit-inner-spin-button,
            input[type=number]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            input[type=number] {
                -moz-appearance: textfield;
            }



            `}
        </style>
        </div>



        
    );

}

export default Home