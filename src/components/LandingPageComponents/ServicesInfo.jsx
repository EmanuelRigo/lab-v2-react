import React from "react";
import { FaMicroscope, FaVial, FaHome, FaChild } from "react-icons/fa";

const ServicesInfo = () => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold text-sky-600 mb-4">Nuestros Servicios</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 p-2">
          <div className="text-center flex items-center  bg-gray-200 p-2 px-4  mb-4">
            <FaMicroscope className="h-16 mx-0 w-16 text-sky-600" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 ">Asesoramiento Bioquímico</h3>
          </div>
          <div className="text-center flex items-center  bg-gray-200 p-2 px-4  mb-4">
            <FaVial className="h-16 mx-0 w-16 text-sky-600" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 ">Atención Bioquímica</h3>
          </div>
          <div className="text-center flex items-center  bg-gray-200 p-2 px-4  mb-4">
            <FaHome className="h-16 mx-0 w-16 text-sky-600" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 ">Extracciones a Domicilio</h3>
          </div>
          <div className="text-center flex items-center  bg-gray-200 p-2 px-4  mb-4">
            <FaChild className="h-16 mx-0 w-16 text-sky-600" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 ">Extracción Pediátrica</h3>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 flex items-center justify-center">
          <img src="/image4.jpg" alt="Lab Work" className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/4 p-2">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Asesoramiento Bioquímico</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Autoimmunidad</li>
            <li>Bacteriología</li>
            <li>Biología molecular</li>
            <li>Citogenética</li>
            <li>Drogas terapéuticas</li>
            <li>Endocrinología</li>
            <li>Hematología</li>
            <li>Hemostasia y trombosis</li>
            <li>Inmunoserología</li>
            <li>Marcadores tumorales</li>
            <li>Metabolismo</li>
            <li>Proteínas</li>
            <li>Química clínica</li>
          </ul>
          <div className="mt-4 flex justify-center">
            <button className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors duration-200">CONTACTANOS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
