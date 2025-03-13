import Image from "next/image";

import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

import Link from "next/link";
import SpotlightCard from "./SpotlightCard";
import projectOptions from "../data/projectOptions.js";

import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandAstro,
  IconBrandNextjs,
  IconBrandTypescript,
} from "@tabler/icons-react";
const iconsMap = {
  HTML: IconBrandHtml5,
  CSS: IconBrandCss3,
  JavaScript: IconBrandJavascript,
  "Tailwind CSS": IconBrandTailwind,
  React: IconBrandReact,
  Astro: IconBrandAstro,
  "Next.js": IconBrandNextjs,
  TypeScript: IconBrandTypescript,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full h-auto flex flex-col items-center justify-center py-10 my-10"
    >
      <div className="absolute inset-0 bg-[url('/background-hero.webp')] bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-azulOscuro"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-azulOscuro"></div>
      <div className="relative z-10 bg-acero bg-opacity-20 mb-20 py-5 px-10  rounded-full  flex justify-centeritems-center">
        <h2 className={`${silkscreen.className} text-celeste text-4xl`}>
          Proyectos
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10 h-auto">
        {projectOptions.map((project) => (
          <Link href={project.url} key={project.titulo} target="_blank">
            <SpotlightCard
              key={project.titulo}
              className="flex flex-col items-center justify-between w-96 celular:w-80 h-auto hover:-inset-y-2 transition-transform ease-in-out"
              spotlightColor="rgba(102, 141, 192, 0.25)"
            >
              <Image
                src={project.imagen}
                alt={project.titulo}
                width={500}
                height={500}
                className="w-full rounded-xl border-2 border-acero"
              />
              <h3 className="text-2xl font-bold my-2">{project.titulo}</h3>
              <ul className="flex gap-2">
                {project.tecnologias.map((tech) => (
                  <li key={`${project.titulo}-${tech.name}`}>{tech.icon}</li>
                ))}
              </ul>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
