import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
   


    const users = [
    { id: 1, name: 'John',email: 'user1@gmail.com', password: '123456' },
    { id: 2, name: 'Pete' , email: 'user2@gmail.com', password: '123456' },
    { id: 3, name: 'Mary' , email: 'user3@gmail.com', password: '123456' },
];

const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
       // login success
    }
    else {
         // login failed
    }
}

    

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="licence">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="name" id="name" />

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
                   
                
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            
                      
                    
        </div>
    )
}