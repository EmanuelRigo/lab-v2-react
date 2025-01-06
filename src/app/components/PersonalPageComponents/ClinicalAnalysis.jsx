"use client"

import React, { useState } from 'react';

const analyses = [
  'Análisis 1', 'Análisis 2', 'Análisis 3', 'Análisis 4', 'Análisis 5',
  'Análisis 6', 'Análisis 7', 'Análisis 8', 'Análisis 9', 'Análisis 10',
  'Análisis 11', 'Análisis 12', 'Análisis 13', 'Análisis 14', 'Análisis 15',
  'Análisis 16', 'Análisis 17', 'Análisis 18', 'Análisis 19', 'Análisis 20'
];

const ClinicalAnalysis = () => {
  const [selectedAnalyses, setSelectedAnalyses] = useState([]);

  const toggleAnalysis = (analysis) => {
    setSelectedAnalyses((prevSelected) =>
      prevSelected.includes(analysis)
        ? prevSelected.filter((item) => item !== analysis)
        : [...prevSelected, analysis]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Análisis Clínicos</h2>
      <div className="grid grid-cols-2 gap-4">
        {analyses.map((analysis) => (
          <div
            key={analysis}
            className={`p-2 border rounded cursor-pointer ${
              selectedAnalyses.includes(analysis) ? 'bg-green-200' : 'bg-white'
            }`}
            onClick={() => toggleAnalysis(analysis)}
          >
            {analysis}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalAnalysis;