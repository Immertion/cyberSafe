import Link from 'next/link'
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Index = () => {
    const token = Cookies.get('jwtToken');

    return ( 
        <div className='body'>    
        
            <div className="container">
                <h1 className="title">Manager your crypto</h1>
                <p className="description">View balances, make transactions, and access settings securely with CryptoSafe.</p>
                <Link href="/auth">
                    <button className="start-btn">Start</button>
                </Link>

            </div>

        </div>
    )

}

export default Index;