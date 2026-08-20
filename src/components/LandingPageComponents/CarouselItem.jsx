// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

const whatsappButtonClassName =
  "inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/20 bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary-600 transition-all duration-150 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40";

const CarouselItem = ({
  image,
  title,
  description,
  caption,
  locations = ["San Justo", "Caballito"],
}) => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay más oscuro y sólido para mejorar el contraste del texto */}
      <div className="absolute inset-0 bg-slate-900/80 md:bg-slate-900/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/30" />

      <div className="absolute inset-0 flex items-center justify-center p-6 md:justify-start md:px-16 md:py-20 lg:px-28">
        <div className="relative flex max-w-xl flex-col items-center text-white md:items-start">
          {caption && (
            <span className="mb-3 inline-flex items-center rounded-md border border-primary-foreground/30 bg-primary-500/20 px-3 py-1 text-xs font-semibold tracking-wide text-white md:mb-4">
              {caption}
            </span>
          )}

          <h2 className="text-center text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-sm md:text-left md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-4 max-w-md text-center text-base font-medium leading-relaxed text-white md:text-left md:text-lg">
            {description}
          </p>

          {locations?.length > 0 && (
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
              {locations.map((location) => (
                <button
                  key={location}
                  type="button"
                  className={whatsappButtonClassName}
                >
                  <FaWhatsapp aria-hidden="true" />
                  {location}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
