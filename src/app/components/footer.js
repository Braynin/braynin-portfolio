import navOptions from "../ui/navOptions.js";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full h-72 px-14 text-white py-4 flex justify-between">
      <section className="w-1/2 px-20 border-r-4">
        <h3 className="text-2xl font-bold">Braynin</h3>
        <p className="my-4">
          Hello again, I hope you liked some part of my portfolio. If so, please
          contact me so we can get to know each other better and keep improving.
        </p>
        <p className="font-bold">brayhannb@gmail.com</p>
      </section>
      <section className="w-1/2 flex flex-col items-center">
        <h3>Quick Links</h3>
        <ul>
          {navOptions.map((option) => (
            <li
              key={option.name}
              className="hover:text-yellow-500 hover:underline hover:underline-offset-8 cursor-pointer"
            >
              <a href={option.url}>{option.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
