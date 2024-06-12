"use client"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/router';



function showNotification() {
    var notification = document.getElementById('notification');
    notification.classList.add('show-notification');
    
    // Удалить классы анимации, чтобы сбросить анимацию исчезновения
    notification.classList.remove('fade-out');
    
    // Скрыть уведомление после отображения
    setTimeout(function() {
        notification.classList.add('fade-out');
    }, 3000); // Показать уведомление на 3 секунды, затем начать исчезновение
    }

function printErrorMessage(status) {
    var errorMessage = document.getElementById('error_message');
  
    if (status == 400){
        errorMessage.textContent = "Invalid username or password";
        errorMessage.style.display = 'block';
    }
    else if (status == 401){
        errorMessage.textContent = "Your account has been created but not activated";
        errorMessage.style.display = 'block';
    }
    else{
        errorMessage.style.display = 'none';
    }

  }



const Auth = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token = Cookies.get('jwtToken');
    
    if (token != null){
        router.push("home")
    }

    if (typeof window !== 'undefined') {
        var stateActivateAcc = localStorage.getItem("activateAcc");
    
        useEffect(() => {
            if (stateActivateAcc === "true") {
                showNotification();
                localStorage.clear();
            }}

        )
        
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        const loginData = {
            mail: email,
            password: password,
        };

        try {
            const request = await fetch(process.env.NEXT_PUBLIC_PROD_VERSION + "sign-in", {
                method: 'POST',
   
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            const response = await request.json()


            if (request.ok) {
                Cookies.set('jwtToken', response.token, { expires: 7 });
                router.replace("home")
            }
            printErrorMessage(request.status)
        } catch (error) {
            console.error('Failed to submit form', error);
        }
        


    };

    return (

        <div className='body'>
        <div id="notification" className="notification">The account has been created</div>            
            <div className="container">
                <h1 className="title">Sign in</h1>
                <p className="description">Please enter your credentials:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" // Использование типа 'email' для валидации формата почты
                        name="text"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/>
                    <button type="submit" className="start-btn">Enter</button>
                </form>
                <br></br>
                <div id="error_message"></div>

                <p className="register-invitation">If you are not registered yet, <Link href="register"> click here </Link> to sign in.</p>
            </div>

            <style jsx>
            {`
                input[type="text"],
                input[type="password"] {
                    width: 50%;
                    padding: 10px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    border: 1px solid #ddd;
                    box-sizing: border-box; /* Добавляет паддинг внутрь элемента, не изменяя его размер */
                }
                
                input[type="text"]:focus,
                input[type="password"]:focus {
                    border-color: #007bff;
                    outline: none;
                }
            
                .notification {
                    background-color: #333; /* Темный фон */
                    color: #fff; /* Белый текст */
                    padding: 10px 20px; /* Паддинг внутри */
                    border-radius: 3px; /* Скругленные углы */
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.3); /* Тень для объемности */
                    position: fixed; /* Фиксированное позиционирование */
                    top: 20px; /* Отступ сверху */
                    right: -300px; /* Спрятать справа */
                    z-index: 3000; /* Повыше других элементов */
                    transition: right 0.5s; /* Анимация появления и исчезновения */
                  }
                  
                  /* Класс для показа уведомления */
                  .show-notification {
                    right: 20px; /* Переместить в видимую область */
                  }
                  
                  /* Анимация исчезновения */
                  @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                  }
                  
                  /* Применить анимацию исчезновения к уведомлению */
                  .fade-out {
                    animation: fadeOut 0.5s ease-in-out forwards;
                    animation-delay: 2.5s; /* Задержка перед началом исчезновения */
                  }
            `}
        </style>
        </div>
        
    );
};



export default Auth;
