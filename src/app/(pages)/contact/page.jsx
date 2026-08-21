// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import React from "react";
import Banner from "@/components/LandingPageComponents/Banner";
import LaboratoryInfo from "@/components/LandingPageComponents/ContactComponents/LaboratoryInfo";
import ContactForm from "@/components/LandingPageComponents/ContactComponents/ContactForm";

export const metadata = {
  title: "Contacto y Sedes de Atención | Laboratorio Clínico",
  description:
    "Ubicaciones, teléfonos, canales de WhatsApp y horarios de atención administrativa y extracciones en nuestras sedes de Villa Luzuriaga y Lomas del Mirador.",
  keywords:
    "contacto laboratorio clinico, sedes laboratorio, Villa Luzuriaga, Lomas del Mirador, telefono laboratorio, enviar orden medica, laboratorio de analisis",
};

const labData = [
  {
    name: "Sede Villa Luzuriaga",
    address: "Av. Pte. Juan D. Perón 1075, Villa Luzuriaga",
    phone: "11 4460 0347",
    whatsapp: "5491161853327",
    adminHours: "Lunes a Viernes de 7:30 a 15:30hs. Sábados de 7:30 a 12:00hs.",
    extractionHours: "Lunes a Sábados de 7:30 a 11:00hs.",
  },
  {
    name: "Sede Lomas del Mirador",
    address: "Av. Juan Manuel de Rosas 557, Lomas del Mirador",
    phone: "11 4699 3383",
    whatsapp: "5491138586458",
    adminHours: "Lunes a Viernes de 8:30 a 12:00hs. Sábados de 8:30 a 10:00hs.",
    extractionHours: "Lunes a Sábados de 8:30 a 10:00hs.",
  },
];

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-background text-text-primary flex flex-col items-center">
      {/* Banner Hero a 100% del ancho de la pantalla */}
      <Banner img={"/image2.avif"} section={"CONTACTO"} />

      <main className="w-full max-w-[1560px] mx-auto space-y-8 sm:space-y-12 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        {/* Encabezado Introductorio */}
        <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200/50 inline-block">
                Canales Directos de Atención
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Sedes, Horarios y Canales de Contacto
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed">
                Le brindamos atención personalizada en nuestras dos sedes operativas. Consulte horarios de extracción, envíe su orden médica o comuníquese directamente con nuestros canales telefónicos y de WhatsApp.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-surface-muted px-4 py-3 rounded-xl border border-border shrink-0">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-text-primary">
                Atención presencial y virtual activa
              </span>
            </div>
          </div>
        </section>

        {/* Tarjetas de Sedes Operativas */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">
              Nuestras Sedes de Atención
            </h2>
            <span className="text-xs text-text-muted">2 sedes habilitadas</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {labData.map((lab) => (
              <LaboratoryInfo key={lab.name} {...lab} />
            ))}
          </div>
        </section>

        {/* Formulario de Envío de Orden y Mensajes */}
        <ContactForm />
      </main>
    </div>
  );
};

export default Page;
