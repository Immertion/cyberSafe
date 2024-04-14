import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';


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





            // document.getElementById('loadingBackground').style.display = 'none'
            // document.getElementById('modalBackground').style.display = 'flex'

        }

        const codeSumbit = async (event) => {
            event.preventDefault(); // Предотвращаем стандартную отправку формы

            const codeActivate = {
                code: code,
            };

                try {
                    const request = await fetch('http://localhost:8080/activation/check/' + id, {
                        method: 'PUT',
           
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(codeActivate),
                    });
                    console.log(request)
                    
                    if (request.ok) {
                        localStorage.setItem("activateAcc", true);

                        router.push("auth")
                    } else {
                        showNotification();
                    }
                    printErrorMessage(request.status)
                    const response = await request.json()
                    console.log(response)
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


                  
            
                  
            `}
        </style>

        </div>



    )

}

export default Register;