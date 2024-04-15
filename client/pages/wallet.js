import Link from 'next/link'

const Wallet = () => {


    return ( 
        <div className="body">
            <header>
                <div className="navbar">
                    <div className="logo ">
                        CryptoSafe
                        </div>
                    <div className="nav-links">
                        <Link href="home" className="active">Home</Link>
                        <Link href="wallet">Wallets</Link>
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
            <div class="icon"><img src=""/></div>
            <div class="address">0x5DaC48bC58D30be07ff2a39560958E74e851E329</div>
            <div class="icons-right">
                <div class="icon-square"></div>
                <div class="icon-star"></div>
                <div class="icon-settings"></div>
                <div class="icon-edit"></div>
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

            ..container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px;
                background-color: #333; /* example color */
                color: white;
                border-radius: 15px; /* rounded corners */
                
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
            
            
      
            `}
        </style>
        </div>
    )

}

export default Wallet;