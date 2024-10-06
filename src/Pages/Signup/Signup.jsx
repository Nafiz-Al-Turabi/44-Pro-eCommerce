import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from './../../assets/logo.svg';
import axiosInstance from '../../Axios/AxiosInstance';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = async(data) => {
        // Exclude confirmPassword from the data sent to the server
        const { confirmPassword, ...signupData } = data;

        try {
            const response = await axiosInstance.post('/signup', signupData);
            console.log(response.data);
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    const password = watch('password', '');

    return (
        <div className='h-dvh flex justify-center items-center'>
            <div>
                <Link to='/' className='flex justify-center'>
                    <img src={logo} alt="logo" className='w-40' />
                </Link>
                <h1 className='text-3xl font-bold text-center my-6'>Create your account</h1>
                <p className='text-center'>or <span className='text-blue-500'><Link to='/login'>sign in if you already have one</Link></span></p>

                <form onSubmit={handleSubmit(onSubmit)} className='md:w-96'>
                    <div className='my-4'>
                        <label className='block'>Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className='border p-2 w-full'
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

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

                    <div className='my-4 relative'>
                        <label className='block'>Confirm Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            {...register('confirmPassword', {
                                required: 'Confirm Password is required',
                                validate: (value) => value === password || 'Passwords do not match'
                            })}
                            className='border p-2 w-full'
                        />
                        {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}

                        <button
                            type="button"
                            className='absolute right-3 top-10'
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className='flex items-center justify-between my-4'>
                        <div>
                            <input
                                type="checkbox"
                                {...register('terms')}
                                className='mr-2'
                            />
                            <label>I agree to the terms and conditions</label>
                        </div>
                    </div>

                    <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded w-full'>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
