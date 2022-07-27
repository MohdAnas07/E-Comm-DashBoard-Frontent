import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css'
import dashboard from '../assets/dashboard.png'

const Nav = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();

    const logoutHandler = () => {
        let logout = window.confirm("Do you want to Logout from this Site ?")
        if (logout) {
            localStorage.clear('user');
            navigate('/login');
        } else {
            navigate(p => p)
        }
    }

    return (
        <div className='nav'>
            <NavLink to='/'><img src={dashboard} alt="logo" className='logo' /></NavLink>
            {auth ? <ul className='nav-ul'>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')} >Products</NavLink> </li>

                <li><NavLink to='/add' className={({ isActive }) => (isActive ? 'active' : '')}>Add Product</NavLink> </li>

                <li><NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink> </li>
                <li><NavLink onClick={logoutHandler} to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>Logout ({JSON.parse(auth).name})</NavLink> </li>
            </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : '')}  >Sing Up</NavLink></li>
                    <li><NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}  >Login</NavLink></li>
                </ul>
            }

        </div>
    )
}

export default Nav;

// <li><NavLink to='/update' className={({ isActive }) => (isActive ? 'active' : '')}>Update Product</NavLink> </li>