// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

const Banner = ({ section, img }) => {
  return (
    <div className="relative w-full h-[240px] sm:h-[290px] md:h-[320px] overflow-hidden border-b border-border shadow-xs">
      <Image
        src={img}
        alt={`${section} Banner`}
        fill
        sizes="(max-width: 1560px) 100vw, 1560px"
        priority
        className="object-cover z-0 filter brightness-[0.75] transition-transform duration-700 hover:scale-105 animate-banner-image"
      />

      {/* Filtro azul base para contraste y coherencia con el carrusel */}
      <div className="absolute inset-0 bg-slate-900/80 md:bg-slate-900/30 z-10" />

      {/* Capa inclinada animada con gradiente azul primario */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/30 z-10 animate-slide-in backdrop-blur-[2px]" />

      {/* Contenido principal */}
      <div className="relative z-20 h-full w-full px-6 sm:px-12 md:px-16 flex flex-col justify-center items-start text-white animate-banner-content">
        <nav aria-label="Breadcrumb" className="mb-3">
          <ul className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-100 bg-primary-600/40 border border-primary-200/30 px-3 py-1.5 rounded-full backdrop-blur-xs shadow-xs">
            <li>
              <Link
                className="hover:text-white transition-colors duration-150"
                href={"/"}
              >
                INICIO
              </Link>
            </li>
            <LuChevronRight
              className="w-3.5 h-3.5 opacity-70"
              aria-hidden="true"
            />
            <li className="text-white font-bold">{section}</li>
          </ul>
        </nav>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
          {section}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
