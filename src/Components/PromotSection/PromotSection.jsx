import React from 'react';
import './PromotSection.css'
import colorWheel from './../../assets/BannerImage/color-wheel.png'
import { Link } from 'react-router-dom';

const PromotSection = () => {
    return (
        <div>
            <div className='promot-bg-image bg-right md:bg-none max-w-[1500px] mx-auto lg:h-96 mt-20 p-10 '>
                <div className='bg-black/95 lg:w-2/6 text-white p-10 rounded-md'>
                    <h3 className='text-lg font-bold text-yellow-600'>44 Pro #1 Custom Brand</h3>
                    <h1 className='text-3xl font-bold mb-5'>Custom Is More Than Color</h1>
                    <p className='text-lg mb-8'>High performance gear personalized to match your style of play.</p>
                    <Link to="/contact">
                        <button className='primary-btn text-black w-full bg-white hover:bg-gray-200  duration-300'> <img src={colorWheel} alt="" className='w-6 mr-2' />Build your Custom 44</button>
                    </Link>
                </div>
            </div>
            <div className='promot-bg-image2 max-w-[1500px] mx-auto lg:h-full mt-20 p-10 flex justify-end '>
                <div className='bg-black/95 lg:w-2/6 text-white p-10 rounded-md '>
                    <h3 className='text-lg font-bold text-yellow-600'>Get The Pro Treatment</h3>
                    <h1 className='text-3xl font-bold mb-5'>Highest Quality Materials in the Game</h1>
                    <p className='text-lg mb-8'>rafted with the same pro grade Japanese Kip leather that pro players demand, your glove is meticulously handcrafted side by side with some of the game's most elite players like Justin Turner, Nestor Cortes, Joe Musgrove, and hundreds more!
                        .</p>
                    <Link to="/contact">
                        <button className='primary-btn text-black w-full bg-white hover:bg-gray-200  duration-300'> <img src={colorWheel} alt="" className='w-6 mr-2' />Build your Custom 44</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PromotSection;