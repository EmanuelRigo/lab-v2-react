// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselItem from "./CarouselItem";

const items = [
  {
    image: "/image1.jpg",
    title: "Las extracciones se realizan sin turno previo",
    description:
      "¿Tenés dudas o consultas? Escribinos a cualquiera de las sedes.",
  },
  {
    image: "/image2.avif",
    title: "Enviá tu orden por WhatsApp",
    description:
      "Te respondemos a la brevedad con la preparación y los requisitos de tu obra social o presupuesto.",
    caption: "Mandanos una foto de tu orden",
  },
  {
    image: "/image3.jpg",
    title: "Resultados confiables, atención cercana",
    description:
      "Contamos con equipamiento moderno y un equipo bioquímico a tu disposición.",
    caption: "Laboratorio clínico",
  },
];

const navButtonClassName =
  "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-surface/90 text-text-secondary transition-all duration-150 hover:border-border-strong hover:bg-surface hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
      }
      return prevIndex === items.length - 1 ? 0 : prevIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-30 mx-auto h-[75vh] w-full overflow-hidden md:h-[60vh] lg:h-[70vh]">
      <div className="relative h-full w-full">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <CarouselItem
              image={item.image}
              title={item.title}
              description={item.description}
              caption={item.caption}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goToSlide("prev")}
        aria-label="Slide anterior"
        className={`${navButtonClassName} left-4`}
      >
        <FaChevronLeft className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => goToSlide("next")}
        aria-label="Slide siguiente"
        className={`${navButtonClassName} right-4`}
      >
        <FaChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Ir al slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-150 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
