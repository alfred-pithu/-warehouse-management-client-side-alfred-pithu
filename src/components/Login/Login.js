import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const Login = () => {
    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        userHook,
        loading,
        errorHook,
    ] = useSignInWithEmailAndPassword(auth);

    console.log(errorHook);

    const loginStart = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    if (userHook) {
        navigate(from, { replace: true });

    }
    return (
        <div className='container '>

            <form onSubmit={loginStart} className='w-50 mx-auto my-5'>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' />
                </div>
                <p>New  Here ? <Link to='/signup' className='text-decoration-none'>Signup</Link></p>
                <input type="submit" className="btn btn-primary" value='Login'></input>
                <br /> <br />
                {
                    errorHook && <p className='text-danger'>Error from Hook : {errorHook?.message}</p>
                }
                {
                    !errorHook && userHook && <p className='text-success'>User Logged In Successfully</p>
                }
            </form>
            <br />




        </div>
    );
};

export default Login;