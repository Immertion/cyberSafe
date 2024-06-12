import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import copyIcon from "../images/copy.svg"
import qrIcon from "../images/qr-code.svg"
import QRCode from 'qrcode.react';


export default function WalletToken({address, balance, iconWallet}) {
    const [notification, setNotification] = useState('')


    const GetQRCode = async () => {
        document.getElementById('loadingBackground').style.display = 'flex'
        document.getElementById('loadingBackground').addEventListener('click', function(event) {
            if (event.target === this) {
              this.style.display = 'none';
            }
          });
    };    

    const copyToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          setNotification('Address copied!');
          setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
        } catch (err) {
          setNotification('Failed to copy');
          setTimeout(() => setNotification(''), 3000);
        }
    };


    return (
        <div className="wallet-container">
            <div className="wallet-content">
                <Image src={iconWallet}
                    alt="iconWallet"
                    className='unselectable'
                    width={30}
                    height={30}>
                </Image>
                <div className="address">{address}</div>
                <button onClick={() => copyToClipboard(address)} className="copy-button icon-button">
                    <Image src={copyIcon}
                        className='unselectable'
                        alt="copyIcon"
                        width={30}
                        height={30}>
                    </Image>
                </button>
                <button onClick={() => GetQRCode()} className="copy-button icon-button">
                    <Image src={qrIcon}
                        className='unselectable'
                        alt="qrIcon"
                        width={30}
                        height={30}>
                    </Image>
                </button>
            </div>
            <div className="balance">{balance}</div>

            <div id="loadingBackground" className="loading-background">
                <div className="container-qr">
                    <QRCode value={address} />
                </div>
            </div>

            {notification && <div className="notification">{notification}</div>}

            <style jsx>
                {`
                .wallet-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 1em;
                    text-align: center;
                    border-radius: 20px;
                    background: #222;
                    width: 600px;
                    margin: 10px;
                    box-shadow: 0 0 10px #BB86FC, 0 0 30px #BB86FC, 0 0 60px #BB86FC;
                }
                
                .wallet-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }

                .balance {
                    margin-top: 10px;
                    font-family: monospace;
                }

                .icon-button {
                    background: transparent;
                    border: none;
                    outline: none;
                    filter: invert(100%);
                    padding: 0;
                    margin: 0;
                    cursor: pointer;
                    transition: box-shadow 0.3s ease-in-out;
                }

                .icon-button:hover {
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
                }

                .address {
                    flex-grow: 1;
                    text-align: center;
                    font-family: monospace;
                }

                .notification {
                    position: fixed;
                    right: 20px;
                    bottom: 20px;
                    background-color: #7B2EFF;
                    color: white;
                    padding: 16px;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    z-index: 1000;
                    transition: transform 0.5s, opacity 0.5s;
                    transform: translateY(100%);
                    opacity: 0;
                    animation: slideIn 0.5s forwards;
                }

                @keyframes slideIn {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .loading-background {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    align-items: center;
                    justify-content: center;
                    z-index: 999;
                }

                .container-qr {
                    border: 1px solid #9A4EFF;
                    border-radius: 20px;
                    padding: 20px;
                    background-color: #f5f5f5;
                    display: inline-block;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
                    text-align: center;
                }

                
            /* Адаптивные стили */
            @media (max-width: 1200px) {
                .container_home {
                    width: 60%;
                }
            }
            
            @media (max-width: 768px) {
                .container_home {
                    width: 80%;
                    padding: 1em;
                }
                
                .content {
                    flex-direction: column;
                }
            
                .container {
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 1em;
                }
                
                .icon, .icon-square, .icon-star, .icon-settings, .icon-edit {
                    margin-right: 5px;
                    width: 25px;
                    height: 25px;
                }
            
                .address {
                    text-align: left;
                }
            
                .icons-right {
                    margin-top: 10px;
                }
            }
            
            @media (max-width: 480px) {
                .container_home {
                    width: 90%;
                    padding: 0.5em;
                }
            
                .container {
                    padding: 0.5em;
                }
            
                .icon, .icon-square, .icon-star, .icon-settings, .icon-edit {
                    width: 20px;
                    height: 20px;
                }
            
                .address {
                    font-size: 0.8em;
                }
            
                .notification {
                    right: 10px;
                    bottom: 10px;
                    padding: 10px;
                    font-size: 0.8em;
                }
            }
            
              
            `}
        </style>
        </div>
    );
}







