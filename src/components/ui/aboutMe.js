import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });
import Image from "next/image";

import SpotlightCard from "./SpotlightCard";

export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="relative w-full h-auto flex flex-col items-center justify-center py-10 my-10"
    >
      <div className="absolute inset-0 bg-[url('/background-hero.webp')] bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-azulOscuro"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-azulOscuro"></div>
      <div className="relative z-10 bg-acero bg-opacity-20 mb-20 py-5 px-10  rounded-full  flex justify-centeritems-center">
        <h2 className={`${silkscreen.className} text-celeste text-4xl`}>
          Sobre mi
        </h2>
      </div>
      <div className="w-1/2 celular:w-80">
        <SpotlightCard
          className="flex flex-col items-center mb-20 last-of-type:mb-0 p-5 border-4 "
          spotlightColor="rgba(102, 141, 192, 0.25)"
        >
          <h3 className={`text-3xl font-bold mb-10 ${silkscreen.className}`}>
            Brayhan
          </h3>
          <div className="flex celular:flex-col">
            <div className="flex justify-center">
              <Image
                src="/gif-about-me.webp"
                alt="gif-about-me"
                width={600}
                height={500}
                unoptimized
              />
            </div>
            <div className="ml-10 celular:ml-0 celular:mt-10">
              <p className="text-xl mb-5">
                Soy proactivo, responsable y apasionado por el front-end. Me
                adapto con rapidez a nuevos entornos, aprendo velozmente y
                disfruto trabajar en equipo. Siempre busco mejorar y actualizar
                mis habilidades en desarrollo web.
              </p>
              <p className="text-xl">
                En mi tiempo libre disfruto de películas, videojuegos y trato de
                mantener una rutina de ejercicios.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
