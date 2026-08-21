
// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import React from "react";
import Banner from "@/components/LandingPageComponents/Banner";
import MedicalCoverageList from "@/components/LandingPageComponents/CoverageComponents/MedicalCoverageList";
import {
  LuIdCard,
  LuFileCheck,
  LuShieldAlert,
  LuReceipt,
} from "react-icons/lu";

export const metadata = {
  title: "Coberturas Médicas y Obras Sociales | Laboratorio Clínico",
  description:
    "Consulte la nómina de obras sociales, medicinas prepagas y coberturas habilitadas en nuestro laboratorio clínico. Requisitos de atención y asesoramiento de convenio.",
  keywords:
    "coberturas medicas, obras sociales, prepagas, laboratorio clinico, OSDE, Galeno, Medicus, Sancor Salud, analisis clinicos, autorizaciones medicas",
};

const requirements = [
  {
    icon: LuIdCard,
    title: "Credencial y DNI",
    description: "Presentar credencial física o digital actualizada y documento de identidad al momento del ingreso.",
  },
  {
    icon: LuFileCheck,
    title: "Orden Médica Vigente",
    description: "Prescripción médica con firma, sello profesional, fecha (vigencia 30 días) y diagnóstico explícito.",
  },
  {
    icon: LuShieldAlert,
    title: "Autorización Previa",
    description: "Prácticas de alta complejidad o estudios especiales requieren gestión de autorización previa según el plan.",
  },
  {
    icon: LuReceipt,
    title: "Pacientes Particulares",
    description: "Emitimos comprobantes oficiales A/B para solicitar reintegro directo con su entidad prestadora.",
  },
];

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-background text-text-primary flex flex-col items-center">
      {/* Banner Hero a 100% del ancho de la pantalla */}
      <Banner img={"/image4.jpg"} section={"COBERTURA"} />

      <main className="w-full max-w-[1560px] mx-auto space-y-8 sm:space-y-12 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        {/* Encabezado Introductorio de Cobertura */}
        <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200/50 inline-block">
                Convenios y Prestaciones Habilitadas
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Coberturas Médicas y Obras Sociales
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed">
                Mantenemos convenios directos con las principales obras sociales, prepagas y sistemas de salud del país. 
                Garantizamos la tramitación ágil de sus estudios de laboratorio con la mayor precisión técnica.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-surface-muted px-4 py-3 rounded-xl border border-border shrink-0">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-text-primary">
                Recepción por convenio y particulares habilitada
              </span>
            </div>
          </div>
        </section>

        {/* Explorador Interactivo de Coberturas */}
        <MedicalCoverageList />

        {/* Guía Útil para la Presentación de Estudios */}
        <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200/50 inline-block">
              Indicaciones Generales
            </span>
            <h2 className="text-2xl font-bold text-text-primary">
              Requisitos para la Recepción de Muestras
            </h2>
            <p className="text-sm text-text-secondary">
              Asegúrese de contar con la documentación requerida al momento de presentarse en cualquiera de nuestras sedes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {requirements.map(({ icon: Icon, title, description }) => (
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