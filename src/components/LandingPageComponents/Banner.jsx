import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({section, img}) => {
  return (
    <div className="relative w-full h-[300px]">
      <Image
        src={img}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-sky-900 bg-opacity-70 transform skew-x-12 w-full -left-2/4"></div>
      <div className="absolute ps-8 inset-0 flex flex-col items-start justify-center pr-8 z-10">
        <h2 className="text-white text-4xl md:text-6xl lg:text-8xl">Banner</h2>
        <ul className="flex items-center text-white text-lg absolute bottom-4 left-4 space-x-4">
          <li>
            <Link className="hover:text-sky-950 transition-colors duration-200 " href={"/"}>HOME</Link>
          </li>
          <li className="relative">
            <span className="before:content-['|'] before:absolute before:-left-2 before:text-white before:pr-2">
              {section}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;