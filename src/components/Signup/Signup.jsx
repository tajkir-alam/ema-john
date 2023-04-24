import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import googleSignup from '../../images/google-logo.png';
import { AuthContext } from '../../Providers/AuthProviders';

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const { signupUser } = useContext(AuthContext)


    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signupUser(email, password)
        .then( (result) => {
            console.log(result.user);
        })
        .catch( (error) => {
            console.log("Error is: ", error.message);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-header'>Sign Up</h2>

            <form onSubmit={handleSignup}>
                <div>
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div>
                    <label className='label' htmlFor="password">Password</label>
                    <input type={showPass? "text":"password"} name="password" required />
                    <p onClick={()=>setShowPass(!showPass)}>Show Password</p>
                </div>
                <div>
                    <label className='label' htmlFor="confirm-pass">Confirm Password</label>
                    <input type={showPass? "text":"password"} name='confirm-pass' required />
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