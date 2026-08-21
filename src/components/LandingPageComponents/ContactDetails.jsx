// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const iconWrapperClassName =
  "mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary-200/50 bg-primary-50 text-primary-600";

const InfoRow = ({ icon: Icon, children }) => (
  <p className="flex items-center text-xs text-text-secondary">
    <span className={iconWrapperClassName}>
      <Icon className="h-3 w-3" aria-hidden="true" />
    </span>
    {children}
  </p>
);

const LocationBlock = ({ title, address, phone, whatsapp, adminHours, extractionHours }) => (
  <div className="rounded-xl border border-border bg-surface-muted/40 p-3 transition-all duration-150 hover:border-border-strong">
    <h3 className="text-sm font-semibold text-primary-600">{title}</h3>

    <div className="mt-2 space-y-1.5">
      <InfoRow icon={FaMapMarkerAlt}>{address}</InfoRow>
      <InfoRow icon={FaPhone}>Teléfono: {phone}</InfoRow>
      <InfoRow icon={FaWhatsapp}>WhatsApp directo: {whatsapp}</InfoRow>
    </div>

    <div className="mt-3 space-y-2">
      <div>
        <p className="flex items-center text-xs font-semibold text-text-primary">
          <span className={iconWrapperClassName}>
            <FaClock className="h-3 w-3" aria-hidden="true" />
          </span>
          Horario administrativo
        </p>
        <div className="mt-1 space-y-0.5 pl-8 text-xs text-text-secondary">
          {adminHours.map((hour) => (
            <p key={hour}>{hour}</p>
          ))}
        </div>
      </div>

      <div>
        <p className="flex items-center text-xs font-semibold text-text-primary">
          <span className={iconWrapperClassName}>
            <FaClock className="h-3 w-3" aria-hidden="true" />
          </span>
          Horario de extracciones
        </p>
        <p className="mt-1 pl-8 text-xs text-text-secondary">{extractionHours}</p>
      </div>
    </div>
  </div>
);

const ContactDetails = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div className="relative min-h-56 overflow-hidden rounded-xl border border-border md:min-h-0">
          <Image
            src="/image4.jpg"
            alt="Instalaciones del laboratorio clínico"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">
              Diagnóstico integral
            </h2>
            <p className="mt-1 text-xs text-text-secondary">
              Enviá tu orden por WhatsApp para recibir atención personalizada,
              preparación del estudio y requisitos de tu cobertura.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <LocationBlock
              title="Sede San Justo"
              address="Calle Ficticia 1234"
              phone="11 1234 5678"
              whatsapp="11 9876 5432"
              adminHours={[
                "Lunes a viernes de 8:00 a 17:00 hs.",
                "Sábados de 8:00 a 13:00 hs.",
              ]}
              extractionHours="Lunes a sábados de 8:00 a 11:30 hs."
            />

            <LocationBlock
              title="Sede Caballito"
              address="Avenida Ficticia 5678"
              phone="11 8765 4321"
              whatsapp="11 6543 2109"
              adminHours={[
                "Lunes a viernes de 9:00 a 18:00 hs.",
                "Sábados de 9:00 a 14:00 hs.",
              ]}
              extractionHours="Lunes a sábados de 9:00 a 12:30 hs."
            />
          </div>

          <Link
            href="/services"
            className="mt-1 inline-flex w-fit rounded-md border border-primary-500 bg-primary-500 px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-150 hover:border-primary-600 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30"
          >
            Ver nuestros servicios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
