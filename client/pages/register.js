const Register = () => {
    return ( 
        
        <div class = 'body'>
            <div class="container">
                <h1 class="title">Registration</h1>
                <p class="description">Please enter your credentials:</p>
                <form action="#" method="post">
                    <input type="text" name="username" placeholder="Login" required /><br></br>
                    <input type="password" name="password" placeholder="Password" required /><br></br>
                    <input type="password" name="password" placeholder="Repeat password" required /><br></br>
                    <input type="mail" name="mail" placeholder="eMail" required /><br></br>

                    <button type="submit" class="start-btn">Enter</button>
                </form>
                
            <p class="register-invitation">If you already have an account, <a href="auth">click here</a> to log in.</p>

            </div>

            <style jsx>
            {`
                input[type="text"],
                input[type="mail"],
                input[type="password"] {
                    width: 50%;
                    padding: 10px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    border: 1px solid #ddd;
                    box-sizing: border-box; /* Добавляет паддинг внутрь элемента, не изменяя его размер */
                }
                
                input[type="text"]:focus,
                input[type="mail"]:focus,
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