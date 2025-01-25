import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const CarouselItem = ({ image, title, description, caption }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={image}
        alt="Carousel Item"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex justify-center md:justify-start items-center">
        <div className="relative w-full md:w-1/2 h-full flex flex-col md:flex-row items-center md:items-start">
          <div className="absolute inset-0 bg-sky-900 bg-opacity-70 transform md:skew-x-12 w-full md:w-[150%] md:-left-1/4"></div>
          <div className="relative w-full text-white p-4 md:ps-28 flex flex-col justify-center items-center md:items-start h-full">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">{title}</h2>
            <p className="text-lg font-semibold text-center md:text-left">{caption}</p>
            <p className="mb-9 text-center md:text-left">{description}</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-sky-600 text-white px-4 py-2 flex items-center justify-center hover:bg-sky-700 transition-colors duration-200">
                <FaWhatsapp className="mr-2" />
                SAN JUSTO
              </button>
              <button className="bg-sky-600 text-white px-4 py-2 flex items-center justify-center hover:bg-sky-700 transition-colors duration-200">
                <FaWhatsapp className="mr-2" />
                CABALLITO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;