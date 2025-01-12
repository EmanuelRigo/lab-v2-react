import React from "react";

const CardServices = () => {
  return (

   <>
      <div className="w-full md:w-2/6 px-6 flex min-h-[350px] items-center justify-center">
        <img
          src="/image4.jpg"
          alt="Lab Work"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-full md:w-2/6 flex flex-col justify-between">
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
          </ul>
        </div>
        <div className="mt-4 flex justify-start">
          <button className="p-6 py-5 bg-sky-600 text-white hover:bg-sky-700 transition-colors duration-200">
            CONTACTANOS
          </button>
        </div>
      </div>
      </>
  );
};

export default CardServices;
