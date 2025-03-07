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

const technologiesOptions = [
  {
    title: "Dominándolos",
    tecnologias: [
      {
        name: "HTML",
        icon: <IconBrandHtml5 className="w-20 h-20" />,
      },
      {
        name: "CSS",
        icon: <IconBrandCss3 className="w-20 h-20" />,
      },
      {
        name: "JavaScript",
        icon: <IconBrandJavascript className="w-20 h-20" />,
      },
    ],
  },
  {
    title: "Aprendiendo",
    tecnologias: [
      {
        name: "TypeScript",
        icon: <IconBrandTypescript className="w-20 h-20" />,
      },
      {
        name: "Tailwind CSS",
        icon: <IconBrandTailwind className="w-20 h-20" />,
      },
      {
        name: "React",
        icon: <IconBrandReact className="w-20 h-20" />,
      },
      {
        name: "Astro",
        icon: <IconBrandAstro className="w-20 h-20" />,
      },
      {
        name: "Next.js",
        icon: <IconBrandNextjs className="w-20 h-20" />,
      },
    ],
  },
  {
    title: "Visto y en la mira",
    tecnologias: [
      {
        name: "MySQL",
      },
      {
        name: "NoSQL",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Express",
      },
    ],
  },
];

export default technologiesOptions;
