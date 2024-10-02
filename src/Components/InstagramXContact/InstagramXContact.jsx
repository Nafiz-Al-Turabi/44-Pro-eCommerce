import React from 'react';
import { FaCheckCircle, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import line from './../../assets/line.svg'
import image1 from './../../assets/Home/social.jpg'
import image2 from './../../assets/Home/social1.jpg'
import image3 from './../../assets/Home/social2.jpg'
import image4 from './../../assets/Home/social3.jpg'
import image5 from './../../assets/Home/social4.jpg'
import image6 from './../../assets/Home/social5.jpg'
import player from './../../assets/Home/player-throwing.jpg'
import './InstagramXContact.css'

const InstagramXContact = () => {
    return (
        <div className='bg-image-dark pt-20'>
            <div className='flex justify-center w-full text-white'>
                <div className='text-center relative'>
                    <p className='text-lg'>Latest From Instagram</p>
                    <h1 className='text-4xl xl:text-5xl font-bold mt-2'>Join Over 430k+ Followers</h1>
                    <div className='flex justify-center mt-10'>
                        <Link to="/contact">
                            <button className='primary-btn w-60 text-black bg-white hover:bg-gray-200  duration-300'> <FaInstagram className='mr-2' /> Build your Custom 44</button>
                        </Link>
                    </div>
                    <img src={line} alt="sdsd" className='hidden xl:block absolute bottom-1/2 left-[37%] w-32 ' />
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-10'>
                <a href="" target='blank' className='relative group overflow-hidden'>
                    <img src={image1} alt="" className='w-80 h-80 object-cover transition duration-200 ease-in-out transform ' />
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out'></div>
                </a>
                <a href="" target='blank' className='relative group overflow-hidden'>
                    <img src={image2} alt="" className='w-80 h-80 object-cover transition duration-200 ease-in-out transform ' />
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out'></div>
                </a>
                <a href="" target='blank' className='relative group overflow-hidden'>
                    <img src={image3} alt="" className='w-80 h-80 object-cover transition duration-200 ease-in-out transform ' />
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out'></div>
                </a>
                <a href="" target='blank' className='relative group overflow-hidden'>
                    <img src={image4} alt="" className='w-80 h-80 object-cover transition duration-200 ease-in-out transform ' />
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out'></div>
                </a>
                <a href="" target='blank' className='relative group overflow-hidden'>
                    <img src={image5} alt="" className='w-80 h-80 object-cover transition duration-200 ease-in-out transform ' />
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out'></div>
                </a>
                <a href="" target='blank' className='relative group overflow-hidden'>
                    <img src={image6} alt="" className='w-80 h-80 object-cover transition duration-200 ease-in-out transform ' />
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-200 ease-in-out'></div>
                </a>
            </div>
            <div className='flex'>
                <div className='bg-image-light w-full xl:w-1/2 xl:pl-32 xl:pt-32 px-4 py-10'>
                    <div className='text-center xl:text-left'>
                        <p className='text-lg'>Sign Up Today</p>
                        <h1 className='text-4xl xl:text-5xl font-bold mt-2'>Join The 44 Pro Team</h1>
                    </div>
                    <div className='text-center mt-5  xl:flex gap-5'>
                        <p className='flex items-center gap-2'> <FaCheckCircle className='text-green-500' /> New Product Launch Info</p>
                        <p className='flex items-center gap-2'> <FaCheckCircle className='text-green-500' /> Advanced Notice On Sales</p>
                        <p className='flex items-center gap-2'> <FaCheckCircle className='text-green-500' /> Subscriber Exclusive Deals</p>
                    </div>
                    <div className="mt-10 xl:mt-20">
                        <div className="flex flex-col">
                            <label htmlFor="username" className="mb-2 text-lg font-medium text-gray-700">Username</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="p-3 mb-5 w-full xl:w-1/2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 text-lg font-medium text-gray-700">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 w-full xl:w-1/2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>

                        <button className="primary-btn bg-black text-white px-5">
                            Subscribe Now
                        </button>
                    </div>

                </div>
                <div className='xl:w-1/2 '>
                    <img src={player} alt="" className='hidden xl:block w-full object-cover bg-top h-[800px]' />
                </div>
            </div>
        </div>
    );
};

export default InstagramXContact;