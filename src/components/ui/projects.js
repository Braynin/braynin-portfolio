import Image from "next/image";
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
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <h2>Lo que hice hasta ahora</h2>
      <div className="flex flex-wrap justify-center gap-4 h-[500px]">
        {projectOptions.map((project) => (
          <SpotlightCard
            key={project.titulo}
            className="flex flex-col items-center justify-center w-96 h-3/4"
            spotlightColor="rgba(102, 141, 192, 0.25)"
          >
            <Image
              src={project.imagen}
              alt={project.titulo}
              width={500}
              height={500}
            />
            <h3>{project.titulo}</h3>
            <ul className="flex gap-2">
              {project.tecnologias.map((tecnologia) => {
                const Icon = iconsMap[tecnologia];
                return Icon ? (
                  <Icon key={`${project.titulo}-${tecnologia}`} stroke={2} />
                ) : null;
              })}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
