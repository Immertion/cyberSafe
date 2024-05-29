import React, { useState } from 'react';
import axios from 'axios';


const apiKey = "U9ZR3EP6E9VZ2KGXQDM9JP5YDAXP9SB2Z5"

const WalletSearch = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
        setError(''); // Очистить ошибку при изменении ввода
    };

    const handleSearch = async () => {
        if (input) {
            const isAddress = /^0x[a-fA-F0-9]{40}$/.test(input);
            const isTxHash = /^0x([A-Fa-f0-9]{64})$/.test(input);

            if (isAddress) {
                try {
                    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${input}&tag=latest&apikey=${apiKey}`);
                    if (response.data.result) {
                        const etherscanUrl = `https://etherscan.io/address/${input}`;
                        window.open(etherscanUrl, '_blank');
                    } else {
                        setError('Invalid wallet address.');
                    }
                } catch (error) {
                    setError('Error validating wallet address.');
                }
            } else if (isTxHash) {
                try {
                    const response = await axios.get(`https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${input}&apikey=${apiKey}`);
                    if (response.data.result) {
                        const etherscanUrl = `https://etherscan.io/tx/${input}`;
                        window.open(etherscanUrl, '_blank');
                    } else {
                        setError('Invalid transaction hash.');
                    }
                } catch (error) {
                    setError('Error validating transaction hash.');
                }
            } else {
                setError('Please enter a valid wallet address or transaction hash.');
            }
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search"
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>🔍</button>
            {error && <div className="error-search">{error}</div>}
        <style jsx>
        {`
        .search-container {
            display: flex;
            align-items: center;
        }
        
        .search-container input {
            padding: 0.5em;
            background-color: #333;
            border: 1px solid #444;
            color: white;
            border-radius: 5px;
            outline: none;
            flex-grow: 1; /* Allow input to grow */
            margin-right: 0.5em; /* Space between input and button */
        }
        
        .search-container button {
            background-color: #7B2EFF;
            border: none;
            padding: 0.5em;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px; /* Fixed width for the button */
            height: 40px; /* Fixed height for the button */
        }
        
        .search-container button:hover {
            background-color: #9A4EFF;
        }
        
        .error-search {
            position: absolute; /* Position absolute to overlay on the container */
            top: 100%; /* Position below the input */
            left: 0;
            right: 0;
            background-color: #f5625d; /* Red background for error */
            color: white;
            padding: 0.5em;
            border-radius: 5px;

            font-size: 0.875em;
            text-align: center; /* Center align text */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
            animation: fadeIn 0.3s ease; /* Smooth fade-in animation */
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        `}
        
        </style>
        
        </div>
       
    );
};

export default WalletSearch;
