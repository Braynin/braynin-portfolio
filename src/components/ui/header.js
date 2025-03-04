"use client";
import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

import { useState, useEffect, useRef } from "react";
import navOptions from "../data/navOptions.js";

export default function Header() {
  // Estado para controlar la visibilidad del header
  const [isVisible, setIsVisible] = useState(true);
  // Ref para guardar la última posición de scroll
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // Cuando estás en lo más arriba, el header siempre es visible
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY.current) {
          // Si el scroll aumenta (bajando), ocultamos el header
          setIsVisible(false);
        } else {
          // Si el scroll disminuye (subiendo), mostramos el header
          setIsVisible(true);
        }
      }
      // Actualizamos la última posición del scroll
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutamos el handler al montar el componente para establecer el estado inicial
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed z-50 h-16 w-full flex justify-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <nav
        className={`${silkscreen.className} w-8/12 h-full  bg-acero rounded-b-full px-10`}
      >
        <ul className="h-full flex justify-between items-center">
          {navOptions.map((option) => (
            <li
              key={option.name}
              className="font-bold hover:text-azul hover:underline hover:underline-offset-8 cursor-pointer"
            >
              <a href={option.url}>{option.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
