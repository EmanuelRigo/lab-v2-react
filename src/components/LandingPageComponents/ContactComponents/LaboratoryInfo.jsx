// components/LaboratorioInfo.js
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaClock } from "react-icons/fa";

const LaboratoryInfo = ({
  name,
  address,
  phone,
  whatsapp,
  adminHours,
  extractionHours,
}) => {
  return (
    <div className=" w-5/6 md:w-1/2 overflow-hidden my-5 bg-gray-100">
      <div className="p-6">
        <h2 className="font-bold text-2xl mb-3 text-sky-600">{name}</h2>
        <p className="text-gray-700 text-base flex items-center">
          <FaMapMarkerAlt className="mr-2 text-sky-600" />
          <strong>Dirección:</strong> {address}
        </p>
        <p className="text-gray-700 text-base flex items-center">
          <FaPhone className="mr-2 text-sky-600" />
          <strong>Teléfono:</strong> {phone}
        </p>
        <p className="text-gray-700 text-base flex items-center">
          <FaWhatsapp className="mr-2 text-sky-600" />
          <strong>WhatsApp Directo:</strong>{" "}
          <a href={`https://wa.me/${whatsapp}`} className="text-blue-600">
            +{whatsapp}
          </a>
        </p>

        <div className="mt-4">
          <div className="flex items-center">
            <FaClock className="mr-2 text-sky-600" />
            <strong>Horario administrativo:</strong>
          </div>
          <p className="text-gray-700 text-base">{adminHours}</p>

          <div className="flex items-center mt-2">
            <FaClock className="mr-2 text-sky-600" />
            <strong>Horario de extracciones:</strong>
          </div>
          <p className="text-gray-700 text-base">{extractionHours}</p>
        </div>
      </div>
    </div>
  );
};

export default LaboratoryInfo;
