import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-section'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='nav'>
                    <a href="">Order</a>
                    <a href="">Order Review</a>
                    <a href="">Manage Inventory</a>
                    <a href="">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;