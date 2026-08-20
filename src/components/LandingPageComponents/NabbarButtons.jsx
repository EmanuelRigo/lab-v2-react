"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Servicios" },
  { href: "/coverage", label: "Cobertura" },
  { href: "/contact", label: "Contacto" },
];

const linkBaseClass =
  "rounded-lg px-2.5 py-2 text-sm font-medium text-text-secondary transition-all duration-150 hover:border-border-strong hover:bg-surface-muted hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30";

const NabbarButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClassName = (href) =>
    `${linkBaseClass} border border-transparent ${
      isActive(href)
        ? "border-primary-200/50 bg-primary-50 text-primary-600"
        : ""
    }`;

  return (
    <nav className="relative w-full bg-surface">
      <div className="mx-auto flex h-16 w-full max-w-[1560px] items-center justify-between px-4">
        <Link
          href="/"
          className="rounded-lg border border-transparent px-2 py-1.5 text-lg font-semibold tracking-tight text-primary-600 transition-all duration-150 hover:border-primary-200/50 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30"
        >
          LabClinico
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClassName(href)}>
              {label}
            </Link>
          ))}
          <Link
            href="/envia-tu-orden"
            className="ml-2 rounded-md border border-primary-500 bg-primary-500 px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-150 hover:border-primary-600 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30"
          >
            Enviá tu orden
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-text-secondary transition-all duration-150 hover:border-border-strong hover:bg-surface-muted hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-border bg-surface px-4 py-4 shadow-none md:hidden">
          <div className="mx-auto flex max-w-[1560px] flex-col gap-1.5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 ${
                  isActive(href)
                    ? "border-primary-200/50 bg-primary-50 text-primary-600"
                    : "border-border bg-surface text-text-secondary hover:border-border-strong hover:bg-surface-muted hover:text-primary-600"
                }`}
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/envia-tu-orden"
              className="mt-1 rounded-md border border-primary-500 bg-primary-500 px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition-all duration-150 hover:border-primary-600 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30"
              onClick={toggleMenu}
            >
              Enviá tu orden
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NabbarButtons;
