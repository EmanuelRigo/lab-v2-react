"use client";

import React from "react";
import Aside from "@/components/PersonalPageComponents/Aside";
import MainPersonal from "@/components/PersonalPageComponents/Main";
import { Main } from "next/document";

const layout = ({ children }) => {
  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/image4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-4/6 flex items-center justify-start">
        <main className="flex h-full w-3/5">
          <div className="flex flex-col items-center bg-white w-full ">
            <MainPersonal />
          </div>
        </main>
        <Aside />   
       
      </div>
    {children}
    </div>
  );
};

export default layout;