import React from 'react';
import { FaUser, FaClinicMedical, FaVials, FaArrowLeft, FaSignOutAlt } from 'react-icons/fa';

const Aside = () => {
  return (
    <aside className="p-4 bg-blue-300 text-white h-full transition-all duration-300 hover:w-40 w-16">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2 group">
          <FaUser className="text-2xl p-1 group-hover:text-gray-400 transition-colors duration-300" />
          <p className="hidden group-hover:block transition-all duration-300">Pacientes</p>
        </div>
        <div className="flex items-center space-x-2 group">
          <FaClinicMedical className="text-2xl p-1 group-hover:text-gray-400 transition-colors duration-300" />
          <p className="hidden group-hover:block transition-all duration-300">Sucursales</p>
        </div>
        <div className="flex items-center space-x-2 group">
          <FaVials className="text-2xl p-1 group-hover:text-gray-400 transition-colors duration-300" />
          <p className="hidden group-hover:block transition-all duration-300">Análisis</p>
        </div>
        <div className="flex items-center space-x-2 group">
          <FaArrowLeft className="text-2xl p-1 group-hover:text-gray-400 transition-colors duration-300" />
          <p className="hidden group-hover:block transition-all duration-300">Volver</p>
        </div>
        <div className="flex items-center space-x-2 group">
          <FaSignOutAlt className="text-2xl p-1 group-hover:text-gray-400 transition-colors duration-300" />
          <p className="hidden group-hover:block transition-all duration-300">Logout</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;