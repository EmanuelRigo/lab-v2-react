// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
"use client";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/labClinico",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/labClinico",
    icon: FaInstagram,
  },
];

const SocialFooter = () => {
  return (
    <footer className="relative w-full overflow-hidden border-y border-border bg-surface">
      <Image
        src="/image4.jpg"
        alt="Fondo"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      {/* Overlay para mejorar contraste del texto sobre la imagen */}
      <div className="absolute inset-0 bg-surface/85" />

      <div className="container relative z-10 mx-auto px-4 py-12 text-center">
        <span className="inline-flex items-center rounded-md border border-primary-200/60 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
          Redes sociales
        </span>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
          Seguinos en las Redes
        </h2>

        <p className="mt-2 text-sm text-text-secondary md:text-base">
          Enterate de novedades, resultados y horarios de atención.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="group inline-flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface text-primary-600 transition-all duration-150 hover:border-border-strong hover:bg-primary-50 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30"
            >
              <Icon className="h-7 w-7" />
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm font-medium text-text-secondary">
          <span className="text-text-muted">@</span>labClinico
        </p>
      </div>
    </footer>
  );
};

export default SocialFooter;
