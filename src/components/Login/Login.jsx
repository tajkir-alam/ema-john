import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import googleSignup from '../../images/google-logo.png';
import { AuthContext } from '../../Providers/AuthProviders';


const Login = () => {
    const [errorIs, setErrorIs] = useState('');
    const [showPass, setShowPass] = useState(false)

    const { loginUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .then(error => {
                console.log(error.message)
            });
    }

    return (
        <div className='form-container'>
            <h2 className='form-header'>Login</h2>

            <form onSubmit={handleLogin}>
                <div>
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name='email' />
                </div>
                <div>
                    <label className='label' htmlFor="password">Password</label>
                    <input type={showPass? "text":"password"} name="password" />
                    <p onClick={()=>setShowPass(!showPass)}>Show Password</p>
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