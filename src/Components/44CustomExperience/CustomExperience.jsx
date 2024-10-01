import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import './CustomExperience.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import colorWheel from './../../assets/BannerImage/color-wheel.png'
import arrow from './../../assets/arrow.svg'
import Gloves1 from './../../assets/Home/duck.jpeg'
import Gloves2 from './../../assets/Home/elephant-1b.jpeg'
import Gloves3 from './../../assets/Home/heartbreaker.jpeg'
import Gloves4 from './../../assets/Home/ice-cream.jpeg'
import bat1 from './../../assets/Home/blue.jpeg'
import bat2 from './../../assets/Home/group-alloy-xp-color.jpg'
import bat3 from './../../assets/Home/blonde.jpeg'
import bat4 from './../../assets/Home/group-alloy-xp-metal.jpeg'
import battingGloves1 from './../../assets/Home/blue1.jpeg'
import battingGloves2 from './../../assets/Home/black-gold.jpeg'
import battingGloves3 from './../../assets/Home/pink.jpeg'
import battingGloves4 from './../../assets/Home/white.jpeg'
import guards1 from './../../assets/Home/gold.jpeg'
import guards2 from './../../assets/Home/slider.jpeg'
import guards3 from './../../assets/Home/pink1.jpeg'
import guards4 from './../../assets/Home/red-blue.jpeg'
import { Link } from 'react-router-dom';

const CustomExperience = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false
    };
    return (
        <div className='bg-image bg-cover mt-20 p-6'>
            <div className='max-w-[1500px] mx-auto'>
                <div className='text-center relative'>
                    <p className='text-lg'>44 Pro Custom Experience</p>
                    <h1 className='text-4xl xl:text-5xl font-bold mt-2'>Start Building</h1>
                    <img src={arrow} alt="" className='hidden xl:block absolute top-8 left-[35%]' />
                    <img src={arrow} alt="" className='hidden xl:block absolute top-8 right-[35%] transform scale-x-[-1]' />
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10'>
                    <div>
                        <Slider {...settings}>
                            <img src={Gloves1} alt="" className='w-96 rounded-md' />
                            <img src={Gloves2} alt="" className='w-96 rounded-md' />
                            <img src={Gloves3} alt="" className='w-96 rounded-md' />
                            <img src={Gloves4} alt="" className='w-96 rounded-md' />
                        </Slider>
                        <Link to="/contact">
                            <button className='primary-btn bg-zinc-900 w-full text-white hover:bg-zinc-500 duration-300'> <img src={colorWheel} alt="" className='w-6 mr-2' /> Gloves</button>
                        </Link>
                    </div>
                    <div>
                        <Slider {...settings}>
                            <img src={bat1} alt="" className='w-96 rounded-md' />
                            <img src={bat2} alt="" className='w-96 rounded-md' />
                            <img src={bat3} alt="" className='w-96 rounded-md' />
                            <img src={bat4} alt="" className='w-96 rounded-md' />
                        </Slider>
                        <Link to="/contact">
                            <button className='primary-btn bg-zinc-900 w-full text-white hover:bg-zinc-500 duration-300'> <img src={colorWheel} alt="" className='w-6 mr-2' /> Bats</button>
                        </Link>
                    </div>
                    <div>
                        <Slider {...settings}>
                            <img src={battingGloves1} alt="" className='w-96 rounded-md' />
                            <img src={battingGloves2} alt="" className='w-96 rounded-md' />
                            <img src={battingGloves3} alt="" className='w-96 rounded-md' />
                            <img src={battingGloves4} alt="" className='w-96 rounded-md' />
                        </Slider>
                        <Link to="/contact">
                            <button className='primary-btn bg-zinc-900 w-full text-white hover:bg-zinc-500 duration-300'> <img src={colorWheel} alt="" className='w-6 mr-2' /> Batting Gloves</button>
                        </Link>
                    </div>
                    <div>
                        <Slider {...settings}>
                            <img src={guards1} alt="" className='w-96 rounded-md' />
                            <img src={guards2} alt="" className='w-96 rounded-md' />
                            <img src={guards3} alt="" className='w-96 rounded-md' />
                            <img src={guards4} alt="" className='w-96 rounded-md' />
                        </Slider>
                        <Link to="/contact">
                            <button className='primary-btn bg-zinc-900 w-full text-white hover:bg-zinc-500 duration-300'> <img src={colorWheel} alt="" className='w-6 mr-2' />Guards</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomExperience;;