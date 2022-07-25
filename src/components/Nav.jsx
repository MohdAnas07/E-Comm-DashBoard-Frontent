import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <ul className='nav-ul'>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')} >Products</NavLink> </li>
                <li><NavLink to='/add' className={({ isActive }) => (isActive ? 'active' : '')}>Add Product</NavLink> </li>
                <li><NavLink to='/update' className={({ isActive }) => (isActive ? 'active' : '')}>Update Product</NavLink> </li>
                <li><NavLink to='/logout' className={({ isActive }) => (isActive ? 'active' : '')}>Logout</NavLink> </li>
                <li><NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink> </li>
                <li><NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : '')}>Sing Up</NavLink> </li>
            </ul>
        </div>
    )
}

export default Nav;