import React from "react";
import Navbar from "@/components/LandingPageComponents/Navbar";
import ContactForm from "@/components/LandingPageComponents/ContactComponents/ContactForm";
import SocialFooter from "@/components/LandingPageComponents/SocialFooter";
import Footer from "@/components/LandingPageComponents/Footer";
import Banner from "@/components/LandingPageComponents/Banner";
import LaboratoryInfo from "@/components/LandingPageComponents/ContactComponents/LaboratoryInfo";


export const metadata = {
  title: "Contactos - Laboratorio Clinico",
  description: "laboratorio clinico - pagina principal",
  keywords: "laboratorio clinico, examenes de laboratorio",
};

const labData = [
  {
    name: "Sede Villa Luzuriaga",
    address: "Av. Pte. Juan D. Perón 1075",
    phone: "11 4460 0347",
    whatsapp: "11 6185 3327",
    adminHours: "Lunes a Viernes de 7:30 a 15:30hs. Sábados de 7:30 a 12:00hs.",
    extractionHours: "Lunes a Sábados de 7:30 a 11:00hs.",
  },
  {
    name: "Sede Lomas del Mirador",
    address: "Av. Juan Manuel de Rosas 557",
    phone: "11 4699 3383",
    whatsapp: "11 3858 6458",
    adminHours: "Lunes a Viernes de 8:30 a 12:00hs. Sábados de 8:30 a 10:00hs.",
    extractionHours: "Lunes a Sábados de 8:30 a 10:00hs.",
  },
];

const Page = () => {
  return (
    <div className="flex-grow w-full flex flex-col items-center ">
      <Banner img={"/image2.avif"} section={"CONTACTO"} />
      <div className="container flex justify-center gap-7 items-center ">
        {labData.map((lab, index) => (
          <LaboratoryInfo key={index} {...lab} />
        ))}
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;
