"use client";
import Link from "next/link";
import {
  FaUserLock,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="bg-white w-full ">
        <div className="bg-sky-600 h-16 text-white py-3 flex items-center w-full">
          <div className="mx-auto flex justify-between space-x-4 w-full">
            <div className="flex px-4">
              <div className="flex items-center">
                <FaMapMarkerAlt />
                <span className="px-1">
                  <p className="border-b border-sky-600 hover:border-white">
                    San Justo
                  </p>
                </span>
              </div>
              <div className="px-3 flex items-center">
                <FaMapMarkerAlt />
                <span className="px-1">
                  <p className="border-b border-sky-600 hover:border-white">
                    Caballito
                  </p>
                </span>
              </div>
            </div>
            <div className="flex items-center pe-4">
              <div className="px-2 mx-1 border border-sky-500 transition-colors duration-300 bg-sky-500 hover:bg-sky-700 py-2">
                <FaFacebook className="text-white" />
              </div>
              <div className="px-2 border border-sky-500 hover:bg-sky-700 bg-sky-500 transition-colors duration-300 py-2">
                <FaInstagram className="text-white transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
