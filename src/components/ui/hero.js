import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

import socialLinks from "../data/socialLinks.js";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex  celular:flex-col items-center justify-center py-20">
      <div className="absolute inset-0 bg-[url('/background-hero.webp')] bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-azulOscuro"></div>
      <div className="relative z-10 w-1/2 celular:w-11/12 m-auto flex items-center justify-center">
        <div className="w-4/5 bg-azul bg-opacity-20 rounded-full celular:rounded-none py-5 flex flex-col items-center justify-center">
          <h1 className="text-4xl celular:text-2xl font-bold border-r-4 w-0 whitespace-nowrap overflow-hidden animate-typeWriterBlink celular:animate-typeWriterBlinkCelular">
            Hola, soy{" "}
            <span
              className={`${silkscreen.className} celular:block text-celeste font-bold`}
            >
              Brayhan
            </span>
          </h1>
          <p className="my-4 font-semibold w-4/5  text-2xl  celular:text-xl">
            Concentrado en aprender, practicar y buscar nuevas oportunidades
            laborales.
          </p>
          <div className="w-4/5">
            <ul className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:text-cielo hover:underline hover:underline-offset-8 cursor-pointer"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    {link.name}
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-1/2  flex justify-center items-center ">
        <Image
          src="/Brayhan-Ninahuaman.webp"
          alt="braynin"
          width={500}
          height={500}
          className="rounded-full border-b-4 border-cielo"
        ></Image>{" "}
      </div>
    </section>
  );
}
