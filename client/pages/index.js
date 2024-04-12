import Link from 'next/link'

const Index = () => {
    return ( 
        <div className='body'>    
        
            <div className="container">
                <h1 className="title">Manage your crypto</h1>
                <p className="description">View balances, make transactions, and access settings securely with CryptoSafe.</p>
                <Link href="/auth">
                        <button className="start-btn">Log in</button>
                </Link>
            </div>
        </div>
    )

}

export default Index;