import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GlovesSVG from "../../SVGComponents/GlovesSVG";
import CustomColors from "../../Components/CustomColors/CustomColors";

const CustomDesign = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Base"); // State to manage the active tab
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [color, setColor] = useState({
    lather1: "#aca9a9",
    lather2: "#c4c4c4",
    lather3: "#aca9a9",
    lather4: "#c4c4c4",
    lather5: "#aca9a9",
    lather6: "#c4c4c4",
    lather7: "#aca9a9",
    lather8: "#aca9a9",
    web: "#bdbdb1",
    wrist: "#edffedee",
    palm: "#868686",
    binding: "#787280",
    logo: "#7e8292ee",
    laces: "#cad0d1",
  });

  const handleColor = (part, value) => {
    setColor((prevColor) => ({
      ...prevColor,
      [part]: value,
    }));
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // Array of parts and labels to avoid repetition
  const colorParts = [
    { label: "LEATHER 1", part: "lather1" },
    { label: "LEATHER 2", part: "lather2" },
    { label: "LEATHER 3", part: "lather3" },
    { label: "LEATHER 4", part: "lather4" },
    { label: "LEATHER 5", part: "lather5" },
    { label: "LEATHER 6", part: "lather6" },
    { label: "LEATHER 7", part: "lather7" },
    { label: "LEATHER 8", part: "lather8" },
    { label: "WEB", part: "web" },
    { label: "WRIST", part: "wrist" },
    { label: "PALM", part: "palm" },
    { label: "BINDING", part: "binding" },
    { label: "LOGO COLOR", part: "logo" },
    { label: "LACES", part: "laces" },
  ];

  return (
    <div className="xl:max-w-[1536px] mx-auto p-4">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:w-3/4 lg:h-screen">
          <GlovesSVG color={color} />
        </div>
        <div className="my-10 2xl:my-32">
          <div className="flex justify-center w-full">
            <button
              onClick={() => setActiveTab("Base")}
              className={`h-20 text-left pl-2 ${activeTab === "Base" ? "bg-[#ffb948] text-white shadow-inner shadow-gray-500/20 w-full" : "bg-gray-300 hover:bg-zinc-400 shadow-inner shadow-gray-500/20 w-full"}`}
            >
              Base
              <span className="block">0 remaining</span>
            </button>
            <button
              onClick={() => setActiveTab("Color")}
              className={`h-20 text-left pl-2 ${activeTab === "Color" ? "bg-[#ffb948] text-white shadow-inner shadow-gray-500/20 w-full" : "bg-gray-300 hover:bg-zinc-400 shadow-inner shadow-gray-500/20 w-full"}`}
            >
              Color
              <span className="block">0 remaining</span>
            </button>
            <button
              onClick={() => setActiveTab("Personalize")}
              className={`h-20 text-left pl-2 ${activeTab === "Personalize" ? "bg-[#ffb948] text-white shadow-inner shadow-gray-500/20 w-full" : "bg-gray-300 hover:bg-zinc-400 shadow-inner shadow-gray-500/20 w-full"}`}
            >
              Personalize
              <span className="block">0 remaining</span>
            </button>
          </div>
          {activeTab === "Base" && (
            <div className="">
              <h2 className="text-xl font-semibold bg-gray-100 p-5">Size</h2>
              <div>
                <div className="flex items-center gap-6 text-xl p-5 bg-zinc-50 hover:bg-zinc-300 cursor-pointer" onClick={() => document.getElementById('customCheckbox').click()}>
                  <input type="checkbox" id="customCheckbox" className="appearance-none w-6 h-6 border border-gray-400 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none" />
                  <span>12.5"</span>
                </div>

              </div>
            </div>
          )}

          {activeTab === "Color" && (
            <div className="bg-zinc-50  ">
              <div className="flex justify-between bg-zinc-100">
                <div>
                  <p
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={`p-4 mr-2 ${isBeginning ? "hidden" : "flex"} text-blue-500 rounded transition-opacity font-semibold cursor-pointer`}
                  >
                    <FaArrowLeft style={{ fontSize: "14px", margin: "5px" }} /> Previous
                  </p>
                </div>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className={`p-4 ${isEnd ? "hidden" : "flex"} text-blue-500 rounded transition-opacity font-semibold cursor-pointer`}
                >
                  Next <FaArrowRight style={{ fontSize: "14px", margin: "5px" }} />
                </button>
              </div>
              <div className="h-[500px] overflow-auto">
                <Swiper
                  ref={swiperRef}
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={handleSlideChange}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                >
                  {colorParts.map(({ label, part }) => (
                    <SwiperSlide key={part}>
                      <p className="p-10 text-xl">{label}</p>
                      <CustomColors color={color} handleColor={(value) => handleColor(part, value)} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}

          {activeTab === "Personalize" && (
            <div className="">
              <h2 className="text-xl font-semibold bg-gray-100 p-5">Personalize</h2>

            </div>
          )}
          <button className="px-10 py-2 text-xl bg-zinc-100 rounded-md mt-5">Add To Cart <span>$256</span></button>
          <p className="text-sm mt-2">To add to cart, please answer the required steps in the Base and Personalize sections.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;
