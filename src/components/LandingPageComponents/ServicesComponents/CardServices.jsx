// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuCircleCheck, LuArrowRight } from "react-icons/lu";

const CardServices = ({ service }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-fade-in-card");
    elements.forEach((element) => {
      element.classList.remove("animate-fade-in-card");
      void element.offsetWidth; // Trigger reflow
      element.classList.add("animate-fade-in-card");
    });
  }, [service]);

  if (!service) return null;

  return (
    <div className="flex w-full h-full min-h-0 flex-col gap-4 rounded-2xl border border-border bg-surface p-4 animate-fade-in-card sm:p-5 lg:w-3/5 lg:flex-row lg:gap-4 lg:p-4">
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl border border-border lg:h-auto lg:w-1/3 lg:self-stretch">
        <Image
          src={service.img}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 20vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105 h-full bg-red-400"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between w-full lg:w-2/3">
        <div className="space-y-3">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200/50 inline-block mb-2">
              Detalle del Servicio
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
              {service.title}
            </h3>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">
            {service.description}
          </p>

          {service.ul && service.ul.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-border">
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Áreas y Especialidades
              </h4>
              <div className="grid max-h-32 grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:max-h-28">
                {service.ul.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs font-medium text-text-secondary bg-surface-muted px-2.5 py-1.5 rounded-lg border border-border/60"
                  >
                    <LuCircleCheck className="w-3.5 h-3.5 text-primary-600 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-start border-t border-border pt-3">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-5 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-all duration-150 hover:bg-primary-600 group sm:w-auto"
          >
            <span>Solicitar Consulta o Turno</span>
            <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
