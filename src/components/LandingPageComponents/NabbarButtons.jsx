"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserLock, FaMapMarkerAlt, FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const NabbarButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log("🚀 ~ Navbar ~ pathname:", pathname);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white h-28 mx-auto flex justify-between items-center text-xl">
      {/* Logo */}
      <Link href="/" className="text-sky-600 text-2xl font-bold ml-4">
        LabClinico
      </Link>

      {/* Links */}
      <div className="hidden md:flex h-full space-x-6 items-center">
        <Link
          href="/"
          className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${
            pathname === "/" ? "text-sky-500" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/services"
          className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${
            pathname === "/services" ? "text-sky-500" : ""
          }`}
        >
          Servicios
        </Link>
        <Link
          href="/coverage"
          className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${
            pathname === "/coverage" ? "text-sky-500" : ""
          }`}
        >
          Cobertura
        </Link>
        <Link
          href="/contact"
          className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${
            pathname === "/contact" ? "text-sky-500" : ""
          }`}
        >
          Contacto
        </Link>
        <Link
          href="/envia-tu-orden"
          className="flex justify-center text-white hover:bg-sky-700 w-[230px] hover:text-white transition-colors duration-100 bg-sky-500 h-full ml-auto items-center px-4"
        >
          Envia tu orden
        </Link>
      </div>

      {/* Botón de menú para dispositivos móviles */}
      <div className="md:hidden flex items-center me-4">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-sky-500 transition-colors duration-200"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {isOpen && (
        <div className="absolute top-28 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            href="/"
            className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${
              pathname === "/" ? "text-sky-500" : ""
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${
              pathname === "/services" ? "text-sky-500" : ""
            }`}
            onClick={toggleMenu}
          >
            Servicios
          </Link>
          <Link
            href="/coverage"
            className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${
              pathname === "/coverage" ? "text-sky-500" : ""
            }`}
            onClick={toggleMenu}
          >
            Cobertura
          </Link>
          <Link
            href="/contact"
            className={`text-gray-600 hover:text-sky-500 transition-colors duration-200 ${
              pathname === "/contact" ? "text-sky-500" : ""
            }`}
            onClick={toggleMenu}
          >
            Contacto
          </Link>
          <Link
            href="/envia-tu-orden"
            className="flex justify-center text-white hover:bg-sky-700 w-[230px] hover:text-white transition-colors duration-100 bg-sky-500 h-full items-center px-4"
            onClick={toggleMenu}
          >
            Envia tu orden
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NabbarButtons;