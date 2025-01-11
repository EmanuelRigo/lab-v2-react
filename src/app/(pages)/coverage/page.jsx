"use client";
import Banner from "@/components/LandingPageComponents/Banner";
import Footer from "@/components/LandingPageComponents/Footer";
import Navbar from "@/components/LandingPageComponents/Navbar";
import SocialFooter from "@/components/LandingPageComponents/SocialFooter";
import React, { useState } from "react";
import { FaHospital, FaStethoscope, FaHeartbeat } from "react-icons/fa";

const MedicalCoverageArgentina = () => {
  const coberturas = [
    {
      nombre: "OSDE",
      icono: <FaHospital />,
      descripcion: "Una de las principales empresas de medicina prepaga en Argentina.",
    },
    {
      nombre: "Galeno",
      icono: <FaStethoscope />,
      descripcion: "Con una amplia red de sanatorios y alta satisfacción.",
    },
    {
      nombre: "Medicus",
      icono: <FaHeartbeat />,
      descripcion: "Con una trayectoria larga y confianza a nivel nacional.",
    },
    {
      nombre: "Federada",
      icono: <FaHospital />,
      descripcion: "Amplia cobertura en todo el país.",
    },
    {
      nombre: "Sancor Salud",
      icono: <FaHeartbeat />,
      descripcion: "Cobertura nacional y alta satisfacción.",
    },
    {
      nombre: "Avalian",
      icono: <FaStethoscope />,
      descripcion: "Nueva identidad de AcaSalud, con planes variados.",
    },
    {
      nombre: "Premedic",
      icono: <FaHospital />,
      descripcion: "Planes de salud económicos y de alta satisfacción.",
    },
    {
      nombre: "Wiri Salud",
      icono: <FaHeartbeat />,
      descripcion: "Oferta digital novedosa sin cuotas mensuales.",
    },
  ];

  const [search, setSearch] = useState("");

  const sortedCoberturas = coberturas.sort((a, b) => a.nombre.localeCompare(b.nombre));

  const filteredCoberturas = sortedCoberturas.filter((cobertura) =>
    cobertura.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Banner img={"/image4.jpg"} section={"COVERTURA"}/>
      <div className="flex-grow w-full flex flex-col items-center mt-10 container">
        <h1 className="text-3xl font-bold text-sky-600 mb-6 text-center">
          Coberturas Médicas en Argentina
        </h1>
        <input
          type="text"
          placeholder="Buscar cobertura..."
          className="w-full mb-6 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoberturas.map((cobertura, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 hover:bg-gray-200 transition-colors duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="text-sky-600 text-3xl">{cobertura.icono}</div>
                <h3 className="text-xl font-semibold text-gray-700 ml-4">
                  {cobertura.nombre}
                </h3>
              </div>
              <p className="text-gray-600">{cobertura.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MedicalCoverageArgentina;