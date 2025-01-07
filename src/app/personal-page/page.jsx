"use client";

import React, { useEffect, useState } from "react";
import Aside from "../components/PersonalPageComponents/Aside";
import FormPatient from "../components/PersonalPageComponents/FormPatient";
import ClinicalAnalysis from "../components/PersonalPageComponents/ClinicalAnalysis";
import Results from "../components/PersonalPageComponents/Results";
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  const [showFormPatient, setShowFormPatient] = useState(true);

  useEffect(() => {
    console.log("Current section:", section);
    if (section === 'clinical-analysis' || section === 'result') {
      setShowFormPatient(false);
    } else {
      setShowFormPatient(true);
    }
  }, [section]);

  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: "url('/image4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex-grow flex items-center justify-start">
        <main className="flex h-full w-2/5">
          <div className="flex flex-col items-center bg-white w-full p-4 shadow-md rounded">
            {showFormPatient ? (
              <FormPatient />
            ) : section === 'clinical-analysis' ? (
              <ClinicalAnalysis />
            ) : section === 'clinical-result' ? (
              <Results />
            ) : null}
          </div>
        </main>
        <Aside />
      </div>
    </div>
  );
};

export default Page;