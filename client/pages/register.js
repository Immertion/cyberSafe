import { useState } from 'react';
import Link from 'next/link'
import { useRouter, useEffect} from 'next/router';
import blockies from 'ethereum-blockies';


function checkPasswords(password, confirmPassword) {
    var errorMessage = document.getElementById('error_message');
  
    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords don't match";
      errorMessage.style.display = 'block';  // Показать сообщение об ошибке
      return false;
    } else {
      errorMessage.style.display = 'none';  // Скрыть сообщение об ошибке
    }
    return true;
  }
  function printErrorMessage(status) {
    var errorMessage = document.getElementById('error_message_code');
  
    if (status == 400){
        errorMessage.textContent = "Invalid code";
        errorMessage.style.display = 'block';
    }

    else{
        errorMessage.style.display = 'none';
    }

  }

function accExists(requestStatus){
    var errorMessage = document.getElementById('error_message');
  
    if (requestStatus == 400) {
      errorMessage.textContent = "Account already exists";
      errorMessage.style.display = 'block';  // Показать сообщение об ошибке
      return false;
    } else {
      errorMessage.style.display = 'none';  // Скрыть сообщение об ошибке
    }
    return true;
}



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [code, setCode] = useState('');
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const router = useRouter();



    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем стандартную отправку формы


        if (checkPasswords(password, repeatPassword)){
            const loginData = {
                login: login,
                mail: email,
                password: password,
            };


            document.getElementById('loadingBackground').style.display = 'flex'
    
            try {
                const request = await fetch('http://localhost:8080/sign-up', {
                    method: 'POST',
       
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginData),
                });
                console.log(request)
    
                if (request.ok) {
                    // Обработка успешного ответа
                    console.log('Login success');

                    document.getElementById('modalBackground').style.display = 'flex'
                    document.getElementById('modalBackground').addEventListener('click', function(event) {
                        if (event.target === this) {
                          this.style.display = 'none';
                        }
                      });

                } else {
                    accExists(request.status)
                    console.log('Login failed');
                }
                const response = await request.json()
                setId(response.id)

                document.getElementById('loadingBackground').style.display = 'none'


            } catch (error) {
                // Обработка ошибок запроса
                console.error('Failed to submit form', error);
            }
            };



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
                        setAddress(data);
                    } catch (error) {
                        console.error('There was a problem with your fetch operation:', error);
                    }
                };
                fetchAddress();
            })

            // document.getElementById('loadingBackground').style.display = 'none'
            // document.getElementById('modalBackground').style.display = 'flex'

        }

        const codeSumbit = async (event) => {
            event.preventDefault(); // Предотвращаем стандартную отправку формы

            var newBlockie = blockies.create({
                seed: address,
                size: 10,
                scale: 8,
            }).toDataURL();

            const codeActivate = {
                code: code,
                icon_url: newBlockie,
            };

                try {
                    const request = await fetch('http://localhost:8080/activation/check/' + id, {
                        method: 'PUT',
           
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(codeActivate),
                    });
                    
                    if (request.ok) {
                        localStorage.setItem("activateAcc", true);

                        router.replace("auth")
                    }
                    printErrorMessage(request.status)
                } 
                catch (error) {
                    // Обработка ошибок запроса
                    console.error('Failed to submit form', error);
                }
        };
            

        

    return ( 
        
        <div className = 'body'>
            <div className="container">
                <h1 className="title">Sign up</h1>
                <p className="description">Please enter your credentials:</p>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Login" 
                        required 
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    /><br></br>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/>

<input
                        type="password"
                        name="password"
                        placeholder="Repeat password"
                        required
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    /><br/>
  
                    <input
                        type="email" // Использование типа 'email' для валидации формата почты
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br/>
                    <button type="submit" className="start-btn">Enter</button>
                </form>
                <br></br>
                <div id="error_message"></div>
            <p className="register-invitation">If you already have an account, 
            <Link href="auth"> click here </Link> to log in.</p>

            </div>
            <div id="modalBackground" className="modal-background">
                <div id="codeModal" className="modal">
                    <p className="codeActiv">Please enter your code:</p>
                    <form onSubmit={codeSumbit}>
                        <input 
                            type="text" 
                            id="codeInput" 
                            placeholder='Code'
                            required
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            />
                        <br></br>
                <div id="error_message_code"></div>

                        <button id="confirmCode" className="button">Enter</button>

                    </form>
                </div>
            </div>


            <div id="loadingBackground" className="loading-background">
                <div className="spinner"></div>
            </div>



            <style jsx>
            {`
                input[type="text"],
                input[type="email"],
                input[type="password"] {
                    width: 50%;
                    padding: 10px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    border: 1px solid #ddd;
                    box-sizing: border-box; 
                }
                
                input[type="text"]:focus,
                input[type="email"]:focus,
                input[type="password"]:focus {
                    border-color: #007bff;
                    outline: none;
                }

                .codeActiv{
                    font-size: 1.4em;
                    margin-bottom: 1em;
                    color: #afaabe
                }

                .modal-background {
                    display: none; /* Скрыть по умолчанию */
                    position: fixed; /* Фиксированное позиционирование */
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7); /* Полупрозрачный черный фон */
                    z-index: 1000; /* Повыше других элементов */
                    justify-content: center;
                    align-items: center;
                  }
                  
                  .modal {
                    background: #232323; /* Цвет фона аналогичный окну регистрации */
                    padding: 20px;
                    border-radius: 10px; /* Скругленные углы как у поля ввода */
                    width: 400px; /* Ширина модального окна */
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Тень для объемности */
                    text-align: center; /* Текст по центру */
                    color: #fff; /* Белый текст */
                  }
                  
                  .modal input[type="text"] {
                    width: 95%; /* Ширина ввода, чтобы оставить немного пространства */
                    margin-top: 10px;
                    padding: 10px; /* Паддинг как у полей в форме регистрации */
                    border: none; /* Убрать границу */
                    border-radius: 5px; /* Скругленные углы */
                    margin-bottom: 20px; /* Отступ снизу */
                  }
                  
                  .modal button {
                    padding: 10px 20px; /* Паддинг как у кнопки регистрации */
                    border: none; /* Убрать границу */
                    border-radius: 5px; /* Скругленные углы */
                    background-color: #6a5acd; /* Фиолетовый цвет кнопки */
                    color: #fff; /* Белый текст */
                    cursor: pointer; /* Курсор в виде руки для интерактивности */
                    margin-top: 10px; /* Отступ сверху */
                  }
                  
                  .modal button:hover {
                    background-color: #7b68ee; /* Чуть светлее при наведении */
                  }
                  
            
                  
            `}
        </style>

        </div>



    )

}

export default Register;