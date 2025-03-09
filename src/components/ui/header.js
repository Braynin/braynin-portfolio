"use client";
import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

import { IconCurrencyXrp, IconMenu3 } from "@tabler/icons-react";

import { useState, useEffect, useRef } from "react";
import navOptions from "../data/navOptions.js";

export default function Header() {
  // Estado para controlar la visibilidad del header
  const [isVisible, setIsVisible] = useState(true);
  // Ref para guardar la última posición de scroll
  const lastScrollY = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          setMobileMenuOpen(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <header
      className={`fixed z-50 h-16 w-full flex justify-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <nav
        className={`${silkscreen.className} w-8/12 h-full  bg-acero rounded-b-full px-10 celular:w-full celular:rounded-none`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute right-4 top-4 z-50 celular:block hidden"
        >
          {mobileMenuOpen ? (
            // Icono de "X" para cerrar (lo podrás cambiar luego)
            <IconCurrencyXrp stroke={2} className="w-8 h-8" />
          ) : (
            // Icono de menú (tres líneas)
            <IconMenu3 stroke={2} className="w-8 h-8" />
          )}
        </button>
        <ul
          className={`h-full w-full flex justify-between items-center transition-transform duration-300 ease-in-out celular:flex celular:flex-col celular:absolute celular:top-0 celular:right-0 celular:bg-acero celular:w-full celular:justify-center celular:items-center celular:mt-16 celular:py-5 celular:gap-10 celular:z-50 celular:h-auto ${
            mobileMenuOpen
              ? "celular:translate-x-0"
              : "celular:translate-x-full"
          } ${
            isVisible ? "celular:translate-x-0" : "celular:translate-x-full"
          }`}
        >
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
