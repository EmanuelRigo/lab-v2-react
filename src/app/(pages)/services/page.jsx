import React from 'react';
import Navbar from '@/components/LandingPageComponents/Navbar';
import ServicesComponent from '@/components/LandingPageComponents/ServicesComponent';
import SocialFooter from '@/components/LandingPageComponents/SocialFooter';
import Footer from '@/components/LandingPageComponents/Footer';

const Page = () => {
  return (
    <div>
      <Navbar />
      <ServicesComponent />
      <SocialFooter />
      <Footer />
    </div>
  );
}

export default Page;