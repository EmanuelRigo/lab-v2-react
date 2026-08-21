// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import React from "react";
import { LuCheck } from "react-icons/lu";

const MedicalCoverageItem = ({ coverage }) => {
  return (
    <div className="flex flex-col justify-between bg-surface border border-border rounded-xl p-5 hover:border-border-strong hover:bg-surface-muted/50 transition-all duration-150 shadow-none">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg border border-primary-200/50 bg-primary-50 text-primary-600 shrink-0 text-xl">
              {coverage.icono}
            </div>
            <div>
              <h3 className="text-base font-semibold text-text-primary tracking-tight">
                {coverage.nombre}
              </h3>
              <span className="text-[11px] font-medium text-text-muted">
                {coverage.tipo || "Convenio Directo"}
              </span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
            <LuCheck className="h-3 w-3" />
            Habilitado
          </span>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed">
          {coverage.descripcion}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] text-text-muted">
        <span>Modalidad: <strong className="text-text-primary font-medium">{coverage.modalidad || "Directa / Reintegro"}</strong></span>
        <span className="text-primary-600 font-medium">Ver requisitos</span>
      </div>
    </div>
  );
};

export default MedicalCoverageItem;
