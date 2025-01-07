"use client";

import React from "react";
import Navbar from "@/components/LandingPageComponents/Navbar";
import Footer from "@/components/LandingPageComponents/Footer";
import SocialFooter from "@/components/LandingPageComponents/SocialFooter";
import Main from "@/components/LandingPageComponents/Main";
import Services from "@/components/LandingPageComponents/Services";
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();
  console.log("🚀 ~ Page ~  pathname :",  pathname )
  

  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="w-full">
        <Navbar />
      </header>
      {pathname === '/services' ? <Services /> : <Main />}
      <footer className="w-full">
        <SocialFooter />
        <Footer />
      </footer>
    </div>
  );
};

export default Page;