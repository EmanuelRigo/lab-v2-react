// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
"use client";
import React, { useState } from "react";
import { LuUpload, LuSend, LuCheck, LuFileText, LuInfo } from "react-icons/lu";

const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [sede, setSede] = useState("");
  const [consulta, setConsulta] = useState("");
  const [adjunto, setAdjunto] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setNombre("");
      setDni("");
      setTelefono("");
      setEmail("");
      setSede("");
      setConsulta("");
      setAdjunto(null);
    }, 4000);
  };

  return (
    <section className="bg-surface border border-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-none">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-border">
        <div className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200/50 inline-block">
            Formulario de Recepción Digital
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
            Envío de Orden Médica y Consultas
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary max-w-2xl leading-relaxed">
            Complete el siguiente formulario para adjuntar la foto o archivo PDF
            de su orden médica o solicitar información a nuestro equipo
            administrativo.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-surface-muted px-3 py-2 rounded-lg border border-border text-xs text-text-muted shrink-0">
          <LuInfo className="h-4 w-4 text-primary-600 shrink-0" />
          <span>Respuesta habitual en menos de 2 horas lectivas</span>
        </div>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-6 text-center space-y-2 animate-in fade-in">
          <div className="h-10 w-10 bg-emerald-500 text-white rounded-full mx-auto flex items-center justify-center">
            <LuCheck className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-base">¡Orden Enviada Exitosamente!</h3>
          <p className="text-xs text-emerald-700 max-w-md mx-auto">
            Hemos recibido su consulta y adjunto. Nuestro equipo administrativo
            revisará su orden y se pondrá en contacto por WhatsApp o correo.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nombre y Apellido */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Nombre y Apellido *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Maria Gonzalez"
                className="w-full bg-surface-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            {/* DNI */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                D.N.I. del Paciente *
              </label>
              <input
                type="text"
                required
                placeholder="Sin puntos (Ej. 35123456)"
                className="w-full bg-surface-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Teléfono */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Teléfono de Contacto *
              </label>
              <input
                type="tel"
                required
                placeholder="Cod. área + número"
                className="w-full bg-surface-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Correo Electrónico *
              </label>
              <input
                type="email"
                required
                placeholder="ejemplo@correo.com"
                className="w-full bg-surface-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Sede */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Sede Preferida *
              </label>
              <select
                required
                className="w-full bg-surface-muted/50 border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                value={sede}
                onChange={(e) => setSede(e.target.value)}
              >
                <option value="">Seleccionar Sede</option>
                <option value="Villa Luzuriaga">Sede Villa Luzuriaga</option>
                <option value="Lomas del Mirador">
                  Sede Lomas del Mirador
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Descripción / Consulta */}
            <div className="space-y-1.5 lg:col-span-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Descripción de la Consulta o Estudios a realizar
              </label>
              <textarea
                rows={3}
                placeholder="Indique si posee obra social/prepaga o si requiere algún preparativo especial..."
                className="w-full bg-surface-muted/50 border border-border rounded-xl p-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
              ></textarea>
            </div>

            {/* Adjuntar Orden */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Adjuntar Orden / Receta (Opcional)
              </label>
              <div className="relative border-2 border-dashed border-border hover:border-primary-500 bg-surface-muted/30 hover:bg-primary-50/50 rounded-xl p-4 transition-all text-center cursor-pointer h-[90px] flex flex-col items-center justify-center group">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setAdjunto(e.target.files[0])}
                />
                <div className="flex items-center gap-2 text-primary-600 group-hover:scale-105 transition-transform">
                  {adjunto ? (
                    <>
                      <LuFileText className="h-5 w-5" />
                      <span className="text-xs font-semibold truncate max-w-[140px] text-text-primary">
                        {adjunto.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <LuUpload className="h-5 w-5" />
                      <span className="text-xs font-medium text-text-secondary">
                        Subir foto / PDF
                      </span>
                    </>
                  )}
                </div>
                <span className="text-[10px] text-text-muted mt-1">
                  {adjunto
                    ? "Haga clic para cambiar archivo"
                    : "JPG, PNG o PDF hasta 10MB"}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-primary-foreground font-semibold px-8 py-3 rounded-xl transition-all shadow-none text-sm"
            >
              <LuSend className="h-4 w-4" />
              ENVIAR ORDEN / CONSULTA
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
