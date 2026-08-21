// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import React from "react";
import {
  LuMapPin,
  LuPhone,
  LuMessageSquare,
  LuClock,
  LuBuilding2,
  LuCheck,
} from "react-icons/lu";

const LaboratoryInfo = ({
  name,
  address,
  phone,
  whatsapp,
  adminHours,
  extractionHours,
}) => {
  return (
    <div className="w-full bg-surface border border-border rounded-2xl p-6 hover:border-border-strong transition-all duration-150 shadow-none flex flex-col justify-between space-y-5">
      <div className="space-y-4">
        {/* Header de la Sede */}
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-primary-200/50 bg-primary-50 text-primary-600 shrink-0 text-xl">
              <LuBuilding2 />
            </div>
            <div>
              <h2 className="font-bold text-lg text-text-primary tracking-tight">{name}</h2>
              <span className="text-[11px] font-medium text-text-muted">Sede Oficial de Atención</span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
            <LuCheck className="h-3 w-3" />
            Abierto
          </span>
        </div>

        {/* Datos de Contacto */}
        <div className="space-y-3 text-sm text-text-secondary">
          <div className="flex items-start gap-3">
            <LuMapPin className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-text-primary font-medium">Dirección:</strong> {address}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LuPhone className="h-4 w-4 text-primary-600 shrink-0" />
            <div>
              <strong className="text-text-primary font-medium">Teléfono:</strong>{" "}
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-primary-600 transition-colors">
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LuMessageSquare className="h-4 w-4 text-emerald-600 shrink-0" />
            <div>
              <strong className="text-text-primary font-medium">WhatsApp Directo:</strong>{" "}
              <a
                href={`https://wa.me/${whatsapp.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1 ml-1"
              >
                +{whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bloque de Horarios */}
      <div className="bg-surface-muted/70 border border-border rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-text-primary uppercase tracking-wider">
          <LuClock className="h-4 w-4 text-primary-600" />
          Horarios de Atención
        </div>

        <div className="space-y-2 text-xs text-text-secondary">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-2">
            <span className="font-medium text-text-primary">Administración y Resultados:</span>
            <span className="text-text-muted">{adminHours}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-0.5">
            <span className="font-medium text-text-primary">Toma de Muestras / Extracciones:</span>
            <span className="text-text-muted">{extractionHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratoryInfo;
