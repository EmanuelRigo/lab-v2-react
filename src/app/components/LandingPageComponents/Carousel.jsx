"use client"

import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    {
      image: '/image1.jpg',
      title: 'Título 1',
      description: 'Esta es la descripción para la imagen 1',
      caption: 'Esta es la leyenda para la imagen 1',
    },
    {
      image: '/image2.avif',
      title: 'Título 2',
      description: 'Esta es la descripción para la imagen 2',
      caption: 'Esta es la leyenda para la imagen 2',
    },
    {
      image: '/image3.jpg',
      title: 'Título 3',
      description: 'Esta es la descripción para la imagen 3',
      caption: 'Esta es la leyenda para la imagen 3',
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[50vh] mx-auto">
      <div className="overflow-hidden relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <CarouselItem 
              image={item.image} 
              title={item.title} 
              description={item.description} 
              caption={item.caption} 
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-700 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-700 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;