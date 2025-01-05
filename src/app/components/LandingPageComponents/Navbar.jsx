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
    <>
      <nav className="bg-white fixed top-0 w-full z-50 shadow-md ">
        <div className="bg-sky-600 text-white py-1 ">
          <div className="container-fluid mx-auto px-4 flex justify-between space-x-4">
            <div className="flex px-8">
              <div className="pl-3 flex items-center">
                <FaMapMarkerAlt />
                <span className="px-1">
                  <p className="border-b border-sky-600 hover:border-white">Palermo</p>
                </span>
              </div>
              <div className="px-3 flex items-center">
                <FaMapMarkerAlt />
                <span className="px-1">
                  <p className="border-b border-sky-600 hover:border-white">San telmo</p>
                </span>
              </div>
            </div>
            <div className="flex items-center px-8">
              <div className="px-2 mx-1 border border-sky-600 bg-sky-500 py-2">
                <FaFacebook className="text-white hover:text-black transition-colors duration-300" />
              </div>
              <div className="px-2 border border-sky-600 bg-sky-500 py-2">
                <FaInstagram className="text-white hover:text-black transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mx-auto pl-4 flex justify-between items-center">
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
              Home
            </Link>
            <Link
              href="/contacto"
              className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              Servicios
            </Link>
            <Link
              href="/quienes-somos"
              className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              Cobertura
            </Link>
            <Link
              href="/quienes-somos"
              className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              Contacto
            </Link>
            <Link
              href="/quienes-somos"
              className="flex text-white hover:bg-sky-700 hover:text-white transition-colors duration-100 bg-sky-500 h-[80px] ml-auto items-center px-4"
            >
              Envia tu orden
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
      <div className="pt-20"> {/* Ajusta el padding-top según la altura del nav */}
        {/* Aquí va el contenido principal de la página, como el carrusel */}
      </div>
    </>
  );
};

export default Navbar;