import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/signup.css'

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/');
        }
    }, [])


    const formHandler = async () => {
        console.log(name, email, password);

        let data = await fetch('http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })

        let result = await data.json();
        console.log(result);

        localStorage.setItem("user", JSON.stringify(result));

        if (result) {
            navigate('/')
        }
    }

    return (
        <div className='signup'>
            <h1>Register For E-Commerce Dashboard</h1>
            <form action="">
                <input className='input-box' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name' />
                <input className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' />
                <input className='input-box' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' />
                <button className='app-button' onClick={formHandler} type='button'>Sign Up</button>
            </form>
        </div>
    )
}
