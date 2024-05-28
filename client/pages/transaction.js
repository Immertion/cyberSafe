import Link from 'next/link'
import { parseISO, format, add } from 'date-fns';
import React, { useEffect,  useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image'
import copyIcon from "../images/copy.svg"
import etherscanIcon from "../images/etherscan-logo-circle.svg"
import { useRouter } from 'next/router'

const apiKey = "U9ZR3EP6E9VZ2KGXQDM9JP5YDAXP9SB2Z5"
const pageSize = 10


const Transaction = () => {
    const [address, setAddress] = useState('')
    const [notification, setNotification] = useState('')
    const token = Cookies.get('jwtToken');
    const [addressLoaded, setAddressLoaded] = useState(false); // Состояние для отслеживания получения адреса
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const router = useRouter()

    useEffect(() => {
        if (token == null){
            router.push("auth")
        }
    })
    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await fetch("http://localhost:8080/wallet/addressETC", {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                setAddress(data);
                setAddressLoaded(true); 
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };
        fetchAddress();
    })

    const weiToEth = (wei) => (wei / 1e18).toFixed(6);

    const formatDate = (timestamp) => {
        const date = parseISO(new Date(timestamp * 1000).toISOString());
        return format(date, 'PPPppp').replace('GMT', '').trim();
    };

    const copyToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          setNotification('txHash copied!');
          setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
        } catch (err) {
          setNotification('Failed to copy');
          setTimeout(() => setNotification(''), 3000);
        }
    };

    
    const fetchTransactions = async (page) => {
        setLoading(true);
        try {
            const offset = (page - 1) * pageSize;
            const res = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${pageSize}&sort=desc&apikey=${apiKey}`);
            const data = await res.json();
            console.log(page)
            
            if (data.status === "1") {
                setTransactions(data.result || []);
                setTotal(data.result.length * pageSize);  // Обновляем общее количество транзакций
            } else {
                console.error("Failed to fetch transactions:", data.message);
            }
        } catch (error) {
            console.error("Error fetching transactions:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (addressLoaded) {
            fetchTransactions(page);
        }
    }, [addressLoaded, page]);




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

            
            <div className="container">
                <div className="transactionList">
                    {loading ? (
                    <div>Loading...</div> ) : transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <div key={transaction.hash} className="transaction">
                            <div>
                                <div className="time">Date: {formatDate(transaction.timeStamp)}</div>
                            </div>
                            <div className={transaction.to.toLowerCase() === address.toLowerCase() ? "amountIn" : "amountOut"}>
                                {transaction.to.toLowerCase() === address.toLowerCase() ? '+' : '-'}
                                {weiToEth(transaction.value)} ETH
                            </div>
                            <div className={"hash"}>
                                <span>txHash: {transaction.hash}</span>
                                <button onClick={() => copyToClipboard(transaction.hash)} className="copy-button icon-button">
                                <Image src={copyIcon}
                                    className='unselectable'
                                    alt="copyIcon"
                                    width={30}
                                    height={30}>
                                </Image>
                                </button>
                            </div>
                            <a href={`https://etherscan.io/tx/${transaction.hash}`} className="link" target="_blank" rel="noopener noreferrer">
                                <Image src={etherscanIcon}
                                    className='unselectable Image'
                                    alt="etherscanIcon"
                                    width={30}
                                    height={30}>
                                </Image> Etherscan</a>
                            </div>
                        ))
                    ) : (
                    <div>No transactions found for this account.</div>
                    )}
                    </div>
            <div className="pagination">
                <button 
                    onClick={() => setPage(page - 1)} 
                    disabled={page === 1}
                    className="pageButton"
                >
                    Previous
                </button>
                <span className="pageInfo">Page {page} </span>
                <button 
                    onClick={() => setPage(page + 1)} 
                    disabled={page >= Math.ceil(total / pageSize)}
                    className="pageButton"
                >
                    Next
                </button>
            </div>
                </div>
            

            {notification && <div className="notification">{notification}</div>}
            <footer>
                <div className="footer-container">
                    <p>CryptoSafe</p>
                </div>
            </footer>
        <style jsx>
            {`


            .container {
                display: flex;
                flex-direction: column;
                gap: 20px;
                padding: 20px;
                max-width: 800px;
                margin: 0 auto;
                background-color: #121212;
                color: white;
                font-family: Arial, sans-serif;
            }
            
            .transactionList {
                max-height: 65vh; /* Ограничиваем высоту контейнера */
                overflow-y: auto; /* Добавляем вертикальную прокрутку */
                padding-right: 10px; /* Добавим отступ для прокрутки */
            }
            
            .transaction {
                display: flex;
                flex-direction: column;
                gap: 10px;
                background-color: #1e1e1e;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #333;
                margin-bottom: 10px; /* Добавим отступ между транзакциями */
            }
            
            .transaction > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .icon {
                font-size: 24px;
            }
            
            .time {
                font-size: 16px;
            }
            
            .amountIn {
                color: green;
                font-size: 18px;
            }
            
            .amountOut {
                color: red;
                font-size: 18px;
            }
            
            .hash {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #888;
            }
            
            .hash span {
                color: white;
                margin-right: 10px;
                word-break: break-all; /* To ensure the hash breaks correctly */
            }
            
            .copyButton {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 16px;
                margin-left: 10px;
            }
            
            .link {
                color: white;
                text-decoration: none;
                font-size: 20px;
                margin-top: 10px; /* Добавим отступ сверху для ссылки */
                display: flex;
                align-items: center;
            }
            
            .link::before {
                margin-right: 5px;
            }
  
            
            .link::before {
                margin-right: 5px;
            }
            .pagination {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
            }
            
            .pageButton {
                background: #333;
                color: #fff;
                border: 1px solid #555;
                padding: 10px 20px;
                cursor: pointer;
                margin: 0 5px;
                border-radius: 5px;
            }
            
            .pageButton:disabled {
                cursor: not-allowed;
                opacity: 0.5;
            }
            
            .pageInfo {
                font-size: 1em;
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

export default Transaction;