import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GlovesSVG from "../../SVGComponents/GlovesSVG";
import CustomColors from "../../Components/CustomColors/CustomColors";
import useCart from "../../Hooks/useCart";

const CustomDesign = () => {
  const swiperRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Base"); // State to manage the active tab
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPersonalization, setSelectedPersonalization] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const { addItem } = useCart()
  const defaultColors = {
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
  };
  const [color, setColor] = useState(defaultColors);
  const [selectedColorsCount, setSelectedColorsCount] = useState(0);

  const areAllColorsSelected = () => {
    return Object.keys(defaultColors).every((part) => color[part] !== defaultColors[part]);
  };
  // Update handleColor function to track selections
  const handleColor = (part, value) => {
    // Check if the user is selecting a different color from the default
    if (color[part] === defaultColors[part] && value !== defaultColors[part]) {
      setSelectedColorsCount((prev) => prev + 1); 
    } else if (color[part] !== defaultColors[part] && value === defaultColors[part]) {
      setSelectedColorsCount((prev) => prev - 1); 
    }
  
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

  const sizes = [12.5, 12.75, 13];
  const personalizes = [
    "none",
    "home plate logo",
    "Graphics",
    "Premium Graphic",
    "Jumbo Number",
    "Stamped Flag ",
    "Custom Plate Number ",
  ]

  const saveToCart = () => {
    if (!selectedSize || !selectedPersonalization) {
      alert("Please select both size and personalization before adding to the cart.");
      return;
    }
    const newCartItem = {
      size: selectedSize,
      colors: color,
      personalization: selectedPersonalization,
      price: 256,
    };

    addItem(newCartItem);
    alert("Item added to cart!");
  };

  return (
    <div className="p-4 bg-gray-200">
      <div className="xl:max-w-[1536px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:w-full h-screen ">
            <GlovesSVG color={color} />
          </div>
          <div className="my-10 2xl:my-32">
            <div className="flex justify-center w-full">
              <button
                onClick={() => setActiveTab("Base")}
                className={`h-20 text-left pl-2 ${activeTab === "Base" ? "bg-[#ffb948] text-white shadow-inner shadow-gray-500/20 w-full" : "bg-gray-300 hover:bg-zinc-400 shadow-inner shadow-gray-500/20 w-full"}`}
              >
                Base
                <span className="block">{selectedSize ? "0 remaining" : "1 remaining"}</span>
              </button>
              <button
                onClick={() => setActiveTab("Color")}
                className={`h-20 text-left pl-2 ${activeTab === "Color" ? "bg-[#ffb948] text-white shadow-inner shadow-gray-500/20 w-full" : "bg-gray-300 hover:bg-zinc-400 shadow-inner shadow-gray-500/20 w-full"}`}
              >
                Color
                <span className="block"> {colorParts.length - selectedColorsCount} remaining</span>
              </button>
              <button
                onClick={() => setActiveTab("Personalize")}
                className={`h-20 text-left pl-2 ${activeTab === "Personalize" ? "bg-[#ffb948] text-white shadow-inner shadow-gray-500/20 w-full" : "bg-gray-300 hover:bg-zinc-400 shadow-inner shadow-gray-500/20 w-full"}`}
              >
                Personalize
                <span className="block">{selectedPersonalization ? "0 remaining" : "1 remaining"}</span>
              </button>
            </div>
            {activeTab === "Base" && (
              <div className="">
                <h2 className="text-xl font-semibold bg-gray-100 p-5">Size</h2>
                <ul className="divide-y">
                  {sizes.map((size, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-6 text-xl p-5 ${selectedSize === size ? 'bg-green-50' : 'bg-zinc-50 hover:bg-zinc-300'}`}
                    >
                      <input
                        type="radio"
                        name="size"
                        onChange={() => setSelectedSize(size)}
                        checked={selectedSize === size}
                        id={`size-${index}`}
                        className="appearance-none h-4 w-4 border border-zinc-200 rounded-full checked:bg-green-600"
                      />
                      {size}
                    </li>
                  ))}
                </ul>
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
                <ul className="divide-y">
                  {personalizes.map((personalize, index) => (
                    <li
                      key={index}
                      className={`text-lg p-5 gap-6 ${selectedPersonalization === personalize ? 'bg-[#EFFFE3]' : 'bg-zinc-50 hover:bg-zinc-300'}`}
                    >
                      <div className="flex items-center gap-6">
                        <input
                          onChange={() => setSelectedPersonalization(personalize)}
                          checked={selectedPersonalization === personalize}
                          id={`personalize-${index}`}
                          type="radio"
                          name="personalization"
                          className="appearance-none h-4 w-4 border border-zinc-200 rounded-full checked:bg-green-600"
                        />
                        <span>{personalize}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button  disabled={!areAllColorsSelected()} onClick={saveToCart} className="px-10 py-2 text-xl bg-zinc-100 rounded-md mt-5">Add To Cart <span>$256</span></button>
            <p className="text-sm mt-2">To add to cart, please answer the required steps in the Base and Personalize sections.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;
