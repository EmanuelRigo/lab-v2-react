import React from "react";
import { FaMicroscope, FaVial, FaHome, FaChild } from "react-icons/fa";
import CardServices from "./CardServices";

const ServicesInfo = () => {
  return (
    <div className="bg-white p-6 px-9">
      <h2 className="text-2xl font-bold text-sky-600 mb-4">
        Nuestros Servicios
      </h2>
      <div className="flex w-full flex-wrap">
        <div className="w-full md:w-2/6">
          <button className="text-center flex items-center bg-gray-200 p-5 px-6 mb-6 w-full group hover:bg-gray-300 transition-colors duration-500 focus:bg-sky-600">
            <FaMicroscope className="h-16 mx-0 w-16 text-sky-600 group-focus:text-white" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 group-focus:text-white">
              Asesoramiento Bioquímico
            </h3>
          </button>
          <button className="text-center flex items-center bg-gray-200 p-5 px-6 mb-6 w-full group hover:bg-gray-300 transition-colors duration-500 focus:bg-sky-600">
            <FaVial className="h-16 mx-0 w-16 text-sky-600 group-focus:text-white" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 group-focus:text-white">
              Atención Bioquímica
            </h3>
          </button>
          <button className="text-center flex items-center bg-gray-200 p-5 px-6 mb-6 w-full group hover:bg-gray-300 transition-colors duration-500 focus:bg-sky-600">
            <FaHome className="h-16 mx-0 w-16 text-sky-600 group-focus:text-white" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 group-focus:text-white">
              Extracciones a Domicilio
            </h3>
          </button>
          <button className="text-center flex items-center bg-gray-200 p-5 px-6 w-full group hover:bg-gray-300 transition-colors duration-500 focus:bg-sky-600">
            <FaChild className="h-16 mx-0 w-16 text-sky-600 group-focus:text-white" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 group-focus:text-white">
              Extracción Pediátrica
            </h3>
          </button>
        </div>
        <CardServices img={}></CardServices>
      </div>
    </div>
  );
};

export default ServicesInfo;
