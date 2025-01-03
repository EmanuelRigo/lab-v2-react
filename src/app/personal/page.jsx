import React from 'react';
import Aside from '../components/PersonalPageComponents/Aside';

const Page = () => {
  return (
    <div className="flex h-screen justify-between">
      <Aside></Aside>
      <main className="p-4 bg-blue-300 ">
        <p>Contenido del Main</p>
      </main>
    </div>
  );
};

export default Page;