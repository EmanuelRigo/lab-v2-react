import React from "react";
import Navbar from "@/components/LandingPageComponents/Navbar";
import ServicesComponent from "@/components/LandingPageComponents/ServicesComponent";
import SocialFooter from "@/components/LandingPageComponents/SocialFooter";
import Footer from "@/components/LandingPageComponents/Footer";
import ServicesInfo from "@/components/LandingPageComponents/ServicesComponents/ServicesInfo";
import Banner from "@/components/LandingPageComponents/Banner";

export const metadata = {
  title: "Servicios - Laboratorio Clinico",
  description: "laboratorio clinico - pagina principal",
  keywords: "laboratorio clinico, examenes de laboratorio",
};

const Page = () => {
  return (
    <div className="flex-grow w-full flex flex-col items-center">
      <Banner img={"/image3.jpg"} section={"SERVICIOS"}></Banner>
      <div className="container">
        <ServicesInfo></ServicesInfo>
        <ServicesComponent />
      </div>
    </div>
  );
};

export default Page;
