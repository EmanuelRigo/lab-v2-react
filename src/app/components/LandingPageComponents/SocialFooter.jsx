"use client";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const SocialFooter = () => {
  return (
    <footer className=" text-teal-600 py-8 relative">
      <Image
        src="/image4.jpg"
        alt="Fondo"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-55"
      />
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Seguinos en las Redes!</h2>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="https://www.facebook.com/labClinico"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 flex justify-start"
          >
            <FaFacebook size={48} />
          </a>
          <a
            href="https://www.instagram.com/labClinico"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 flex justify-end"
          >
            <FaInstagram size={48} />
          </a>
        </div>
        <p className="text-lg">@labClinico</p>
      </div>
    </footer>
  );
};

export default SocialFooter;
