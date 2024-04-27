import Link from 'next/link'
import Image from 'next/image'
import ethLogo from "../images/ethereum.svg"
import copyIcon from "../images/copy.svg"
import qrIcon from "../images/qr-code.svg"
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import QRCode from 'qrcode.react';


const imageLoader = ({ src}) => {
    return `${src}`
  }

const Wallet = () => {
    const [balance, setBalance] = useState('');
    const [notification, setNotification] = useState('')
    const token = Cookies.get('jwtToken');
    const [address, setAddress] = useState('')
    const router = useRouter()
    
    useEffect(() => {
        if (token == null){
            router.push("auth")
        }
    })

    useEffect(() => {
        fetch("http://localhost:8080/wallet/addressETC",{
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
            setAddress(data)
    })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    })
        

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

    const GetQRCode = async () => {
        document.getElementById('loadingBackground').style.display = 'flex'
        document.getElementById('loadingBackground').addEventListener('click', function(event) {
            if (event.target === this) {
              this.style.display = 'none';
            }
          });
    };    
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
            setBalance((("balance - " +(data)["balanceCrypto"])) + " ETC")

            document.getElementById('spinner').style.display = 'none'
    })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    })


    return ( 
        <div className="body">

            <header>
                <div className="navbar unselectable">
                    <div className="logo ">
                        CryptoSafe
                        </div>
                    <div className="nav-links">
                        <Link href="home" >Home</Link>
                        <Link href="wallet" className="active">Wallets</Link>
                        <Link href="#">Transactions</Link>
                        <Link href="security">Security</Link>
                    </div>
                    <div className="search-bar">
                        <input type="search" placeholder="Search"/>
                        <button type="submit">🔍</button>
                    </div>
                </div>
            </header>

        <div className="container_home">
        <div className="content">
            <Image src={ethLogo}
                alt="etcLogo"
                className='unselectable'
                width={30}
                height={30}>
            </Image>
            <div className="address">{address}</div>
            <button  onClick={() => copyToClipboard(address)} className="copy-button icon-button">
            <Image src={copyIcon}
                className='unselectable'
                alt="copyIcon"
                width={30}
                height={30}>
            </Image>
             </button>
             <button  onClick={() => GetQRCode()} className="copy-button icon-button">
            <Image src={qrIcon}
                className='unselectable'
                alt="qrIcon"
                width={30}
                height={30}>
            </Image>
             </button>


        </div>
        <div className="address">{balance}</div>

        {notification && <div className="notification">{notification}</div>}
           
            <div id="loadingBackground" className="loading-background">
                <div className="container-qr">
                <QRCode value={address}/>
                </div>
            </div>

    
        </div>
                
            <footer>
                <div className="footer-container unselectable">
                    <p>CryptoSafe</p>
                </div>
            </footer>
        <style jsx>
            {`
            .container_home {
               
                display: flex; /* Use flex to enable flexbox properties */
                flex-direction: column; /* Stack children vertically */
                align-items: center; /* Align children in the center horizontally */
                justify-content: center; /* Center children vertically */
                padding: 1em;
                text-align: center; /* Align text to the left for a cleaner look */
                border-radius: 50px; /* Smoothed the corners */
                background: #222;
                max-width: 1000px;
                width: 40%;
                box-shadow: 0 0 10px #BB86FC, 0 0 30px #BB86FC, 0 0 60px #BB86FC;
              }

            .container-qr {
                border: 1px solid #9A4EFF; /* серо-фиолетовая рамка */
                border-radius: 20px; /* скругленные углы */
                padding: 20px; /* отступы внутри рамки */
                background-color: #f5f5f5; /* серый фон */
                display: inline-block;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* тень */
                position: relative;
                text-align: center;

            }
            
 
              
              .content {
                display: flex;
                align-items: center; /* Aligns the items vertically in the center */
                justify-content: center; /* Centers the content horizontally */
                gap: 10px; /* Adds space between the Ethereum logo and the address */
              }
              

            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px;
                background-color: #333; /* example color */
                color: white;
                border-radius: 15px; /* rounded corners */
                
            }
        

            .icon-button {
                background: transparent;
                border: none;
                back
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
            
            .icon, .icon-square, .icon-star, .icon-settings, .icon-edit {
                background-color: #555; /* example color */
                width: 30px; /* example size */
                height: 30px; /* example size */
                border-radius: 50%; /* makes it rounded */
                margin-right: 10px;
            }
            
            /* To represent the text, which I assume is a crypto address or something similar */
            .address {
                flex-grow: 1;
                text-align: center;
                font-family: monospace;
            }
            
            /* Container for the icons on the right */
            .icons-right {
                display: flex;
            }
            
            .icon-square, .icon-star, .icon-settings, .icon-edit {
                /* Example of how you might adjust individual icons */
                background-color: #777; /* different color for the right-side icons */
                border-radius: 15%; /* less rounded corners for square icons */
            }
            
            /* Last icon should not have a margin to the right */
            .icons-right div:last-child {
                margin-right: 0;
            }
            
            

            .copy-button {
                /* Style your button here */
                cursor: pointer;
                // background-color: #555;
                border-radius: 20%;
        
                
              }
              .notification {
                position: fixed;
                right: 20px;
                bottom: 20px;
                background-color: #7B2EFF; /* A pleasant green background */
                color: white; /* White text color */
                padding: 16px;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Subtle shadow for depth */
                z-index: 1000; /* Ensure it's above other items */
                transition: transform 0.5s, opacity 0.5s;
                transform: translateY(100%);
                opacity: 0;
                /* This will make the notification slide in */
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
              
              
            `}
        </style>
        </div>
    )

}

export default Wallet;