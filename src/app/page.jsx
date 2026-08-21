"use client";

import React from "react";
// import Navbar from "@/components/LandingPageComponents/Navbar";
// import Footer from "@/components/LandingPageComponents/Footer";
// import SocialFooter from "@/components/LandingPageComponents/SocialFooter";
// import Main from "@/components/LandingPageComponents/Main";

import Navbar from "../components/LandingPageComponents/Navbar";
import Footer from "../components/LandingPageComponents/Footer";
import SocialFooter from "../components/LandingPageComponents/SocialFooter";
import Maps from "../components/LandingPageComponents/Maps";
import Main from "../components/LandingPageComponents/Main";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  return <Main></Main>;
};

export default Page;
