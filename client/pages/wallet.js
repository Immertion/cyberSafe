import Image from 'next/image'
import ethLogo from "../images/ethereum.svg"
import usdtLogo from "../images/usdt.svg"
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar';
import SupportButton from '../components/SupportButton';
import WalletToken from '../components/WalletToken';


const Wallet = () => {
    const [balanceETH, setBalanceETH] = useState('');
    const [balanceUSDT, setBalanceUSDT] = useState('');
    const [address, setAddress] = useState('')

    const token = Cookies.get('jwtToken');
    const router = useRouter()
    

    useEffect(() => {
        if (token == null){
            router.push("auth")
        }

        fetch(process.env.NEXT_PUBLIC_PROD_VERSION + "wallet/addressETC",{
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

        fetch(process.env.NEXT_PUBLIC_PROD_VERSION + "wallet/balanceETC",{
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
            setBalanceETH((("balance - " + (data)["balanceCrypto"].toFixed(8))) + " ETH")

        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });

        fetch(process.env.NEXT_PUBLIC_PROD_VERSION + "wallet/balanceUSDT",{
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
            setBalanceUSDT((("balance - " + data)) + " USDT(ERC-20)")
    })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    })

    return ( 
        <div className="body">

            <Navbar
                activeWindow="wallet"
            />

            <div className="walets">
                <WalletToken
                    address={address}
                    balance={balanceETH}
                    iconWallet={ethLogo}
                />

                <WalletToken
                    address={address}
                    balance={balanceUSDT}
                    iconWallet={usdtLogo}
                />
            </div>
            <footer>
                <div className="footer-container unselectable">
                    <p>CryptoSafe</p>
                    <SupportButton/>
                </div>
            </footer>

            <style jsx>
            {`


            `}
        </style>

        </div>
    )

}

export default Wallet;