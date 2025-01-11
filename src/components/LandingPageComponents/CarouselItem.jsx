import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const CarouselItem = ({ image, title, description, caption }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={image}
        alt="Carousel Item"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-start">
        <div className="relative w-1/2 h-full">
          <div className="absolute inset-0 bg-sky-900 bg-opacity-70 transform skew-x-12 w-[150%] -left-1/4"></div>
          <div className="relative w-full  text-white p-4 ps-28 flex flex-col justify-center items-start h-full ">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            
            <p className="text-lg font-semibold ">{caption}</p><p className="mb-9">{description}</p>
            <div className="flex space-x-4">

              
              <button className="bg-sky-600 text-white px-4 py-2 flex items-center hover:bg-sky-700 transition-colors duration-200">
                <FaWhatsapp className="mr-2" />
                SEDE PALERMO
              </button>
              <button className="bg-sky-600 text-white px-4 py-2 flex items-center hover:bg-sky-700 transition-colors duration-200">
                <FaWhatsapp className="mr-2" />
                SEDE SAN TELMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
