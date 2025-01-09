import React from "react";
import { FaFlask, FaNotesMedical, FaHome, FaChild } from 'react-icons/fa';

const ServicesComponent = () => {
  return (
    <div className="py-16 rounded-lg">
      <h2 className="text-2xl font-bold text-sky-600 mb-4 pb-5">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <FaFlask className="h-32 w-32 my-8 text-sky-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">ASESORAMIENTO BIOQUÍMICO</h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <FaNotesMedical className="h-32 w-32 my-8 text-sky-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">ATENCIÓN BIOQUÍMICA</h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <FaHome className="h-32 w-32 my-8 text-sky-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">EXTRACCIONES A DOMICILIO</h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <FaChild className="h-32 w-32 my-8 text-sky-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">EXTRACCIÓN PEDIÁTRICA</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;