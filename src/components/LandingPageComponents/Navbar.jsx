"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUserLock, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white fixed top-0 w-full z-50 shadow-md ">
        <div className="bg-sky-600 text-white py-3 ">
          <div className="container-fluid mx-auto flex justify-between space-x-4">
            <div className="flex px-4">
              <div className="flex items-center">
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
            <div className="flex items-center pe-4">
              <div className="px-2 mx-1 border border-sky-500 transition-colors duration-300 bg-sky-500 hover:bg-sky-700  py-2">
                <FaFacebook className="text-white " />
              </div>
              <div className="px-2 border border-sky-500 hover:bg-sky-700  bg-sky-500  transition-colors duration-300 py-2">
                <FaInstagram className="text-white transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid h-28 mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-sky-600 text-2xl font-bold ml-4">
            LabClinico
          </Link>

          {/* Links */}
          <div className="hidden md:flex h-full space-x-6  items-center">
            <Link
              href="/"
              className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${pathname === '/' ? 'text-blue-500' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${pathname === '/services' ? 'text-blue-500' : ''}`}
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
              href="/contacto"
              className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
            >
              Contacto
            </Link>
            <Link
              href="/envia-tu-orden"
              className="flex text-white hover:bg-sky-700 hover:text-white transition-colors duration-100 bg-sky-500 h-full ml-auto items-center px-4"
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
      <div className="pt-40"> {/* Ajusta el padding-top según la altura del nav */}
        {/* Aquí va el contenido principal de la página, como el carrusel */}
      </div>
    </>
  );
};

export default Navbar;