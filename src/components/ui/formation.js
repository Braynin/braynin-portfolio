"use client";

import { useState } from "react";
import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

import SpotlightCard from "./SpotlightCard";
import formationOptions from "../data/formationOptions.js";
import PixelTransition from "./PixelTransition.js";

export default function Formation() {
  // Tomamos el primer objeto como ejemplo
  const formation = formationOptions[0];
  const [selectedCertificate, setSelectedCertificate] = useState(
    formation.certificate
  );
  const [prevCertificate, setPrevCertificate] = useState(formation.certificate);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  // Actualiza el certificado y fuerza la animación
  const handleCertificateChange = (newCertificate) => {
    if (newCertificate !== selectedCertificate) {
      setPrevCertificate(selectedCertificate);
      setSelectedCertificate(newCertificate);
      setTriggerAnimation((prev) => !prev);
    }
  };

  return (
    <section
      id="formation"
      className="relative w-full h-auto flex flex-col items-center justify-center py-10 my-10"
    >
      <div className="absolute inset-0 bg-[url('/background-hero.webp')] bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-azulOscuro"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-azulOscuro"></div>
      <div className="relative z-10 bg-acero bg-opacity-20 mb-20 py-5 px-10 rounded-full flex justify-center items-center">
        <h2 className={`${silkscreen.className} text-celeste text-4xl`}>
          Formación
        </h2>
      </div>

      <div className="w-1/2 celular:w-80">
        {formationOptions.map((formationItem) => (
          <SpotlightCard
            key={formationItem.title}
            className="flex flex-col items-center mb-20 last-of-type:mb-0 p-5 border-4"
            spotlightColor="rgba(102, 141, 192, 0.25)"
          >
            <h3
              onClick={() => handleCertificateChange(formationItem.certificate)}
              className={`text-3xl font-bold mb-10 ${silkscreen.className} cursor-pointer`}
            >
              {formationItem.title}
            </h3>

            <div className="w-full flex gap-2 justify-around">
              <h4 className="text-2xl font-bold">Módulos:</h4>
              <ul className="w-full flex flex-wrap gap-1">
                {formationItem.modules.map((module) => (
                  <li
                    key={module.title}
                    onClick={() => handleCertificateChange(module.certificate)}
                    className="text-xs p-2 border-2 border-acero bg-celeste rounded-xl text-azulOscuro hover:bg-azulOscuro hover:text-celeste cursor-pointer"
                  >
                    {module.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-center w-[600px] celular:w-[300px]">
              <PixelTransition
                key={selectedCertificate} // Fuerza el remount al cambiar el certificado
                firstContent={
                  <img
                    src={prevCertificate}
                    alt="Certificado anterior"
                    className="w-full h-full object-contain border-4 border-acero rounded-2xl"
                  />
                }
                secondContent={
                  <img
                    src={selectedCertificate}
                    alt="Certificado actual"
                    className="w-full h-full object-contain border-4 border-acero rounded-2xl"
                  />
                }
                gridSize={5}
                pixelColor="#0f1c30"
                animationStepDuration={0.2}
                triggerAnimation={triggerAnimation}
              />
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
