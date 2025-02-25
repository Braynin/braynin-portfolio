import navOptions from "../data/navOptions.js";

export default function Footer() {
  return (
    <footer className="bg-acero w-full h-72 px-14 py-4 flex justify-between">
      <section className="w-1/2 px-20 border-r-4">
        <h3 className="text-2xl font-bold">Braynin</h3>
        <p className="my-4 font-semibold">
          Hola de nuevo, espero que te haya gustado alguna parte de mi
          portafolio. Si es así, por favor contáctame para que podamos
          conocernos mejor y seguir mejorando.
        </p>
        <p className="font-bold">brayhannb@gmail.com</p>
      </section>
      <section className="w-1/2 flex flex-col items-center">
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
