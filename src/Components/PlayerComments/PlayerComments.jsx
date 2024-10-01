import { IoIosStar } from "react-icons/io";
import Slider from 'react-slick'; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlayerComments = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };
    return (
        <div className='max-w-[1500px] mx-auto mt-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-lg'>From The Clubhouse</p>
                    <h1 className='text-4xl xl:text-5xl font-bold mt-2'>What Players Are Saying</h1>
                </div>
                <div>
                    <button className='bg-red-500 p-6 rounded-md mr-2'>Previous</button>
                    <button className='bg-red-500 p-6 rounded-md'>Next</button>
                </div>
            </div>
            <div className='mt-10'>
                <Slider {...settings}>
                    <div className='bg-gray-100 w-96 h-96 m-5 p-5' style={{margin: '20px'}}>
                        <div>
                            <p className='text-yellow-500 text-xl flex mb-3 '><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></p>
                            <p className="font-thin">Great purchase! Emails kept me in the know of what stage the glove was in and when it shipped. Great options to choose from and glove is great quality leather! You absolutely can't beat the price for this quality of glove!</p>
                        </div>
                        <div>
                            <hr className="border-1 border-gray-500 mb-5" />
                            <p>Drew F</p>
                            <p>Custom Glove</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PlayerComments;