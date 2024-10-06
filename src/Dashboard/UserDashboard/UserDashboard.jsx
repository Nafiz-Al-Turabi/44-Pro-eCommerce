import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const UserDashboard = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='bg-[#F5F5F5] pb-20'>
            <h1 className='text-6xl text-zinc-900 font-bold text-center py-10 '>Account</h1>
            <div className='bg-white m-4 shadow border max-w-4xl mx-auto rounded-md'>
                <h2 className='text-xl mb-3 px-6 pt-6'>Account settings</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-6'>
                        <div className='my-2'>
                            <label className='block'>Name<span className='text-red-500'>*</span></label>
                            <input
                                defaultValue={user?.name}
                                {...register('name', { required: true })}
                                className='w-full py-1 px-4 border rounded mt-2 focus:outline-zinc-300'
                            />
                            {errors.name && <p className='text-red-500'>Name is required</p>}
                        </div>
                        <div className='my-2'>
                            <label className='block'>Email<span className='text-red-500'>*</span></label>
                            <input
                                defaultValue={user?.email}
                                {...register('email', { required: true })}
                                className='w-full py-1 px-4 border rounded mt-2 focus:outline-zinc-300'
                            />
                            {errors.email && <p className='text-red-500'>Email is required</p>}
                        </div>
                        <div className='lg:col-span-2 my-2 flex items-center gap-3'>
                            <input type="checkbox" {...register('newsletter')} className='w-4 h-4' />
                            <span>I would like to receive emails from 44 Pro about new products, special offers, and promotions.</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-end bg-zinc-100 p-6'>
                        <button type="submit" className='bg-blue-500 px-5 py-2 rounded text-white'>Save</button>
                    </div>
                </form>
            </div>

            <div className='bg-white m-4 shadow border max-w-4xl mx-auto rounded-md'>
                <h2 className='text-xl mb-3 px-6 pt-6'>Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mb-3'>
                        <div className='my-2 relative'>
                            <label className='block'>Current password <span className='text-zinc-500'>(Optional)</span></label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                {...register('currentPassword')}
                                className='w-full py-1 px-4 border rounded mt-2 focus:outline-zinc-300'
                            />
                            <div
                                className='absolute right-3 top-10 text-xl cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>
                        </div>
                        <div className='my-2 relative'>
                            <label className='block'>New password <span className='text-zinc-500'>(Optional)</span></label>
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                {...register('newPassword')}
                                className='w-full py-1 px-4 border rounded mt-2 focus:outline-zinc-300'
                            />
                            <div
                                className='absolute right-3 top-10 text-xl cursor-pointer'
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-end bg-zinc-100 p-6'>
                        <button type="submit" className='bg-blue-500 px-5 py-2 rounded text-white'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDashboard;
