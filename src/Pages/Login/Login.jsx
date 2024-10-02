import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.svg'

const Login = () => {
    return (
        <div className='h-dvh flex justify-center items-center'>
            <div>
                <Link to='/' className='flex justify-center'>
                    <img src={logo} alt="logo" className='w-40' />
                </Link>
                <h1 className='text-3xl font-bold text-center my-6'>Sign in to your account</h1>
                <p className='text-center'>or <span><Link to='/'>register if you don't have one</Link></span></p>
                <form action="">
                    <div>
                        <label className='block'>Email</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div>
                        <label className='block'>Password</label>
                        <input type="email" name="" id="" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;