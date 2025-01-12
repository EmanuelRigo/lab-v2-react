"use client"
import React, { useState } from "react";
import { FaMicroscope, FaVial, FaHome, FaChild } from "react-icons/fa";
import CardServices from "./CardServices";

const data = [
  {
    img: "/image1.jpg",
    title: "Asesoramiento Bioquímico",
    ul: [
      "Autoinmunidad",
      "Bacteriología",
      "Biología molecular",
      "Citogenética",
      "Drogas terapéuticas",
      "Endocrinología",
      "Hematología",
      "Hemostasia y trombosis",
      "Inmunoserología",
      "Marcadores tumorales",
      "Metabolismo",
      "Proteínas",
      "Química clínica",
    ],
    description:
      "Brindamos asesoramiento bioquímico para los siguientes estudios:",
  },
  {
    img: "/image2.avif",
    title: "Atención Bioquímica",
    ul: ["Benefit 1", "Benefit 2", "Benefit 3"],
    description: "This is the description for the second item.",
  },
  {
    img: "/image3.jpg",
    title: "Extracciones a Domicilio",
    ul: ["Point 1", "Point 2", "Point 3"],
    description: "This is the description for the third item.",
  },
  {
    img: "/image4.jpg",
    title: "Extracción Pediátrica",
    ul: ["Advantage 1", "Advantage 2", "Advantage 3"],
    description: "This is the description for the fourth item.",
  },
];

const ServicesInfo = () => {
  const [selectedService, setSelectedService] = useState(data[0]); // Estado para el servicio seleccionado

  return (
    <div className="bg-white p-6 px-9">
      <h2 className="text-2xl font-bold text-sky-600 mb-4">
        Nuestros Servicios
      </h2>
      <div className="flex w-full flex-wrap">
        <div className="w-full md:w-2/6">
          {data.map((service, index) => (
            <button
              key={index}
              className="text-center flex items-center bg-gray-200 p-5 px-6 mb-6 w-full group hover:bg-gray-300 transition-colors duration-500 focus:bg-sky-600"
              onClick={() => setSelectedService(service)} // Actualiza el servicio seleccionado al hacer clic
            >
              {index === 0 && <FaMicroscope className="h-16 mx-0 w-16 text-sky-600 group-focus:text-white" />}
              {index === 1 && <FaVial className="h-16 mx-0 w-16 text-sky-600 group-focus:text-white" />}
              {index === 2 && <FaHome className="h-16 mx-0 w-16 text-sky-600 group-focus:text-white" />}
              {index === 3 && <FaChild className="h-16 mx-0 w-16 text-sky-600 group-focus:text-white" />}
              <h3 className="text-xl font-semibold m-0 ms-4 text-gray-700 group-focus:text-white">
                {service.title}
              </h3>
            </button>
          ))}
        </div>
        <CardServices service={selectedService} /> {/* Pasar el servicio seleccionado a CardServices */}
      </div>

    </div>
  );
};

export default ServicesInfo;