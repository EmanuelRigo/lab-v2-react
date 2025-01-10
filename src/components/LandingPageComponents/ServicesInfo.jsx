import React from "react";
import { FaMicroscope, FaVial, FaHome, FaChild } from "react-icons/fa";

const ServicesInfo = () => {
  return (
    <div className="bg-white p-6 px-9">
      <h2 className="text-2xl font-bold text-sky-600 mb-4">
        Nuestros Servicios
      </h2>
      <div className="flex w-full flex-wrap">
        <div className="w-full md:w-2/6">
          <div className="text-center flex items-center bg-gray-200 p-5 px-6 mb-6">
            <FaMicroscope className="h-16 mx-0 w-16 text-sky-600" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700">
              Asesoramiento Bioquímico
            </h3>
          </div>
          <div className="text-center flex items-center bg-gray-200 p-5 px-6 mb-6">
            <FaVial className="h-16 mx-0 w-16 text-sky-600" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700">
              Atención Bioquímica
            </h3>
          </div>
          <div className="text-center flex items-center bg-gray-200 p-5 px-6 mb-6">
            <FaHome className="h-16 mx-0 w-16 text-sky-600" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700">
              Extracciones a Domicilio
            </h3>
          </div>
          <div className="text-center flex items-center bg-gray-200 p-5 px-6">
            <FaChild className="h-16 mx-0 w-16 text-sky-600" />
            <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700">
              Extracción Pediátrica
            </h3>
          </div>
        </div>
        <div className="w-full md:w-2/6 px-6 flex min-h-[350px] items-center justify-center">
          <img
            src="/image4.jpg"
            alt="Lab Work"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="w-full  md:w-2/6 bg-red flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 m-0 mb-2">
            Asesoramiento Bioquímico
          </h3>
          <ul className="list-disc list-inside text-gray-600 ps-4">
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
          </ul></div>
          <div className="mt-4 flex justify-start ">
            <button className="p-6 py-5 bg-sky-600 text-white  hover:bg-sky-700 transition-colors duration-200">
              CONTACTANOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
