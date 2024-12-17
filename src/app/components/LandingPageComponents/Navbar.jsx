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
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-teal-600 text-2xl font-bold">
          LabClinico
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-teal-500 transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            href="/contacto"
            className="text-gray-600 hover:text-teal-500 transition-colors duration-200"
          >
            Contacto
          </Link>
          <Link
            href="/quienes-somos"
            className="text-gray-600 hover:text-teal-500 transition-colors duration-200"
          >
            Quiénes somos
          </Link>
          <Link
            href="/ubicacion"
            className="text-gray-600 hover:text-teal-500 transition-colors duration-200"
          >
            Ubicación
          </Link>
          <Link
            href="/acceso-personal"
            className="flex items-center text-gray-600 hover:text-teal-500 transition-colors duration-200"
          >
            <FaUserLock className="w-5 h-5 mr-1" />
            Acceso a Personal
          </Link>
        </div>

        {/* Botón Hamburguesa para móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable (móvil) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 hover:bg-teal-100 transition"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/contacto"
            className="block px-4 py-2 text-gray-600 hover:bg-teal-100 transition"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
          <Link
            href="/quienes-somos"
            className="block px-4 py-2 text-gray-600 hover:bg-teal-100 transition"
            onClick={() => setIsOpen(false)}
          >
            Quiénes somos
          </Link>
          <Link
            href="/ubicacion"
            className="block px-4 py-2 text-gray-600 hover:bg-teal-100 transition"
            onClick={() => setIsOpen(false)}
          >
            Ubicación
          </Link>
          <Link
            href="/acceso-personal"
            className="block px-4 py-2 text-gray-600 hover:bg-teal-100 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaUserLock className="w-5 h-5 mr-1" />
            Acceso a Personal
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
