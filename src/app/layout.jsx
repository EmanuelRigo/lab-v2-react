import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/LandingPageComponents/Navbar";
import Footer from "@/components/LandingPageComponents/Footer";
import SocialFooter from "@/components/LandingPageComponents/SocialFooter";
import NabbarButtons from "../components/LandingPageComponents/NabbarButtons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

  export const metadata = {
    title: "Laboratorio Clinico",
    description: "laboratorio clinico - pagina principal",
    keywords: "laboratorio clinico, examenes de laboratorio",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-primary`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border bg-surface shadow-none">
            <Navbar />
            <NabbarButtons />
          </header>

          <main className="flex w-full flex-1 flex-col items-center">
            {children}
          </main>

          <footer className="w-full">
            <SocialFooter />
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
