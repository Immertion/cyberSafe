import Link from 'next/link'
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import Image from 'next/image'
import indexPage from "../images/index.png"


const Index = () => {
    const token = Cookies.get('jwtToken');

    return ( 

        <div className='body-index'>    

            <div className="container-index">
                <div className="content-index">
                    <div className="left-section-index">
                        <div className="logo-index">CryptoSafe</div>
                        <div className="headline-index">Manage crypto</div>
                        <div className="description-index">View balances, make transactions, and access settings securely with CryptoSafe.</div>
                        <Link href="/auth">
                            <button className="start-button-index">Start</button>
                        </Link>
                    </div>
                    <div className="right-section-index">
                        <Image src={indexPage} alt="Crypto Management"></Image>
                    </div>
                </div>
            </div>
            <style jsx>
            {`
        .body-index {
            font-family: 'Arial', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: rgba(51, 51, 51);
            color: white;
            margin: 0;
        }

        .container-index {
            width: 100%;
            height: 130%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .content-index {
            background-color: rgba(34, 34, 34);
            border-radius: 20px;
            display: flex;
            overflow: hidden;
            width: 80%;
            height: 70%;
            box-shadow: 0 0 10px #BB86FC, 0 0 30px #BB86FC, 0 0 60px #BB86FC;    
        }

        .left-section-index {
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50%;
        }

        .logo-index {
            color: #BB86FC;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 40px;
        }

        .headline-index {
            font-size: 40px;
            font-weight: bold;
            line-height: 1.2;
            margin-bottom: 20px;
        }

        .description-index {
            font-size: 20px;
            color: #A4A4A4;
            line-height: 1.5;
            margin-bottom: 40px;
        }

        .start-button-index {
            background-color: #BB86FC;
            color: white;
            padding: 15px 30px;
            font-size: 18px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            text-align: center;
            width: 150px; /* Adjust as needed */
            height: 50px; /* Adjust as needed */
        }

        .start-button-index:hover {
            background-color: #9E55B7;
        }

        .right-section-index {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
        }

        .right-section-index Image {
            max-width: 100%;
            height: auto;
        }
            `}
             </style>
        </div>

    )

}

export default Index;