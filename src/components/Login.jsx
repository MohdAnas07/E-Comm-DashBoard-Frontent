import React, { useEffect, useState } from "react";
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])

    const loginHandler = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json();

        console.log(result);

        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/');

        } else {
            alert("Please enter the correct cradentials !")
        }
    }

    return (
        <div className='login'>

            <h1>Login For E-Commerce Dashboard</h1>
            <form action="">
                <input className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' />
                <input className='input-box' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' />
                <button className='app-button' onClick={loginHandler} type='button'>Login</button>
            </form>
        </div>

    )
}

export default Login;