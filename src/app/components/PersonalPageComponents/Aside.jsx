import React from "react";
import {
  FaUser,
  FaClinicMedical,
  FaVials,
  FaArrowLeft,
  FaSignOutAlt,
} from "react-icons/fa";

const Aside = () => {
  return (
    <aside className="p-4 ps-2 bg-sky-700 text-white h-full transition-all duration-300 w-14 hover:w-40 flex flex-col items-start justify-between overflow-hidden">
      <div className="flex flex-col space-y-4 w-40">
        <div className="flex items-center my-1 space-x-2 hover:outline hover:outline-2 hover:bg-white p-2 w-full rounded group">
          <FaUser className="text-2xl me-4 group-hover:text-sky-700" />
          <p className="text-white transition-all duration-300 group-hover:text-sky-700">Pacientes</p>
        </div>
        <div className="flex items-center my-1 space-x-2 hover:outline hover:outline-2 hover:bg-white p-2 w-full rounded group">
          <FaClinicMedical className="text-2xl me-4 group-hover:text-sky-700" />
          <p className="text-white transition-all duration-300 group-hover:text-sky-700">Sucursales</p>
        </div>
        <div className="flex items-center my-1 space-x-2 hover:outline hover:outline-2 hover:bg-white p-2 w-full rounded group">
          <FaVials className="text-2xl me-4 group-hover:text-sky-700" />
          <p className="text-white transition-all duration-300 group-hover:text-sky-700">Análisis</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-40">
        <div className="flex items-center my-1 space-x-2 hover:outline hover:outline-2 hover:bg-white p-2 w-full rounded group">
          <FaArrowLeft className="text-2xl me-4 group-hover:text-sky-700" />
          <p className="text-white transition-all duration-300 group-hover:text-sky-700">Volver</p>
        </div>
        <div className="flex items-center my-1 space-x-2 hover:outline hover:outline-2 hover:bg-white p-2 w-full rounded group">
          <FaSignOutAlt className="text-2xl me-4 group-hover:text-sky-700" />
          <p className="text-white transition-all duration-300 group-hover:text-sky-700">Logout</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;