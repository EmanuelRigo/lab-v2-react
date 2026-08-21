// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
"use client";
import React, { useState, useMemo } from "react";
import {
  LuBuilding2,
  LuStethoscope,
  LuHeartPulse,
  LuActivity,
  LuShieldCheck,
  LuCreditCard,
  LuSparkles,
  LuSearch,
  LuInfo,
  LuHospital,
} from "react-icons/lu";
import MedicalCoverageItem from "./MedicalCoverageItem";

const MedicalCoverageList = () => {
  const coberturas = [
    {
      nombre: "OSDE",
      tipo: "Medicina Prepaga",
      modalidad: "Atención Directa",
      icono: <LuBuilding2 />,
      descripcion: "Cobertura completa en planes 210, 310, 410, 450 y 510 sin orden de autorización previa en análisis de rutina.",
    },
    {
      nombre: "Galeno",
      tipo: "Medicina Prepaga",
      modalidad: "Atención Directa",
      icono: <LuStethoscope />,
      descripcion: "Planes Azul, Plata, Oro y Blanco. Red de sanatorios y diagnóstico bioquímico prioritario.",
    },
    {
      nombre: "Medicus",
      tipo: "Medicina Prepaga",
      modalidad: "Atención Directa",
      icono: <LuHeartPulse />,
      descripcion: "Atención directa para todos sus planes corporativos y familiares con autorización digital rápida.",
    },
    {
      nombre: "Federada Salud",
      tipo: "Obra Social / Prepaga",
      modalidad: "Convenio Directo",
      icono: <LuHospital />,
      descripcion: "Cobertura integral en análisis de laboratorio de rutina y prácticas de especialidad.",
    },
    {
      nombre: "Sancor Salud",
      tipo: "Medicina Prepaga",
      modalidad: "Atención Directa",
      icono: <LuShieldCheck />,
      descripcion: "Planes 1000 a 5000. Acceso simplificado a estudios clínicos y laboratorio especializado.",
    },
    {
      nombre: "Avalian",
      tipo: "Medicina Prepaga",
      modalidad: "Convenio Directo",
      icono: <LuActivity />,
      descripcion: "Anteriormente AcaSalud. Cobertura nacional en planes Cerca, Integral y Superior.",
    },
    {
      nombre: "Premedic",
      tipo: "Medicina Prepaga",
      modalidad: "Atención Directa",
      icono: <LuCreditCard />,
      descripcion: "Convenio amplio para análisis de rutina y alta complejidad con credencial digital.",
    },
    {
      nombre: "Wiri Salud",
      tipo: "Salud Digital",
      modalidad: "Arancel Diferencial",
      icono: <LuSparkles />,
      descripcion: "Atención médica y estudios bioquímicos a valores preferenciales sin cuotas mensuales fijas.",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = ["Todas", "Medicina Prepaga", "Obra Social / Prepaga", "Salud Digital"];

  const filteredCoberturas = useMemo(() => {
    return coberturas
      .sort((a, b) => a.nombre.localeCompare(b.nombre))
      .filter((cobertura) => {
        const matchesSearch =
          cobertura.nombre.toLowerCase().includes(search.toLowerCase()) ||
          cobertura.descripcion.toLowerCase().includes(search.toLowerCase()) ||
          cobertura.tipo.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
          selectedCategory === "Todas" || cobertura.tipo === selectedCategory;

        return matchesSearch && matchesCategory;
      });
  }, [search, selectedCategory]);

  return (
    <section className="w-full space-y-6">
      {/* Barra de Filtros y Búsqueda */}
      <div className="bg-surface border border-border rounded-2xl p-5 md:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
            <input
              type="text"
              placeholder="Buscar obra social, prepaga o plan..."
              className="w-full bg-surface-muted/60 border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Selector de Categorías */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-primary-500 text-primary-foreground shadow-xs"
                    : "bg-surface-muted text-text-secondary border border-border hover:bg-surface hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Contador de Resultados */}
        <div className="flex items-center justify-between text-xs text-text-muted pt-2 border-t border-border">
          <span>
            Mostrando <strong className="text-text-primary">{filteredCoberturas.length}</strong> de{" "}
            {coberturas.length} coberturas habilitadas
          </span>
          {search && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("Todas");
              }}
              className="text-primary-600 font-medium hover:underline"
            >
              Limpiar búsqueda
            </button>
          )}
        </div>
      </div>

      {/* Grilla de Coberturas */}
      {filteredCoberturas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCoberturas.map((coverage) => (
            <MedicalCoverageItem key={coverage.nombre} coverage={coverage} />
          ))}
        </div>
      ) : (
        <div className="bg-surface border border-border rounded-2xl p-12 text-center space-y-3">
          <div className="h-12 w-12 rounded-full bg-primary-50 text-primary-600 border border-primary-200/50 mx-auto flex items-center justify-center">
            <LuInfo className="h-6 w-6" />
          </div>
          <h3 className="text-base font-semibold text-text-primary">
            No se encontraron coberturas coincidentes
          </h3>
          <p className="text-xs text-text-secondary max-w-md mx-auto">
            Si su obra social o prepaga no figura en este listado, comuníquese con nuestra secretaría para verificar la posibilidad de reintegro o arancel diferencial.
          </p>
        </div>
      )}
    </section>
  );
};

export default MedicalCoverageList;