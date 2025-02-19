import socialLinks from "../ui/socialLinks.js";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-svh flex">
      <div className="w-1/2 flex flex-col items-center">
        <h1>Hi, I'm Brayhan Ninahuaman</h1>
        <p>
          A few months ago, I completed a state-funded scholarship, which helped
          me strengthen my interface development skills. I’m now focused on
          practicing, improving my portfolio, and looking for new job
          opportunities.
        </p>
        <div>
          <ul>
            {socialLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-yellow-500 hover:underline hover:underline-offset-8 cursor-pointer"
              >
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        src="/braynin.jpg"
        alt="braynin"
        width={200}
        height={200}
        className="w-1/2"
      ></Image>
    </section>
  );
}
