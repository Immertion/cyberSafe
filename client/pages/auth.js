import { useState } from 'react';

function printErrorMessage(status, text) {
    var errorMessage = document.getElementById('error_message');
  
    if (status == 400){
        errorMessage.textContent = text;
        errorMessage.style.display = 'block';
    }
    else{
        errorMessage.style.display = 'none';
    }

  }

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        const loginData = {
            mail: email,
            password: password,
        };

        try {
            const request = await fetch('http://localhost:8080/sign-in', {
                method: 'POST',
   
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (request.ok) {
                console.log('Login success');
            } else {
                console.log('Login failed');
            }
            const response = await request.json()
            printErrorMessage(request.status, "Invalid username or password!")
            

        } catch (error) {
            console.error('Failed to submit form', error);
        }
        


    };

    return (
        <div className='body'>
            <div className="container">
                <h1 className="title">Log in</h1>
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

                <p className="register-invitation">If you are not registered yet, <a href="register">click here</a> to sign in.</p>
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
            
            `}
        </style>
        </div>
        
    );
};

export default Auth;
