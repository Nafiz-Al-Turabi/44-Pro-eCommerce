import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import color1 from './../../assets/BannerImage/paintspatter.png';
import color2 from './../../assets/BannerImage/heading-bg1.png';
import color3 from './../../assets/BannerImage/custom-is-better-heading-bg-2.png';
import color4 from './../../assets/BannerImage/heading-bg.png';
import text1 from './../../assets/BannerImage/text.png';
import text2 from './../../assets/BannerImage/heading1.png';
import text3 from './../../assets/BannerImage/custom-is-better-heading.png';
import text4 from './../../assets/BannerImage/heading.png';
import colorWheel from './../../assets/BannerImage/color-wheel.png';
import image1 from './../../assets/BannerImage/polaroid.png';
import image2 from './../../assets/BannerImage/gloves-2.png';
import image3 from './../../assets/BannerImage/custom-is-better-players-2.png';
import image4 from './../../assets/BannerImage/bats.png';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className='bg-slide-1 cover h-[600px]  bg-cover bg-center overflow-hidden'>
                <div className='max-w-[1500px] mx-auto relative'>
                    <img src={color1} alt="" className='w-[620px] mt-10' />
                    <div className='absolute top-12 left-16'>
                        <img src={text1} alt="" className='max-w-lg' />
                        <h1 className='text-xl text-white ml-16 mt-3'>Design for speed & performance in the field.</h1>
                        <Link to="/contact" className="flex items-center justify-center bg-gradient-to-tl to-rose-600 from-rose-500 w-56 py-3 px-2 text-lg text-white rounded-md ml-16 mt-5 hover:underline">
                            <img src={colorWheel} alt="" className='w-6 mr-2' /> Custom Builder
                        </Link>
                    </div>
                    <div className='absolute -top-9 right-0'>
                        <img src={image1} alt="" className='max-w-sm' />
                    </div>
                </div>
            </div>
            <div className='bg-slide-2 cover h-[600px]  bg-cover bg-center overflow-hidden '>
                <div className='max-w-[1600px] mx-auto relative'>
                    <img src={color2} alt="" className='w-[620px] mt-10' />
                    <div className='absolute top-12 left-16'>
                        <img src={text2} alt="" className='max-w-lg' />
                        <h1 className='text-xl text-white ml-16 mt-3'>Design for speed & performance in the field.</h1>
                        <Link to="/contact" className="flex items-center justify-center bg-gradient-to-tl to-cyan-200 from-cyan-400 w-56 py-3 px-2 text-lg text-black rounded-md ml-16 mt-5 hover:underline">
                            <img src={colorWheel} alt="" className='w-6 mr-2' /> Custom Builder
                        </Link>
                    </div>
                    <div className='absolute top-10 right-0'>
                        <img src={image2} alt="" className='max-w-4xl' />
                    </div>
                </div>
            </div>
            <div className='bg-slide-3 cover h-[600px]  bg-cover bg-center overflow-hidden '>
                <div className='max-w-[1600px] mx-auto relative'>
                    <img src={color3} alt="" className='w-[620px] mt-10' />
                    <div className='absolute top-12 left-16'>
                        <img src={text3} alt="" className='max-w-lg' />
                        <h1 className='text-xl text-white ml-16 mt-3'>Design for speed & performance in the field.</h1>
                        <Link to="/contact" className="flex items-center justify-center bg-gradient-to-tl to-cyan-200 from-cyan-400 w-56 py-3 px-2 text-lg text-black rounded-md ml-16 mt-5 hover:underline">
                            <img src={colorWheel} alt="" className='w-6 mr-2' /> Custom Builder
                        </Link>
                    </div>
                    <div className='absolute top-0 right-0'>
                        <img src={image3} alt="" className='max-w-3xl' />
                    </div>
                </div>
            </div>
            <div className='bg-slide-4 cover h-[600px]  bg-cover bg-center overflow-hidden '>
                <div className='max-w-[1600px] mx-auto relative'>
                    <img src={color4} alt="" className='w-[620px] mt-0 ' />
                    <div className='absolute top-12 left-16'>
                        <img src={text4} alt="" className='max-w-lg' />
                        <h1 className='text-xl text-white ml-16 mt-3'>Design for speed & performance in the field.</h1>
                        <Link to="/contact" className="flex items-center justify-center bg-gradient-to-tl to-green-400 from-yellow-400 w-56 py-3 px-2 text-lg text-black rounded-md ml-16 mt-5 hover:underline">
                            <img src={colorWheel} alt="" className='w-6 mr-2' /> Custom Builder
                        </Link>
                    </div>
                    <div className='absolute top-32 -right-32'>
                        <img src={image4} alt="" className='max-w-6xl z-0 ' />
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Banner;
