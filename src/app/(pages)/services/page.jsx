import React from 'react';
import Navbar from '@/components/LandingPageComponents/Navbar';
import ServicesComponent from '@/components/LandingPageComponents/ServicesComponent';
import SocialFooter from '@/components/LandingPageComponents/SocialFooter';
import Footer from '@/components/LandingPageComponents/Footer';
import ServicesInfo from '@/components/LandingPageComponents/ServicesInfo';

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen w-full items-center'>
      <Navbar />

      <div className='container'>
      <ServicesComponent />
      <ServicesInfo></ServicesInfo>
      </div>
      <SocialFooter />
      <Footer />
    </div>
  );
}

export default Page;