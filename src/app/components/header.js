"use client";

import { useState, useEffect, useRef } from "react";
import navOptions from "../ui/navOptions.js";

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
      className={`fixed top-0 left-0 h-16 w-full flex justify-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black bg-opacity-70`}
    >
      <nav className="w-7/12 h-full">
        <ul className="h-full flex justify-between items-center text-white">
          {navOptions.map((option) => (
            <li
              key={option.name}
              className="hover:text-yellow-500 hover:underline hover:underline-offset-8 cursor-pointer"
            >
              <a href={option.url}>{option.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
