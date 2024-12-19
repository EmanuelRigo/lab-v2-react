import React from 'react';

const CarouselItem = ({ image, caption }) => {
  return (
    <div className="flex items-center justify-between w-full h-full py-4 bg-white bg-opacity-75">
      <div className="w-2/5 p-4 h-full mr-8">
        <p className="text-lg font-semibold text-right">{caption}</p>
      </div>
      <div className="w-3/5">
        <img src={image} alt="Carousel Item" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default CarouselItem;