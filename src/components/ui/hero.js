import socialLinks from "../data/socialLinks.js";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-svh flex bg-[url('/background-hero.webp')] bg-cover bg">
      <div className=" w-1/2 m-auto   flex items-center justify-center">
        <div className="w-4/5 bg-azul bg-opacity-20 rounded-full py-5 flex flex-col items-center justify-center">
          <h1 className="text-4xl border-r-4 w-0 whitespace-nowrap overflow-hidden animate-typeWriterBlink">
            Hola, soy{" "}
            <span className="text-celeste font-bold">Brayhan Ninahuaman</span>
          </h1>
          <p className="my-4 font-semibold w-4/5  text-2xl ">
            Hace unos meses completé una beca financiada por el estado, la cual
            me ayudó a fortalecer mis habilidades en el desarrollo de
            interfaces. Ahora me concentro en practicar, mejorar mi portafolio y
            buscar nuevas oportunidades laborales.
          </p>
          <div>
            <ul className="flex gap-4">
              {socialLinks.map((link) => (
                <li
                  key={link.name}
                  className="hover:text-cielo hover:underline hover:underline-offset-8 cursor-pointer"
                >
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center ">
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
