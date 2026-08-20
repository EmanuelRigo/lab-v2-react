// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
"use client";
import React from "react";
import Link from "next/link";

const navLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-primary-500 text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 border-b border-primary-foreground/15 pb-6 md:flex-row md:justify-between md:gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold tracking-tight">
              Laboratorio Clínico
            </h2>
            <p className="mt-1 text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          <nav
            aria-label="Redes sociales y accesos"
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40"
              >
                {label}
              </a>
            ))}

            <Link
              href="/personal-page"
              className="rounded-md border border-primary-foreground/30 px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-primary-foreground hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40"
            >
              Acceso para personal
            </Link>
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-primary-foreground/70 md:flex-row">
          <p>Hecho con cuidado para nuestros pacientes.</p>
          <p className="font-medium uppercase tracking-wider">
            <span className="text-primary-foreground">@</span>labClinico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
