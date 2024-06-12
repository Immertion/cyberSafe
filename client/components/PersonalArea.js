import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import blockies from 'ethereum-blockies';

function GeneratedIcon(address){
    var newBlockie = blockies.create({
        seed: address,
        size: 10,
        scale: 8,
    }).toDataURL();

    return newBlockie
}


const PersonalArea = () => {
    const router = useRouter()
    const [address, setAddress] = useState('');
    const [userName, setUserName] = useState('');
    const [notification, setNotification] = useState('')
    const [blockies, setBlockies] = useState('')
    const [addressLoaded, setAddressLoaded] = useState(true);

    const token = Cookies.get('jwtToken');

    useEffect(() => {
        if (token == null) {
            router.push("auth")
        }
    })

    const handleLogout = () => {
        Cookies.remove('jwtToken');
        router.push("auth")
    };

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_PROD_VERSION + "wallet/addressETC", {
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
                setBlockies(GeneratedIcon(address))
                setAddressLoaded(false);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };
        fetchAddress();
    })

    useEffect(() => {
        const fetchUserName= async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_PROD_VERSION + "user/userName", {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                setUserName(data);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };
        fetchUserName();
    })

    const SendPrivateKey = async () => {
        document.getElementById('loadingBackground').style.display = 'flex'

        try {
            const request = await fetch(process.env.NEXT_PUBLIC_PROD_VERSION + "user/sendPrivateKey", {
                method: 'POST',
   
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            });

            if (request.ok) {
                setNotification('Key successfully send');
                setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
               

            } else {
                setNotification('Failed to send Key');
                setTimeout(() => setNotification(''), 3000);
            }
            const response = await request.json()

        } catch (error) {
            // Обработка ошибок запроса
            console.error('Failed to submit form', error);
        }
                document.getElementById('loadingBackground').style.display = 'none'

    };
    
    

    return (
        <div>

            <main className="main">

                <div className="header">
                
                    {addressLoaded ? (<div id="spinner" className="spinner"> </div>) : (
                    <img src={blockies} className="userIcon" />
                )}

                    <h1 className="userName">{userName}</h1>
                </div>
                <div className="settings">
                    <div className="settingItem">
                        <h2>Logout</h2>
                        <button className="button-setting" onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="settingItem">
                        <h2>Send Private Key to Email</h2>
                        <button onClick={() => SendPrivateKey()} className="button-setting" >Send Private Key</button>
                    </div>
                </div>
              {notification && <div className="notification">{notification}</div>}
              
                <div id="loadingBackground" className="loading-background">
                    <div className="spinner"></div>
                </div>
            </main>
            <style jsx>
                {`
.main {
    background: #2a2a2a;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 600px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 auto;
  }
  
  .spinner {
    margin-right: 10px;
  }
  
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    justify-content: center;
    width: 100%;
  }
  
  .userIcon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .userName {
    font-size: 1.5em;
    margin: 0;
    flex: 1;
    text-align: left;
  }
  
  .title {
    font-size: 1.8em;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
  }
  
  .settings {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .settingItem {
    background: #3a3a3a;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .settingItem h2 {
    margin: 0 0 10px 0;
    font-size: 1.2em;
  }
  
  .button-setting {
    background-color: #6f42c1;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
  }
  
  .button-setting:hover {
    background-color: #5a34a1;
  }
  
  .input {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
  }
  
  /* Animation */
  .cryptoAnimation {
    position: absolute;
    top: -60px;
    right: -60px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #6f42c1;
    border-top: 5px solid transparent;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .main {
      padding: 15px;
    }
  
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .userIcon {
      margin-right: 0;
      margin-bottom: 10px;
    }
  
    .userName {
      text-align: center;
      margin-bottom: 10px;
    }
  
    .title {
      font-size: 1.5em;
    }
  
    .settingItem {
      padding: 10px;
    }
  
    .settingItem h2 {
      font-size: 1em;
    }
  
    .button-setting {
      padding: 8px;
    }
  
    .input {
      padding: 8px;
    }
  }
  
  @media (max-width: 480px) {
    .main {
      padding: 10px;
    }
  
    .header {
      align-items: center;
    }
  
    .title {
      font-size: 1.2em;
    }
  
    .settingItem {
      padding: 8px;
    }
  
    .settingItem h2 {
      font-size: 0.9em;
    }
  
    .button-setting {
      padding: 6px;
    }
  
    .input {
      padding: 6px;
    }
  }
  
        `}

            </style>

        </div>

    );
};

export default PersonalArea;
