import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from './../../assets/logo.svg';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { login,user } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password)
            alert('login success')
            navigate('/')
        } catch (error) {
            console.log('Login failed. Please check your credentials.');
        }
    };
    console.log(user);

    return (
        <div className='h-dvh flex justify-center items-center'>
            <div>
                <Link to='/' className='flex justify-center'>
                    <img src={logo} alt="logo" className='w-40' />
                </Link>
                <h1 className='text-3xl font-bold text-center my-6'>Sign in to your account</h1>
                <p className='text-center'>or <span className='text-blue-400'><Link to='/signup'>register if you don't have one</Link></span></p>

                <form onSubmit={handleSubmit(onSubmit)} className='md:w-96'>
                    <div className='my-4'>
                        <label className='block'>Email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className='border p-2 w-full'
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className='my-4 relative'>
                        <label className='block'>Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: 'Password is required' })}
                            className='border p-2 w-full'
                        />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        <button
                            type="button"
                            className='absolute right-3 top-10'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className='flex items-center justify-between my-4'>
                        <div>
                            <input
                                type="checkbox"
                                {...register('rememberMe')}
                                className='mr-2'
                            />
                            <label>Remember Me</label>
                        </div>
                        <Link to='/forgot-password' className='text-blue-500 hover:underline'>
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded w-full'>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
