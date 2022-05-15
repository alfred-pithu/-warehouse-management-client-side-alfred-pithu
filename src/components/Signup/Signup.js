import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user, loading, errorHook] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, userGmail, loadingGmail, errorGmail] = useSignInWithGoogle(auth);

    const signUpStart = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setError("Passwords didn't match")
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }
    if (user || userGmail) {
        navigate(from, { replace: true });
    }



    return (
        <div className='container '>

            <form onSubmit={signUpStart} className='w-50 mx-auto my-5'>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='confirmPassword' />
                </div>
                <p>Already Have an Account ? <Link to='/login' className='text-decoration-none'>Login</Link></p>
                <input type="submit" className="btn btn-primary" value='Signup'></input>

                {
                    <p className='my-3 text-danger'>{error}</p>
                }

                {
                    errorHook && <p className='my-3 text-danger'>{errorHook?.message}</p>
                }

            </form>
            <div className='my-5 d-flex justify-content-center align-items-center'>
                <div className='bg-black w-25 me-2' style={{ height: '1px' }}></div>
                =
                <div className='bg-black w-25 ms-2' style={{ height: '1px' }}></div>
            </div>

            <div className='d-flex justify-content-center '>
                <button onClick={() => signInWithGoogle()} className='btn  w-25 btn-primary '>Google Sign In</button>
            </div>
        </div>
    );
};

export default Signup;