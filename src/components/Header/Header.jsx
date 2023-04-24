import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-section'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='nav'>
                    <Link to={'/'}>Order</Link>
                    <Link to={'/order-review'}>Order Review</Link>
                    <Link to={'/checkout'}>Manage Inventory</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;