"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "./components/LandingPageComponents/Navbar";
import SocialFooter from "./components/LandingPageComponents/SocialFooter";
import Footer from "./components/LandingPageComponents/Footer";
import Main from "./components/LandingPageComponents/Main";
import Services from "./components/LandingPageComponents/Services";

const Page = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  console.log(page);

  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="w-full">
        <Navbar />
      </header>
      {page === null ? (
        <Main />
      ) : page === "services" ? (
        <Services />
      ) : (
        <div>No se encontró la página solicitada.</div>
      )}
      <footer className="w-full">
        <SocialFooter />
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
