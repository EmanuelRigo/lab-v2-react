import React from 'react';
import Navbar from '@/components/LandingPageComponents/Navbar';
import ContactForm from '@/components/LandingPageComponents/ContactForm';
import SocialFooter from '@/components/LandingPageComponents/SocialFooter';
import Footer from '@/components/LandingPageComponents/Footer';

const Page = () => {
  return (
    <div className='flex flex-col min-h-screen w-full items-center'>
      <Navbar />
      <div className='container'>
        <ContactForm />
      </div>
      <SocialFooter />
      <Footer />
    </div>
  );
}

export default Page;