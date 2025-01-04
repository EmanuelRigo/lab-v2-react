import React from "react";

const CarouselItem = ({ image, title, description, caption }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={image}
        alt="Carousel Item"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-start">
        <div className="relative w-1/2 ">
          <div className="absolute inset-0 bg-teal-900 bg-opacity-70 transform skew-x-12 w-[150%] -left-1/4"></div>
          <div className="relative w-full text-white p-4 flex flex-col justify-center items-center h-full ">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{description}</p>
            <p className="text-lg font-semibold mb-4">{caption}</p>
            <div className="flex space-x-4">
              <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors duration-200">
                Botón 1
              </button>
              <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors duration-200">
                Botón 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
