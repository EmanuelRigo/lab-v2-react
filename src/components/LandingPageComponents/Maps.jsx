"use client";
import React from "react";

const Maps = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/2 h-64"> 
        <iframe
          width="100%"
          height="100%"
       
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Palermo,Buenos+Aires,Argentina"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 h-64">
        <iframe
          width="100%"
          height="100%"
        
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=San+Telmo,Buenos+Aires,Argentina"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
