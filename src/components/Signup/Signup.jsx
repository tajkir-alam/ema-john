import React, { useEffect } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import googleSignup from '../../images/google-logo.png';

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-header'>Sign Up</h2>

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
                    <label className='label' htmlFor="confirm-pass">Confirm Password</label>
                    <input type="confirm-pass" name='confirm-pass' />
                </div>
                <div>
                    <input className='btn-signup' type="submit" value="Sign Up" />
                </div>
                <p className='form-footer'>Already have an account? <Link to={'/login'} className='form-footer-link' >Login</Link></p>
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

export default Signup;