// @style-migration: approved — no refactorizar estilo (Design System aplicado el 2026-08-20)
import Carousel from "./Carousel";
import ContactDetails from "./ContactDetails";
import ServicesComponent from "./ServicesComponent";

const contentSectionClassName =
  "mx-auto flex w-full max-w-[1560px] flex-col gap-10 px-4 py-8 md:gap-12 md:py-12";

const SectionHeader = ({ eyebrow, title }) => (
  <div className="mb-6">
    <p className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
      {eyebrow}
    </p>
    <h2 className="mt-1 text-base font-semibold text-text-primary">{title}</h2>
  </div>
);

const Main = () => {
  return (
    <>
      <section aria-label="Destacados" className="w-full">
        <Carousel />
      </section>

      <div className="w-full bg-background">
        <div className={contentSectionClassName}>
          <section aria-label="Servicios destacados" className="w-full">
            <SectionHeader
              eyebrow="Servicios"
              title="Atención integral de laboratorio"
            />
            <ServicesComponent />
          </section>

          <section aria-label="Información de contacto" className="w-full">
            <SectionHeader
              eyebrow="Contacto"
              title="Sedes y horarios de atención"
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-150 hover:border-border-strong">
              <ContactDetails />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
