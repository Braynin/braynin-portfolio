"use client";
import { useState, useEffect } from "react";

import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

import { IconPhone } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconCopy } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

import Image from "next/image";

import SpotlightCard from "./SpotlightCard.js";
import socialLinks from "../data/socialLinks.js";

export default function Contact() {
  const phoneNumber = "+51 922217500";
  const telNumber = phoneNumber.replace(/\s+/g, "");
  const whatsappNumber = phoneNumber.replace(/\s+/g, "").replace("+", "");
  const correo = "brayhannb@gmail.com";
  const linkedIn = socialLinks[1].url;

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Detecta si el dispositivo es táctil o tiene puntos táctiles
    const mobile =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(mobile);
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copiado al portapapeles"))
      .catch((err) => console.error("Error en el copiado:", err));
  };

  return (
    <section
      id="contact"
      className="relative w-full h-auto flex flex-col items-center justify-center py-10 mt-10"
    >
      <div className="absolute inset-0 bg-[url('/background-hero.webp')] bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-azulOscuro"></div>
      <div className="relative z-10 bg-acero bg-opacity-20 mb-20 py-5 px-10  rounded-full  flex justify-centeritems-center">
        <h2 className={`${silkscreen.className} text-celeste text-4xl`}>
          Contáctame
        </h2>
      </div>

      <SpotlightCard
        className="celular:w-80 flex celular:flex-col items-center mb-20 last-of-type:mb-0 p-5 border-4 "
        spotlightColor="rgba(102, 141, 192, 0.25)"
      >
        <div className="flex justify-center pt-10 mr-10">
          <Image
            src="/contact-gif.webp"
            alt="contact-gif"
            width={400}
            height={400}
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-full group flex flex-col p-3 border-2 border-acero bg-celeste rounded-xl text-azulOscuro hover:bg-azulOscuro hover:text-celeste">
            <div className="flex justify-center pb-5">
              <h3 className="text-3xl celular:text-2xl font-bold">
                Mi Celular
              </h3>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <span className="text-xl celular:text-base font-bold">
                {phoneNumber}
              </span>
              {isMobile && (
                <a
                  href={`tel:${telNumber}`}
                  className="group-hover:text-celeste text-azulOscuro hover:scale-110 transition-transform ease-in-out "
                >
                  <IconPhone stroke={2} className="w-9 h-9" />
                </a>
              )}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-celeste text-azulOscuro hover:scale-110 transition-transform ease-in-out"
              >
                <IconBrandWhatsapp stroke={2} className="w-9 h-9" />
              </a>
              <button
                onClick={() => handleCopy(phoneNumber)}
                className="group-hover:text-celeste text-azulOscuro hover:scale-110 transition-transform ease-in-out "
              >
                <IconCopy stroke={2} className="w-9 h-9" />
              </button>
            </div>
          </div>

          <div className="w-full group flex flex-col p-3 border-2 border-acero bg-celeste rounded-xl text-azulOscuro hover:bg-azulOscuro hover:text-celeste">
            <div className="flex justify-center pb-5">
              <h3 className="text-3xl celular:text-2xl font-bold">Mi Correo</h3>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <span className="text-xl celular:text-base font-bold">
                {correo}
              </span>

              <button
                onClick={() => handleCopy(correo)}
                className="group-hover:text-celeste text-azulOscuro hover:scale-110 transition-transform ease-in-out "
              >
                <IconCopy stroke={2} className="w-9 h-9" />
              </button>
            </div>
          </div>

          <div className="w-full group flex flex-col p-3 border-2 border-acero bg-celeste rounded-xl text-azulOscuro hover:bg-azulOscuro hover:text-celeste">
            <div className="flex justify-center pb-5">
              <h3 className="text-3xl celular:text-2xl font-bold">
                Mi LinkedIn
              </h3>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <span className="text-xl celular:text-base font-bold">
                Brayhan Ninahuaman
              </span>

              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-celeste text-azulOscuro hover:scale-110 transition-transform ease-in-out"
              >
                <IconBrandLinkedin stroke={2} className="w-9 h-9" />
              </a>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
