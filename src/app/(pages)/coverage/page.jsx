
import Banner from "@/components/LandingPageComponents/Banner";
import Footer from "@/components/LandingPageComponents/Footer";
import Navbar from "@/components/LandingPageComponents/Navbar";
import SocialFooter from "@/components/LandingPageComponents/SocialFooter";

import MedicalCoverageList from "@/components/LandingPageComponents/CoverageComponents/MedicalCoverageList";
import React from "react";

export const metadata = {
  title: "Coberturas - Laboratorio Clinico",
  description: "laboratorio clinico - pagina principal",
  keywords: "laboratorio clinico, examenes de laboratorio",
};

const MedicalCoverageArgentina = () => {
  return (
    <>
      <Banner img={"/image4.jpg"} section={"COVERTURA"} />
      <MedicalCoverageList />
    </>
  );
};

export default MedicalCoverageArgentina;