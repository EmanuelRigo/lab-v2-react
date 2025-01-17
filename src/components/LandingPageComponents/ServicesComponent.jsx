"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFlask, FaNotesMedical, FaHome, FaChild } from "react-icons/fa";
import {
  LuFlaskConical,
  LuHouse,
  LuClipboardList,
  LuCircleUser,
} from "react-icons/lu";

const ServicesComponent = () => {
  const params = usePathname();
  console.log("🚀 ~ ServicesComponent ~ params:", params);

  const hiddenClass = params === "/services" ? "hidden" : "";

  return (
    <div className="py-16 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <LuFlaskConical className="h-32 w-32 my-8 text-sky-600" />
          </div>
          <h3 className={`text-xl font-semibold text-gray-700 ${hiddenClass}`}>
            ASESORAMIENTO BIOQUÍMICO
          </h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <LuClipboardList className="h-32 w-32 my-8 text-sky-600" />
          </div>
          <h3 className={`text-xl font-semibold text-gray-700 ${hiddenClass}`}>
            ATENCIÓN BIOQUÍMICA
          </h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <LuHouse className="h-32 w-32 my-8 text-sky-600" />
          </div>
          <h3 className={`text-xl font-semibold text-gray-700 ${hiddenClass}`}>
            EXTRACCIONES A DOMICILIO
          </h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <LuCircleUser className="h-32 w-32 my-8 text-sky-600" />
          </div>
          <h3 className={`text-xl font-semibold text-gray-700 ${hiddenClass}`}>
            EXTRACCIÓN PEDIÁTRICA
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
