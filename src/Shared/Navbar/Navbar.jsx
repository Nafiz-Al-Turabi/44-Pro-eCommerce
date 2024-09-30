import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './../../assets/logo.svg'
import colorWheel from './../../assets/BannerImage/color-wheel.png'
import { Link } from 'react-router-dom';
import { IoCartSharp } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-white shadow-lg w-full top-0 left-0 z-10 font-normal">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left side - Logo and Menu Items */}
                    <div className="flex items-center space-x-10">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-2xl font-bold text-gray-800">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-10 items-center">
                            {/* Dropdown Menu */}
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-gray-800 hover:text-gray-900 focus:outline-none"
                                >
                                    Custom Crafted
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute top-full mt-2 w-40 bg-white shadow-md rounded-lg">
                                        <Link
                                            to="/service1"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Service 1
                                        </Link>
                                        <Link
                                            to="/service2"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Service 2
                                        </Link>
                                        <Link
                                            to="/service3"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Service 3
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link to="/" className="text-gray-800 hover:text-gray-900">Stock Products</Link>
                            <Link to="/about" className="text-gray-800 hover:text-gray-900">Trending Designs</Link>
                            <Link to="/contact" className="text-gray-800 hover:text-gray-900">Team 44</Link>
                            <Link to="/contact" className="text-gray-800 hover:text-gray-900">Help Center</Link>
                            <Link to="/contact" className="flex items-center bg-gray-900 py-3 px-5 text-white rounded-md">
                                <img src={colorWheel} alt="" className='w-6 mr-2' /> Custom Builder
                            </Link>

                        </div>
                    </div>

                    {/* Right side - Login/Register and Cart */}
                    <div className="hidden xl:flex items-center space-x-4">
                        <Link to="/login" className="text-gray-800 hover:text-gray-900 font-normal">Login/Register</Link>
                        <Link to="/cart" className="text-gray-800 hover:text-gray-900 relative">
                            <IoCartSharp className='text-3xl' />
                            <span className='absolute  -top-3.5 left-5 bg-blue-500 w-6 h-6 flex justify-center items-center text-white text-sm rounded-full '>0</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden space-x-10">
                        <Link to="/cart" className="text-gray-800 hover:text-gray-900 relative">
                            <IoCartSharp className='text-3xl' />
                            <span className='absolute  -top-3.5 left-5 bg-blue-500 w-6 h-6 flex justify-center items-center text-white text-sm rounded-full '>0</span>
                        </Link>
                        <button onClick={toggleMenu} className="text-gray-500 bg-gray-100 p-2 rounded-md active:border-yellow-500 ">
                            {isOpen ? <RiCloseLargeLine  size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 z-20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                        {/* Dropdown Menu in Mobile */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
                            >
                                Custom Crafted
                            </button>
                            {dropdownOpen && (
                                <ul className="mt-1 space-y-1 list-disc pl-8">
                                    <li>
                                        <Link
                                            to="/service1"
                                            className="block px-2 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
                                        >
                                            Custom Gloves
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/service2"
                                            className="block px-2 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
                                        >
                                            Custom Bats
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/service3"
                                            className="block px-2 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
                                        >
                                            Custom Batting Gloves
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/service4"
                                            className="block px-2 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200"
                                        >
                                            Custom Guards
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">Stock Products</Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">Trending Designs</Link>
                        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">Contact</Link>
                        <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">Team 44</Link>
                        <Link to="/contact" className="flex items-center bg-gray-900 py-3 px-2 text-white rounded-md w-40">
                            <img src={colorWheel} alt="" className='w-6 mr-2' /> Custom Builder
                        </Link>
                    </div>
                    <hr className='mt-3' />
                    <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200 my-5 ml-2">Login/Register</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
