"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUserLock } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="bg-sky-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4">
          <div>
            <span className="mr-4">Tel: (123) 4456-7890</span>
            <span>Email: info@example.com</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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
