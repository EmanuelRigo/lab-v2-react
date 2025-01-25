import React from 'react'

const MedicalCoverageItem = ({coverage}) => {
  return (
    <div
    className="bg-gray-100 p-3 md:p-6 w-full hover:bg-gray-200 transition-colors duration-200"
  >
    <div className="flex items-center md-3 md:mb-4">
      <div className="text-sky-600 text-2xl md:text-3xl">{coverage.icono}</div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-700 ml-4">
        {coverage.nombre}
      </h3>
    </div>
    <p className="text-gray-600 text-sm">{coverage.descripcion}</p>
  </div>
  )
}

export default MedicalCoverageItem
