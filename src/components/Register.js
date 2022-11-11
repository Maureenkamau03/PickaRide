import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [location, setLocation] = useState('');
    const [licence, setLicence] = useState('');
    const [password, setPassword] = useState('');

    

        const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    
    return (
        <div className="auth-form-container">
            <h2>Register</h2>

        <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="name">Full Name</label>
           <input value={name} onChange={(e) => setName(e.target.value)}type="email" placeholder="Fullname" id="name" name="name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

            <label htmlFor="phone">Phone number</label>
            <input value={phone} onChange={(e) =>setphone(e.target.value)}type="phone" placeholder="Phone Number" id="phone" name="phone"/>

            <label htmlFor="location">location</label>
            <input value={location} onChange={(e) =>setLocation(e.target.value)}type="location" placeholder="Your location" id="location" name="location"/>

            <label htmlFor="licence">Driving licence</label>
            <input value={licence} onChange={(e) => setLicence(e.target.value)} type="licence" placeholder="Driving licence" id="licence" name="licence" />

            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

             
            <button type="submit">Log In</button>
          
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('home')}>Already have an account? Go to home!.</button>
        

        
    </div>
    )
}
