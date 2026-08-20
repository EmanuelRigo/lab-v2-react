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
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full lg:w-3/5 min-h-[380px] bg-surface rounded-2xl border border-border p-6 sm:p-8 animate-fade-in-card">
      <div className="w-full lg:w-1/2 h-56 lg:h-auto min-h-[220px] relative rounded-xl overflow-hidden border border-border shrink-0">
        <Image
          src={service.img}
          alt={service.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between w-full lg:w-1/2 flex-1">
        <div className="space-y-4">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                {service.ul.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs font-medium text-text-secondary bg-surface-muted px-2.5 py-1.5 rounded-lg border border-border/60">
                    <LuCircleCheck className="w-3.5 h-3.5 text-primary-600 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-primary-foreground font-medium text-sm rounded-xl transition-all duration-150 shadow-xs group"
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