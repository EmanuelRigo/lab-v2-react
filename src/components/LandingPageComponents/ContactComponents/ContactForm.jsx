"use client";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

const OrderForm = () => {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [sede, setSede] = useState("");
  const [consulta, setConsulta] = useState("");
  const [adjunto, setAdjunto] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto p-6 bg-white md:w-5/6">
      <h1 className="text-2xl font-bold mb-4 text-sky-600">Enviar Orden</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre y Apellido</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-sky-600"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="w-full flex">
          <div className="mb-4 w-2/6 pe-7">
            <label className="block text-gray-700">D.N.I.</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-sky-600"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>
          <div className="mb-4 w-4/6">
            <label className="block text-gray-700">
              Teléfono con código de área y número
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-sky-600"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-sky-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sede</label>
          <select
            className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-sky-600"
            value={sede}
            onChange={(e) => setSede(e.target.value)}
          >
            <option value="">Seleccionar Sede</option>
            <option value="Villa Luzuriaga">San Justo</option>
            <option value="Lomas del Mirador">Caballito</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="mb-4 w-10/12 pe-7">
            <label className="block text-gray-700">
              Describa aquí su consulta
            </label>
            <textarea
              className="w-full p-2 border resize-none border-gray-300 h-20 focus:outline-none focus:ring-2 focus:ring-sky-600 "
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4 w-2/12 flex flex-col items-center ">
            <label className="block text-gray-700">Adjuntar Orden</label>
            <div className="relative w-full border border-gray-300 hover:border-sky-700 h-20 box-border p-2 flex items-center justify-center">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => setAdjunto(e.target.files[0])}
              />
              <div className="text-sky-600 cursor-pointer hover:text-sky-700 transition-colors duration-200 flex items-center justify-center h-full">
                <FaUpload size={40} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensaje</label>
          <textarea
            className="w-full p-2 border resize-none border-gray-300  focus:outline-none focus:ring-2 focus:ring-sky-600"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-sky-600  text-white p-2  hover:bg-sky-700 transition-colors duration-200"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
