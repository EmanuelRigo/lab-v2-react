import React from "react";
import Navbar from "./components/LandingPageComponents/Navbar";
import ContactForm from "./components/LandingPageComponents/ContactForm";
import Carousel from "./components/LandingPageComponents/Carousel";
import Footer from "./components/LandingPageComponents/Footer";
import SocialFooter from "./components/LandingPageComponents/SocialFooter";
import ContactDetails from "./components/LandingPageComponents/ContactDetails";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex-grow w-full flex flex-col items-center">
        <Carousel />
        <div className="container flex justify-center">
          <ContactDetails></ContactDetails>
        </div>
      </main>
      <footer className="w-full">
        <SocialFooter></SocialFooter>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
