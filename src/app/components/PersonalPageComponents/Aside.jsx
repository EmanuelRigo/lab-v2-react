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
    <aside className="p-4 bg-sky-700 text-white h-full transition-all duration-300 hover:w-40 w-16 group flex flex-col justify-between">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <FaUser className="text-4xl p-1" />
          <p className="hidden group-hover:block transition-all duration-300">
            Pacientes
          </p>
        </div>
        <div className="flex items-center space-x-2 group">
          <FaClinicMedical className="text-4xl p-1" />
          <p className="hidden group-hover:block transition-all duration-300">
            Sucursales
          </p>
        </div>
        <div className="flex items-center space-x-2 group">
          <FaVials className="text-4xl p-1" />
          <p className="hidden group-hover:block transition-all duration-300">
            Análisis
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2 group">
          <FaArrowLeft className="text-4xl p-1" />
          <p className="hidden group-hover:block transition-all duration-300">
            Volver
          </p>
        </div>
        <div className="flex items-center space-x-2 group">
          <FaSignOutAlt className="text-4xl p-1" />
          <p className="hidden group-hover:block transition-all duration-300">
            Logout
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;