"use client";
import React, { useState } from "react";

const provinces = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    provincia: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-cyan-200 py-6">
      <div className="container mx-auto px-4 flex justify-end">
        {/* Formulario alineado a la derecha */}
        <div className="bg-white p-6 rounded shadow max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Formulario de Consulta
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="apellido">
                Apellido
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="telefono">
                Teléfono Celular
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="provincia">
                Provincia
              </label>
              <select
                id="provincia"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Seleccione una provincia</option>
                {provinces.map((provincia) => (
                  <option key={provincia} value={provincia}>
                    {provincia}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors duration-200"
              >
                Consultar
              </button>
            </div>
          </form>
          {submitted && (
            <p className="text-green-600 text-center mt-4">
              ¡Formulario enviado con éxito!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
