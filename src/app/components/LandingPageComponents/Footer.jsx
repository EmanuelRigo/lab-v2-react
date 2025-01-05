"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-sky-600  py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-100">Mi Sitio Web</h2>
            <p className="text-gray-100">
              © 2023 Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-sky-900 transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-sky-900 transition-colors duration-200"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white hover:text-sky-900 transition-colors duration-200"
            >
              Instagram
            </a>
            <Link
              className="text-white hover:text-sky-900 transition-colors duration-200"
              href={"/personal"}
            >
              Acceso para personal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
