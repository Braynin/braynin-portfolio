"use client";

import { useRef, useEffect } from "react";

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  className = "",
  style = {},
  triggerAnimation,
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);

  // Creamos el grid de píxeles cuando cambian gridSize o pixelColor
  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;
    pixelGridEl.innerHTML = "";
    pixelGridEl.style.visibility = "visible";
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.position = "absolute";
        pixel.style.display = "none";
        pixel.style.backgroundColor = pixelColor;
        pixel.style.margin = "0";
        pixel.style.padding = "0";

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  // Cada vez que triggerAnimation cambie, se dispara la animación
  useEffect(() => {
    animatePixels();
  }, [triggerAnimation]);

  const animatePixels = () => {
    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    const containerEl = containerRef.current;
    if (!pixelGridEl || !activeEl || !containerEl) return;
    const pixels = Array.from(pixelGridEl.querySelectorAll(".pixel"));
    if (!pixels.length) return;

    // Desordena aleatoriamente los píxeles
    const shuffled = pixels.slice().sort(() => Math.random() - 0.5);
    const totalPixels = shuffled.length;
    const staggerDuration = (animationStepDuration * 1000) / totalPixels; // en ms

    // Muestra cada píxel de forma escalonada
    shuffled.forEach((pixel, index) => {
      setTimeout(() => {
        pixel.style.display = "block";
      }, index * staggerDuration);
    });

    setTimeout(() => {
      // Configuramos la transición del contenido activo
      activeEl.style.display = "block";
      activeEl.style.opacity = "0";
      activeEl.style.pointerEvents = "none";

      // Oculta el contenido previo para evitar que se vea detrás
      const firstContentEl = containerEl.querySelector(".first-content");
      if (firstContentEl) {
        firstContentEl.style.display = "none";
      }

      // Disparar el fade-in (cambio de opacidad a 1)
      setTimeout(() => {
        activeEl.style.opacity = "1";
      }, 10);
    }, animationStepDuration * 1000);

    shuffled.forEach((pixel, index) => {
      setTimeout(() => {
        pixel.style.display = "none";
      }, animationStepDuration * 1000 + index * staggerDuration);
    });
  };

  return (
    <div
      ref={containerRef}
      className={`${className} relative overflow-hidden w-full rounded-2xl h-[400px] celular:h-[250px] bg-gray-900`}
      style={style}
    >
      <div className="absolute inset-0 w-full h-full first-content flex justify-center items-center">
        {firstContent}
      </div>
      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[4] flex justify-center items-center"
        style={{ display: "none" }}
      >
        {secondContent}
      </div>
      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[10]"
      />
    </div>
  );
}

export default PixelTransition;
