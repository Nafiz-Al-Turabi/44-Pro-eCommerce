import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import curated1 from "./../../assets/Home/1709808--BACK.png";
import curated10 from "./../../assets/Home/1709807--BACK.png";
import curated2 from "./../../assets/Home/1709810--BACK.png";
import curated3 from "./../../assets/Home/Final_CityConnect.png";
import curated4 from "./../../assets/Home/1709809--BACK.png";
import curated5 from "./../../assets/Home/Final_Faith.png";
import curated6 from "./../../assets/Home/Final_Joker.png";
import curated7 from "./../../assets/Home/1709811--BACK.png";
import curated8 from "./../../assets/Home/Final_USA.png";
import curated9 from "./../../assets/Home/Final_Sakura.png";
import { Link } from "react-router-dom";
import colorWheel from './../../assets/BannerImage/color-wheel.png'
const CustomCurated = () => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const curateds = [
        { title: "Duck Hunt", img: curated1, brand: "Infield / Pro 44" },
        { title: "Spring Season", img: curated2, brand: "Infield / Pro 44" },
        { title: "Lightning", img: curated3, brand: "Infield / Pro 44" },
        { title: "Cherry Blossom", img: curated4, brand: "Alloy XP BBCOR" },
        { title: "The Jocker", img: curated5, brand: "Alloy XP BBCOR" },
        { title: "The Bachelor", img: curated6, brand: "Infield / Pro 44" },
        { title: "USA", img: curated7, brand: "Alloy XP BBCOR" },
        { title: "The Mint", img: curated8, brand: "Infield / Pro 44" },
        { title: "City Connect", img: curated9, brand: "Alloy XP BBCOR" },
        { title: "Faith", img: curated10, brand: "Alloy XP BBCOR" },
    ];

    return (
        <div className="bg-image py-20">
            <div className="container mx-auto">
                <div>
                    <p>Custom Curated</p>
                    <div className="flex justify-between mb-10">
                        <p className="text-5xl my-3 font-bold flex justify-center">
                            <div className="flex mr-5 flex-col justify-center">
                                <p>Trending </p>
                                {/* <img className="w-[200px]" src={redLine} alt="" /> */}
                            </div>
                            Collection
                        </p>
                        <div className="mb-4">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className={`p-4 mr-2 ${isBeginning ? "bg-red-300" : "bg-red-600"
                                    } text-white rounded transition-opacity`}
                                disabled={isBeginning}
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className={`p-4 ${isEnd ? "bg-red-300" : "bg-red-600"
                                    } text-white rounded transition-opacity`}
                                disabled={isEnd}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                className="lg:ml-44"
                spaceBetween={15}
                slidesPerView={4.5} // Default to 1 slide
                breakpoints={{
                    320: {
                        slidesPerView: 1, // For very small mobile screens (320px)
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1.5, // Small devices (e.g., iPhone SE, 480px width)
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2, // Mobile devices (640px width)
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.5, // Tablets (768px width)
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4.5, // Desktop and larger screens (1024px and up)
                        spaceBetween: 20,
                    },
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
            >
                {curateds.map((curated) => (
                    <SwiperSlide key={curated.title}>
                        <div className="bg-white p-5">
                            <img src={curated.img} alt={curated.title} />
                            <div className="flex justify-between">
                                <div>
                                    <p>{curated.brand}</p>
                                    <p className="text-xl font-semibold">{curated.title}</p>
                                </div>
                                <Link to="/contact">
                                    <button className='primary-btn text-white bg-stone-800 hover:bg-gray-200  duration-300'> <img src={colorWheel} alt="" /> Customize</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomCurated;