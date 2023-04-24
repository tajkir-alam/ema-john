import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const btnLogOut = () => {
        logOut()
        .then(()=>{})
        .then(error => console.log(error.message))
    }
 
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
                    {!user ?
                        <>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/signup'}>Signup</Link>
                        </>
                        : <Link to={'/login'} onClick={btnLogOut}>Log Out</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;