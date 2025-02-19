import "./globals.css";

import Header from "./components/header.js";
import Footer from "./components/footer.js";

export const metadata = {
  title: "Braynin Portfolio",
  description:
    "Desarrollador web con experiencia en Next.js, React y Tailwind. Enfocado en crear interfaces dinámicas e interactivas, con conocimientos en backend con Node.js y MongoDB. Apasionado por el aprendizaje y la optimización web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {<Header />}
        {children}
        {<Footer />}
      </body>
    </html>
  );
}
