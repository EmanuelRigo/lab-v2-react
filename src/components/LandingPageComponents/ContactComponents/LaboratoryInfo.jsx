// components/LaboratorioInfo.js
import React from 'react';

const LaboratoryInfo = ({ name, address, phone, whatsapp, adminHours, extractionHours }) => {
  return (
    <div className="max-w-md overflow-hidden my-5">
      <div className="p-6">
        <h2 className="font-bold text-2xl mb-3">{name}</h2>
        <p className="text-gray-700 text-base">
          <strong>Dirección:</strong> {address}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Teléfono:</strong> {phone}
        </p>
        <p className="text-gray-700 text-base">
          <strong>WhatsApp Directo:</strong> <a href={`https://wa.me/${whatsapp}`} className="text-blue-600">+{whatsapp}</a>
        </p>
        <p className="text-gray-700 text-base">
          <strong>Horario administrativo:</strong> {adminHours}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Horario de extracciones:</strong> {extractionHours}
        </p>
      </div>
    </div>
  );
};

export default LaboratoryInfo;

