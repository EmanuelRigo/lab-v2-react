import React from "react";
import Aside from "../components/PersonalPageComponents/Aside";
import FormPatient from "../components/PersonalPageComponents/FormPatient";
import ClinicalAnalysis from "../components/PersonalPageComponents/ClinicalAnalysis";

const Page = () => {
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
        <main className="relative flex z-10 bg-opacity-70 shadow-md h-full">
          <div className="flex items-center bg-white">
            {/* <FormPatient /> */}
            <ClinicalAnalysis></ClinicalAnalysis>
          </div>

          <Aside />
        </main>
      </div>
    </div>
  );
};

export default Page;
