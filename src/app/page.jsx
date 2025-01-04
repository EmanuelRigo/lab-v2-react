import React from "react";
import Navbar from "./components/LandingPageComponents/Navbar";
import ContactForm from "./components/LandingPageComponents/ContactForm";
import Carousel from "./components/LandingPageComponents/Carousel";
import Footer from "./components/LandingPageComponents/Footer";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex-grow">
        <div className="">
          {/* <ContactForm /> */}
          <Carousel />
        </div>
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;