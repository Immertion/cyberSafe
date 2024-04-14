import Link from 'next/link'

const Index = () => {
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