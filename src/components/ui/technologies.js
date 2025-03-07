import technologiesOptions from "../data/technologiesOptions";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="w-full h-auto flex flex-col items-center justify-center py-10 my-10"
    >
      <div>
        {technologiesOptions.map((option) => (
          <div key={option.title}>
            <h3 className="text-2xl font-bold">{option.title}</h3>
            <ul className="flex gap-2">
              {option.tecnologias.map((tecnologia) => (
                <li
                  key={`${option.title}-${tecnologia.name}`}
                  className="flex flex-col items-center gap-2"
                >
                  {tecnologia.icon}
                  <span>{tecnologia.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
