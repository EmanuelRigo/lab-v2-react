import React from 'react';
import Aside from '../components/PersonalPageComponents/Aside';
import FormPatient from '../components/PersonalPageComponents/FormPatient';

const Page = () => {
  return (
    <div className="flex h-screen justify-between">
      <Aside></Aside>
      <main className="p-4 bg-blue-300 ">
        <FormPatient></FormPatient>
      </main>
    </div>
  );
};

export default Page;