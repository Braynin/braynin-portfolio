import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Braynin",
    icon: <IconBrandGithub className="w-8 h-8" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/brayhan-ninahuaman-braynin",
    icon: <IconBrandLinkedin className="w-8 h-8" />,
  },
  {
    name: "CV",
    url: "/CV_Ninahuaman_Barrueta_Brayhan_Jesus.pdf",
    icon: <IconFileCv className="w-8 h-8" />,
  },
];

export default socialLinks;
