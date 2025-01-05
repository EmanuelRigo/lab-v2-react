"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUserLock, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="bg-sky-600 text-white py-3">
        <div className="container-fluid mx-auto px-4 flex justify-between space-x-4">
          <div className="flex px-8">
            <div className="pl-3 flex items-center ">
              <FaMapMarkerAlt />
              <span className="px-1"><p className="border-b border-sky-600 hover:border-white">Palermo</p> </span>
            </div>
            <div className="px-3 flex items-center ">
              <FaMapMarkerAlt />
              <span className="px-1 "> <p className="border-b border-sky-600 hover:border-white">San telmo</p></span>
            </div>
          </div>
          <div className="flex items-center px-8">
            <div className="px-2 mx-1 border border-sky-600 bg-sky-500 py-2"><FaFacebook className="text-white hover:text-black"/></div>
       
            <div className="px-2 border border-sky-600 bg-sky-500 py-2"><FaInstagram className="text-white hover:text-black" /></div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-auto px-4 py-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-sky-600 text-2xl font-bold">
          LabClinico
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
          >
            Inicio de la pagina
          </Link>
          <Link
            href="/contacto"
            className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
          >
            Donde estamos
          </Link>
          <Link
            href="/quienes-somos"
            className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
          >
            Quiénes Somos
          </Link>
          <Link
            href="/quienes-somos"
            className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
          >
            Novedades
          </Link>
        </div>

        {/* Botón de menú para dispositivos móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
          >
            <FaUserLock />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;