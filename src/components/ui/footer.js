import navOptions from "../data/navOptions.js";
import socialLinks from "../data/socialLinks.js";

export default function Footer() {
  return (
    <footer className="bg-acero w-full h-72 px-14 py-4 flex celular:flex-col justify-between">
      <section className="w-1/2 celular:w-full px-20 border-r-4 celular:border-r-0 celular:border-b-4 celular:px-0 celular:pb-5">
        <h3 className="text-2xl font-bold">Braynin</h3>
        <p className="my-4 font-semibold celular:text-sm celular:w-full">
          Hola de nuevo, espero que te haya gustado alguna parte de mi
          portafolio. Si es así, por favor contáctame para que podamos
          conocernos mejor y seguir mejorando.
        </p>
        <div className="flex left-0">
          <ul className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-cielo hover:underline hover:underline-offset-8 cursor-pointer"
              >
                <a
                  href={link.url}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {link.name}
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-1/2 flex flex-col items-center celular:hidden">
        <h3 className="text-2xl font-bold">Quick Links</h3>
        <ul>
          {navOptions.map((option) => (
            <li
              key={option.name}
              className="font-semibold hover:text-azul hover:underline hover:underline-offset-8 cursor-pointer"
            >
              <a href={option.url}>{option.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
