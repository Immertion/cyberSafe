import { useState } from 'react';

function checkPasswords(password, confirmPassword) {
    var errorMessage = document.getElementById('error_message');
  
    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords don't match!";
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

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        if (checkPasswords(password, repeatPassword)){
            const loginData = {
                login: login,
                mail: email,
                password: password,
            };
    
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
                    // Здесь можно добавить действия после успешного логина, например, редирект
                } else {
                    // Обработка ошибок от сервера
                    console.log('Login failed');
                }
                const response = await request.json()
                console.log(response)
            } catch (error) {
                // Обработка ошибок запроса
                console.error('Failed to submit form', error);
            }
            };
        }



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
            <p className="register-invitation">If you already have an account, <a href="auth">click here</a> to log in.</p>

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

                
            
            `}
        </style>
        </div>


    )

}

export default Register;