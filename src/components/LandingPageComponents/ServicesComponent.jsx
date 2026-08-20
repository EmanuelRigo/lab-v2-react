// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
"use client";

import { usePathname } from "next/navigation";
import {
  LuFlaskConical,
  LuHouse,
  LuClipboardList,
  LuCircleUser,
} from "react-icons/lu";

const services = [
  { Icon: LuFlaskConical, label: "Asesoramiento bioquímico" },
  { Icon: LuClipboardList, label: "Atención bioquímica" },
  { Icon: LuHouse, label: "Extracciones a domicilio" },
  { Icon: LuCircleUser, label: "Extracción pediátrica" },
];

const serviceCardClassName =
  "flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-4 text-center transition-all duration-150 hover:border-border-strong";

const iconWrapperClassName =
  "flex h-16 w-16 items-center justify-center rounded-xl border border-primary-200/50 bg-primary-50 text-primary-600 transition-all duration-150 group-hover:border-primary-300 group-hover:bg-primary-100";

const ServicesComponent = () => {
  const pathname = usePathname();
  const hideTitles = pathname === "/services";

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {services.map(({ Icon, label }) => (
        <article key={label} className={`group ${serviceCardClassName}`}>
          <div className={iconWrapperClassName}>
            <Icon className="h-8 w-8" aria-hidden="true" />
          </div>
          {!hideTitles && (
            <h3 className="text-sm font-semibold text-text-primary">{label}</h3>
          )}
        </article>
      ))}
    </div>
  );
};

export default ServicesComponent;
