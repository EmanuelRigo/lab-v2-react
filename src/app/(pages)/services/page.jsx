// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import React from "react";
import ServicesComponent from "@/components/LandingPageComponents/ServicesComponent";
import ServicesInfo from "@/components/LandingPageComponents/ServicesComponents/ServicesInfo";
import Banner from "@/components/LandingPageComponents/Banner";
import {
  LuShieldCheck,
  LuClock,
  LuFileText,
  LuSparkles,
} from "react-icons/lu";

export const metadata = {
  title: "Servicios Diagnósticos y Análisis Bioquímicos | Laboratorio Clínico",
  description:
    "Conozca nuestra oferta integral de servicios de laboratorio clínico: atención bioquímica, análisis de alta complejidad, extracciones a domicilio y extracciones pediátricas.",
  keywords:
    "laboratorio clinico, analisis bioquimicos, extracciones a domicilio, extraccion pediatrica, analisis clinicos, endocrinologia, hematologia",
};

const qualityCommitments = [
  {
    icon: LuShieldCheck,
    title: "Calidad Certificada",
    description: "Protocolos estrictos de bioseguridad y control de calidad interno y externo continuo.",
  },
  {
    icon: LuClock,
    title: "Resultados en 24 Horas",
    description: "Procesamiento ágil y entrega puntual de informes para la mayoría de los análisis de rutina.",
  },
  {
    icon: LuFileText,
    title: "Acceso Digital Seguro",
    description: "Consulta tus resultados en línea desde cualquier dispositivo con total confidencialidad.",
  },
  {
    icon: LuSparkles,
    title: "Trato Cálido y Humano",
    description: "Personal altamente capacitado para brindar contención y confort durante cada toma de muestra.",
  },
];

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-background text-text-primary flex flex-col items-center">
      {/* Banner Hero a 100% del ancho de la pantalla */}
      <Banner img={"/image3.jpg"} section={"SERVICIOS"} />

      <main className="w-full max-w-[1560px] mx-auto space-y-8 sm:space-y-12 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">


        {/* Sección de Encabezado Introductorio */}
        <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200/50 inline-block">
                Diagnóstico de Alta Precisión
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Servicios Diagnósticos y Análisis Bioquímicos
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Brindamos soporte bioquímico integral para profesionales de la salud y pacientes.
                Contamos con equipamiento de vanguardia y un equipo profesional comprometido con la excelencia técnica y el trato humano.
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-surface-muted px-4 py-3 rounded-xl border border-border shrink-0">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-text-primary">
                Atención y recepción de muestras habilitada
              </span>
            </div>
          </div>

          {/* Cuadrícula rápida de servicios aprobada */}
          <div className="pt-4 border-t border-border">
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              Vías Principales de Atención
            </h3>
            <ServicesComponent />
          </div>
        </section>

        {/* Explorador Detallado de Servicios */}
        <ServicesInfo />

        {/* Firma Visual & Compromisos de Calidad */}
        <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200/50 inline-block">
              Nuestro Compromiso
            </span>
            <h2 className="text-2xl font-bold text-text-primary">
              Estándares de Excelencia en Cada Análisis
            </h2>
            <p className="text-sm text-text-secondary">
              Nos enfocamos en brindar una experiencia confiable, segura y ágil desde la toma de muestra hasta la emisión del informe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {qualityCommitments.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-surface-muted/50 p-5 transition-all duration-150 hover:border-border-strong hover:bg-surface"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-200/50 bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;

