import React from 'react';
import { Link } from 'react-router-dom';
import googleSignup from '../../images/google-logo.png';


const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-header'>Login</h2>

            <form>
                <div>
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name='email' />
                </div>
                <div>
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <input className='btn-signup' type="submit" value="Login" />
                </div>
                <p className='form-footer'>New to Ema-john? <Link to={'/signup'} className='form-footer-link' >Create New Account</Link></p>
                <div className='another-option'>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <p>or</p>
                    </div>
                    <div>
                        <hr />
                    </div>
                </div>
                <div className='google-signup'>
                    <img src={googleSignup} alt="" className='google-logo' />
                    <p>Continue with Google</p>
                </div>
            </form>
        </div>
    );
};

export default Login;