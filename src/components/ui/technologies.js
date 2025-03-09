import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

import technologiesOptions from "../data/technologiesOptions";
import SpotlightCard from "./SpotlightCard";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="relative w-full h-auto flex flex-col items-center justify-center py-10 my-10"
    >
      <div className="absolute inset-0 bg-[url('/background-hero.webp')] bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-azulOscuro"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-azulOscuro"></div>
      <div className="relative z-10bg-acero bg-opacity-20 mb-20 py-5 px-10  rounded-full  flex justify-centeritems-center">
        <h2 className={`${silkscreen.className} text-celeste text-4xl`}>
          Tecnologías
        </h2>
      </div>
      <div className="w-1/2 celular:w-80">
        {technologiesOptions.map((option) => (
          <SpotlightCard
            key={option.title}
            className="flex flex-col items-center mb-20 last-of-type:mb-0 p-5 border-4 "
            spotlightColor="rgba(102, 141, 192, 0.25)"
          >
            <h3 className={`text-3xl font-bold mb-10 ${silkscreen.className}`}>
              {option.title}
            </h3>
            <ul className="w-full flex gap-3 justify-around flex-wrap">
              {option.tecnologias.map((tecnologia) => (
                <li
                  key={`${option.title}-${tecnologia.name}`}
                  className="flex flex-col items-center gap-2"
                >
                  {tecnologia.icon}
                  <span>{tecnologia.name}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
