import React, { useEffect } from "react";
import Image from "next/image";

const CardServices = ({ service }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fade-in-card");
    elements.forEach((element) => {
      element.classList.remove("animate-fade-in-card");
      void element.offsetWidth; // Trigger reflow
      element.classList.add("animate-fade-in-card");
    });
  }, [service]);

  return (
    <div className="flex gap-6 md:w-4/6 px-6 min-h-[350px] animate-fade-in-card">
      <div className="w-3/6 flex min-h-[350px] items-center justify-center relative">
        <Image
          src={service.img}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="animate-fade-in-card"
        />
      </div>
      <div className="flex flex-col justify-between w-3/6 animate-fade-in-card">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 m-0 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>

          {service.ul && service.ul.length > 0 && (
            <ul className="list-disc list-inside text-gray-600 ps-4 mt-2">
              {service.ul.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4 flex justify-start">
          <button className="p-6 py-5 bg-sky-600 text-white hover:bg-sky-700 transition-colors duration-200">
            CONTACTANOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardServices;