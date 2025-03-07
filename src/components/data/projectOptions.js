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

const projectOptions = [
  {
    imagen: "/editoriallp-imagen.webp",
    titulo: "Editorial LP",
    url: "https://editoriallp.netlify.app/",
    tecnologias: [
      { name: "HTML", icon: <IconBrandHtml5 className="w-8 h-8" /> },
      { name: "CSS", icon: <IconBrandCss3 className="w-8 h-8" /> },
      { name: "TypeScript", icon: <IconBrandTypescript className="w-8 h-8" /> },
      { name: "React", icon: <IconBrandReact className="w-8 h-8" /> },
    ],
  },
  {
    imagen: "/owlyx-imagen.webp",
    titulo: "Owlyx",
    url: "https://owlyx.net/",
    tecnologias: [
      { name: "HTML", icon: <IconBrandHtml5 className="w-8 h-8" /> },
      { name: "CSS", icon: <IconBrandCss3 className="w-8 h-8" /> },
      { name: "JavaScript", icon: <IconBrandJavascript className="w-8 h-8" /> },
      { name: "Astro", icon: <IconBrandAstro className="w-8 h-8" /> },
      { name: "Tailwind CSS", icon: <IconBrandTailwind className="w-8 h-8" /> },
    ],
  },
  {
    imagen: "/bienesraices-imagen.webp",
    titulo: "Bienes Raices",
    url: "https://bienesraicesbraynin.netlify.app/",
    tecnologias: [
      { name: "HTML", icon: <IconBrandHtml5 className="w-8 h-8" /> },
      { name: "CSS", icon: <IconBrandCss3 className="w-8 h-8" /> },
      { name: "JavaScript", icon: <IconBrandJavascript className="w-8 h-8" /> },
      { name: "React", icon: <IconBrandReact className="w-8 h-8" /> },
      { name: "Next.js", icon: <IconBrandNextjs className="w-8 h-8" /> },
      { name: "Tailwind CSS", icon: <IconBrandTailwind className="w-8 h-8" /> },
    ],
  },
];

export default projectOptions;
