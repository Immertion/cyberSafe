"use client"
import Link from 'next/link'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import blockies from 'ethereum-blockies';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip } from 'chart.js';

import moment from 'moment';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

import WalletSearch from '../components/WalletSearch';


const myAddress = "0x36571670965758bC0b7e90bb7ebdD202489Af418";
const apiKey = "U9ZR3EP6E9VZ2KGXQDM9JP5YDAXP9SB2Z5";
const pageSize = 1000;
const weiToEth = (wei) => (wei / 1e18).toFixed(6);


function GeneratedIcon(address){
    var newBlockie = blockies.create({
        seed: address,
        size: 10,
        scale: 8,
    }).toDataURL();

    return newBlockie
}

const GasFeeDisplay = ({ amount }) => {
    const [gasPrice, setGasPrice] = useState(null);
    const gasLimit = 21000;

    useEffect(() => {
        fetch("http://localhost:8080/wallet/gasPrice", {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setGasPrice(data)
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    })
    const fee = (parseFloat(gasPrice) * gasLimit) + parseFloat(amount);

    // Форматируем число с двумя знаками после запятой
    const formattedFee = fee.toFixed(3);

    return (
        <div className="fee-display">
            <div className="fee-label">With commission:</div>
            <div className="fee-value">{isNaN(formattedFee) ? 0 : formattedFee} USD</div>
            <style jsx>{`
          .fee-display {
            border-radius: 8px; /* Скругление углов, чтобы соответствовать элементам формы */
            color: #FFFFFF; /* Белый цвет текста для контраста с тёмным фоном */
            font-size: 0.9rem; /* Устанавливаем стандартный размер шрифта */
            margin-bottom: 20px; /* Добавляем немного места сверху и снизу элемента */
            padding: 10px 20px; /* Внутренние отступы для воздуха вокруг контента */
            display: flex; /* Используем flexbox для центрирования текста */
            justify-content: space-between; /* Располагаем элементы на равном расстоянии друг от друга */
            align-items: center; /* Центрируем элементы по вертикали */
            border: 1px solid #404040; /* Добавляем границу, чтобы выделить элемент */
            font-family: 'Arial', sans-serif; /* Шрифт, соответствующий остальному интерфейсу */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Немного тени для объёмности */
            transition: background-color 0.3s ease; /* Плавный переход фона при наведении */
          }
  
          .fee-label {
            font-weight: bold; /* Делаем надпись полужирной */
          }
  
          .fee-value {
            font-size: 1rem; /* Немного увеличиваем шрифт для значения комиссии */
            font-weight: bold; /* Делаем значение полужирным */
            color:  #7B2EFF; /* Используем цвет для выделения важности информации */
          }
        `}</style>
        </div>
    );
};


const Home = () => {
    const decimalPlaces = 100
    const router = useRouter();
    const token = Cookies.get('jwtToken');
    const [balance, setBalance] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const [addressAcc, setAddressAcc] = useState('');
    const [idenCoin, setIdenCoin] = useState('');
    const [accIdenCoin, setAccIdenCoin] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [addressLoaded, setAddressLoaded] = useState(false);
    const [ethToUsd, setEthToUsd] = useState(0);

    var accIcon 

    useEffect(() => {
        if (token == null) {
            router.push("auth")
        }

    })

    useEffect(() => {
        fetch("http://localhost:8080/wallet/balanceETC", {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setBalance((Math.round((data)["balanceUsd"] * decimalPlaces) / decimalPlaces))
                document.getElementById('spinner').style.display = 'none'

            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
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
                setAddressAcc(data);
                setAddressLoaded(true); 
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };
        fetchAddress();
    })

    useEffect(() => {
        fetch("http://localhost:8080/user/blockURL", {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                accIcon = data
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    })

    const sendCrypto = async (event) => {
        event.preventDefault(); // Предотвращаем стандартную отправку формы
        console.log(typeof parseInt(amount))


        const transactionData = {
            amount: parseInt(amount),
            address: address,
        };
        
        try {
            const request = await fetch('http://localhost:8080/wallet/sendETH', {
                method: 'POST',
   
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(transactionData),
            });
            const response = await request.json()
            response.txHash = txHash

            if (request.ok) {
                console.log('Successfully created transaction')
            }
            else{
                console.log('Failed created transaction')
            }
        } catch (error) {
            console.error('Failed created transaction', error);
        }



    };


    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => setShowModal(false);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const checkAddressETH = (e) => {
        validEthereumAddress(e.target.value)
        setAddress(e.target.value);
    };



    function validEthereumAddress(address) {
        var errorMessage = document.getElementById('error_message');
        var idencoin = document.getElementById('idencoin');
        console.log(document.getElementById('idencoin'))
        var accIdenCoin = document.getElementById('accidencoin');
        var newBlockie = GeneratedIcon(address);

        if (/^0x[a-fA-F0-9]{40}$/.test(address)) {
            newBlockie = GeneratedIcon(address);

            setAccIdenCoin(accIcon);
            setIdenCoin(newBlockie);
            errorMessage.style.display = 'none';
            accIdenCoin.style.display = 'inline-block';
            idencoin.style.display = 'inline-block';


        } else {
            setAccIdenCoin(null);
            setIdenCoin(null);
            errorMessage.style.display = 'inline-block';
            idencoin.style.display = 'none';
            accIdenCoin.style.display = 'none';


        }
    }


    const fetchEthToUsd = async () => {
        try {
            const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&YOUR_API_KEY=CG-ZGGmfKAQj2FCLiRRkhhLRtna');
            const data = await res.json();
            setEthToUsd(data[0].current_price);
        } catch (error) {
            console.error("Error fetching ETH to USD price:", error);
        }
    };



    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${addressAcc}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`);
            const data = await res.json();

            if (data.status === "1") {
                setTransactions(data.result || []);
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
            fetchTransactions();
            fetchEthToUsd();
        }
    }, [addressLoaded, page]);


    const filterAndSummarizeTransactions = (transactions, myAddress) => {
        const oneWeekAgo = moment().subtract(7, 'days').startOf('day');
        const today = moment().endOf('day');
        const dates = [];
    
        for (let m = moment(oneWeekAgo); m.isBefore(today); m.add(1, 'days')) {
            dates.push(m.format('YYYY-MM-DD'));
        }
    
        const summary = transactions.reduce((acc, tx) => {
            const date = moment.unix(tx.timeStamp).format('YYYY-MM-DD');
            const value = parseFloat(weiToEth(tx.value));
            const fee = parseFloat(weiToEth(tx.gasUsed * tx.gasPrice)); // Calculate the fee
    
            if (!acc[date]) {
                acc[date] = 0;
            }
    
            if (tx.to && tx.to.toLowerCase() === addressAcc.toLowerCase()) {
                // Positive transaction: subtract fee from value
                acc[date] += (value - fee);
            } else {
                // Negative transaction: add fee to value
                acc[date] -= (value + fee);
            }
    
            return acc;
        }, {});
    
        const labels = dates;
        const values = dates.map(date => summary[date] || 0);
    
        return { labels, values };
    };
    const { labels, values } = filterAndSummarizeTransactions(transactions, addressAcc);
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Transaction Value (ETH)',
                data: values,
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4,
            },
        ],
    };
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Transaction History (Last 7 Days)',
                font: {
                    size: 24
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += `${context.raw} ETH`;
                        return label;
                    },
                    footer: function(context) {
                        const valueInEth = context[0].raw;
                        const valueInUsd = (valueInEth * ethToUsd).toFixed(2);
                        return `Value: $${valueInUsd} USD`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
    };
    


    return (
        <div className="body">
            <header>
                <div className="navbar unselectable">
                    <div className="logo">
                        CryptoSafe
                    </div>
                    <div className="nav-links">
                        <Link href="/home" className="active">Home</Link>
                        <Link href="/wallet">Wallets</Link>
                        <Link href="/transaction">Transactions</Link>
                        <Link href="/security">Security</Link>
                    </div>
                    <div className="search-bar">
                        <WalletSearch />
                    </div>
                </div>
            </header>

            <div className="container_home unselectable">
                <div className="split-container">
                    <div className="left-pane">
                        <div className="title">Wallet</div>
                        <div className="description">Your personal wallet management system</div>
                        <div className="balance-container">
                            <div className="balance-card">
                                <div className="balance-title">Balance</div>
                                <div className="balance-amount">{balance + " USD"}</div>
                                <div id="spinner" className="spinner"></div>
                            </div>
                        </div>
                        <button className="start-btn" onClick={handleOpenModal}>Send</button>
                    </div>
                    <div className="right-pane">
                        <div className="transactions">
                            {/* <div className="chart"> */}
                            <div>
                                {loading ? (
                                    <div className="loading-text">
                                    <span>L</span>
                                    <span>o</span>
                                    <span>a</span>
                                    <span>d</span>
                                    <span>i</span>
                                    <span>n</span>
                                    <span>g</span>
                                </div>
                                ) : (
                                    <Line data={data} options={options} />
                                )}
                            {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay unselectable" onClick={handleCloseModal}>
                    <div className="modal-trans" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">Transaction</div>
                        <div className="modal-body">
                            <form onSubmit={sendCrypto}>

                                <label htmlFor="wallet">Wallet:</label>
                                <select id="wallet" name="wallet">
                                    <option value="ETC">
                                        {"Etheruem balance: " + balance}
                                    </option>
                                    <option value="BTC">Bitcoin</option>
                                    <option value="USDT">USDT</option>
                                </select>

                                <label htmlFor="amount">Amount:</label>
                                <input type="number"
                                    id="amount"
                                    name="amount"
                                    placeholder={"Available: " + balance + " USD"}
                                    className='input-trans'
                                    onChange={handleAmountChange}
                                    min="0.1" max={balance}
                                    step="0.01" 
                                    required/>
                                <GasFeeDisplay amount={amount} />
                                <label htmlFor="to-wallet">Send to the address:</label>
                                <input type="text"
                                    onChange={checkAddressETH}
                                    id="to-wallet"
                                    name="to_wallet"
                                    className='input-trans'
                                    placeholder="Example: 0x3537AB2d63d854ff33F7D0345A41aAdE2283d163" 
                                    required/>
                                
                                    <img id="accidencoin" src={accIdenCoin} className="idencoin" /> 
                                    <img id="idencoin" src={idenCoin} className="idencoin" />
                                    
                                    <div id="error_message">Incorrect address</div>

                                <button type="submit" className="button-trans">Send</button>
                            </form>
                            {/* <span className="crypto-animation"></span> */}

                            <br></br>
                            <button type="button" className="button-trans" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>

                </div>
            )}

            <footer>
                <div className="footer-container ">
                    <p>CryptoSafe</p>
                </div>
            </footer>
            <style jsx>
                {`
  
            .container_home {
                text-align: center; /* Align text to the left for a cleaner look */
                border-radius: 10px; /* Smoothed the corners */
                background: #222;
                padding: 2em;
                max-width: 1200px; /* Adjusted for a wider layout */
                width: 100%;
                box-shadow: 0 0 10px #BB86FC, 0 0 30px #BB86FC, 0 0 60px #BB86FC;    

            }

            .h-tran{
                padding: 20px
            }
            .spinner{
                margin-left: 10%;
                margin-top: 5%;
                
            }
            .loading-text {
                position: absolute;
                top: 50%;
                left: 60%;
                transform: translate(-50%, -50%);
                font-size: 40px;
                font-weight: bold;
                color: #3498db;
                text-align: center;
              }
              
              .loading-text span {
                display: inline-block;
                animation: loadingAnimation 1s infinite;
              }
              
              .loading-text span:nth-child(2) {
                animation-delay: 0.2s;
              }
              
              .loading-text span:nth-child(3) {
                animation-delay: 0.4s;
              }
              
              .loading-text span:nth-child(4) {
                animation-delay: 0.6s;
              }
              
              .loading-text span:nth-child(5) {
                animation-delay: 0.8s;
              }
              
              .loading-text span:nth-child(6) {
                animation-delay: 1s;
              }
              
              @keyframes loadingAnimation {
                0% {
                  transform: scale(1);
                  opacity: 1;
                }
                50% {
                  transform: scale(1.5);
                  opacity: 0.5;
                }
                100% {
                  transform: scale(1);
                  opacity: 1;
                }
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

            select {
                width: calc(100%);
                padding: 10px;
                margin-bottom: 20px;
                background: #333;
                border: 1px solid #444;
                border-radius: 5px;
                color: white;
            }

            .input-trans{
                width: calc(100%);
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
                // -webkit-appearance: none;
                margin: 0;
            }

            input[type=number] {
                -moz-appearance: textfield;
            }            
              .crypto-animation {
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,223,0,1) 100%);
                border-radius: 50%;
                position: absolute;
                top: 40px;
                left: 40px;
                box-shadow: 0 0 15px rgba(255,215,0,0.8);
                animation: sendCrypto 4s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
              }
            
              @keyframes sendCrypto {
                0%, 100% { top: 40px; transform: scale(1); left: 40px; }
                25% { top: -20px; transform: scale(1.3); left: 120px; }
                50% { top: 40px; transform: scale(1.6); left: 200px; background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,255,0,1) 100%); }
                75% { top: -20px; transform: scale(1.3); left: 280px; }
                100% { top: 40px; transform: scale(1); left: 360px; }
              }

              #error_message{
                color: rgb(247, 94, 94);
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
            }

            .idencoin{
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
                margin-left: 19%;
                border-radius: 30%;
                display: none
            }

            `}
            </style>
        </div>




    );

}

export default Home