"use client";

import { FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

const locationClassName =
  "flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-all duration-150 hover:border-border-strong";

const iconWrapperClassName =
  "flex h-7 w-7 items-center justify-center rounded-md border border-primary-200/50 bg-primary-50 text-primary-600";

const Navbar = () => {
  return (
    <div className="w-full border-b border-border bg-primary-50/60">
      <div className="mx-auto flex h-11 w-full max-w-[1560px] items-center justify-between gap-3 px-4">
        <div className="flex items-center gap-2">
          <div className={locationClassName}>
            <div className={iconWrapperClassName}>
              <FaMapMarkerAlt className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold text-text-primary">
              San Justo
            </span>
          </div>

          <div className={locationClassName}>
            <div className={iconWrapperClassName}>
              <FaMapMarkerAlt className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold text-text-primary">
              Caballito
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            aria-label="Facebook"
            className={`${iconWrapperClassName} transition-all duration-150 hover:border-primary-300 hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30`}
          >
            <FaFacebook className="h-3.5 w-3.5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className={`${iconWrapperClassName} transition-all duration-150 hover:border-primary-300 hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30`}
          >
            <FaInstagram className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
