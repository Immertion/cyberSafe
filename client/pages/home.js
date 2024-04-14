import Link from 'next/link'

const Home = () => {



    return (


        <div className="body">
            <header>
                <div className="navbar">
                    <div className="logo ">
                        CryptoSafe
                        </div>
                    <div className="nav-links">
                        <Link href="home" className="active">Home</Link>
                        <Link href="#">Wallets</Link>
                        <Link href="#">Transactions</Link>
                        <Link href="#">Security</Link>
                    </div>
                    <div className="search-bar">
                        <input type="search" placeholder="Search"/>
                        <button type="submit">🔍</button>
                    </div>
                </div>
            </header>

        <div className="container_home">
            
    

    
            <div className="split-container">
                <div className="left-pane">
                    <div className="title">Wallets</div>
                    <div className="description">Your personal wallet management system</div>
                    <div className="balance">
                        <h2>Total balance</h2>
                        <p>$75.097,21</p>
                    </div>
                    <button className="start-btn">Send</button>
                    <div className="register-invitation">

                    </div>
                </div>
                <div className="right-pane">
                    <div className="transactions">
                        <h2>Transactions history</h2>
                        <div className="chart">
                           
                        </div>
                    </div>
                   
                </div>
            </div>
    
        </div>
                
            <footer>
                <div className="footer-container">
                    <p>CryptoSafe</p>
                </div>
            </footer>
        <style jsx>
            {`
            .container_home {
                text-align: left; /* Align text to the left for a cleaner look */
                border-radius: 10px; /* Smoothed the corners */
                background: #222;
                padding: 2em;
                max-width: 1200px; /* Adjusted for a wider layout */
                width: 100%;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.7); /* Subtle shadow for depth */
            }
                  
            `}
        </style>
        </div>



        
    );

}

export default Home