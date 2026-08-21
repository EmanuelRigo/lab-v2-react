// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
"use client";
import React, { useState } from "react";
import {
  LuFlaskConical,
  LuClipboardList,
  LuHouse,
  LuCircleUser,
} from "react-icons/lu";
import CardServices from "./CardServices";

const data = [
  {
    id: "asesoramiento",
    img: "/image1.jpg",
    title: "Asesoramiento Bioquímico",
    Icon: LuFlaskConical,
    description:
      "Brindamos asesoramiento bioquímico especializado y análisis de alta complejidad con diagnósticos de precisión para respaldar las decisiones médicas.",
    ul: [
      "Autoinmunidad",
      "Bacteriología",
      "Biología molecular",
      "Citogenética",
      "Drogas terapéuticas",
      "Endocrinología",
      "Hematología",
      "Hemostasia y trombosis",
      "Inmunoserología",
      "Marcadores tumorales",
      "Metabolismo",
      "Proteínas",
      "Química clínica",
    ],
  },
  {
    id: "atencion",
    img: "/image2.avif",
    title: "Atención Bioquímica",
    Icon: LuClipboardList,
    description:
      "Atención personalizada por profesionales calificados en nuestras sedes, garantizando confort, estricta confidencialidad y rapidez en la toma de muestras.",
    ul: [
      "Atención por orden de llegada o turno previo",
      "Asesoramiento pre-analítico detallado",
      "Validación bioquimica de resultados en 24h",
      "Acceso digital seguro a informes de laboratorio",
    ],
  },
  {
    id: "domicilio",
    img: "/image3.jpg",
    title: "Extracciones a Domicilio",
    Icon: LuHouse,
    description:
      "Servicio de toma de muestras en la comodidad de su hogar u oficina con el mismo rigor técnico, puntualidad y cumplimiento de protocolos de bioseguridad.",
    ul: [
      "Coordinación previa por WhatsApp o teléfono",
      "Equipamiento portátil homologado",
      "Ideal para pacientes con movilidad reducida",
      "Conservación de muestras con cadena de frío garantizada",
    ],
  },
  {
    id: "pediatria",
    img: "/image4.jpg",
    title: "Extracción Pediátrica",
    Icon: LuCircleUser,
    description:
      "Espacio adaptado y equipo profesional altamente experimentado en la contención e interacción amigable y libre de estrés con niños y lactantes.",
    ul: [
      "Técnicas de venopunción de mínimo impacto",
      "Personal con especialización pediátrica",
      "Entorno distendido y contenedor",
      "Entrega de diploma de valentía a los pacientes",
    ],
  },
];

const ServicesInfo = () => {
  const [selectedService, setSelectedService] = useState(data[0]);

  return (
    <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200/50 inline-block mb-1.5">
          Explora nuestra oferta
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
          Catálogo Integral de Servicios
        </h2>
        <p className="text-sm text-text-secondary mt-1">
          Selecciona cada servicio para conocer los detalles técnicos y
          especialidades comprendidas.
        </p>
      </div>

      <div className="relative flex w-full flex-col gap-6  lg:block">
        {/* Selector de servicios */}
        <div className="flex w-full flex-col gap-3 lg:w-2/5">
          {data.map((service) => {
            const isSelected = selectedService.id === service.id;
            const Icon = service.Icon;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service)}
                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-150 group cursor-pointer ${
                  isSelected
                    ? "bg-primary-50 border-primary-200 text-primary-600 shadow-xs"
                    : "bg-surface border-border text-text-primary hover:border-border-strong hover:bg-surface-muted"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                    isSelected
                      ? "border-primary-200/60 bg-white text-primary-600"
                      : "border-primary-200/50 bg-primary-50 text-primary-600 group-hover:bg-primary-100"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className={`text-base font-semibold transition-colors ${
                      isSelected ? "text-primary-600" : "text-text-primary"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-1 mt-0.5">
                    {service.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* El detalle se independiza de la altura del selector en escritorio. */}
        <div className="w-full lg:absolute lg:inset-y-0 lg:left-[calc(40%+1.5rem)] lg:w-[calc(60%-1.5rem)] lg:overflow-y-auto lg:[&>div]:w-full">
          <CardServices service={selectedService} />
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
