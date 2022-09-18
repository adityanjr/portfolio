import React from "react";

const Header = () => {
  return (
    <nav className="space-x-10">
      <ul className="flex flex-row space-x-4 md:space-x-5 md:text-xl justify-center md:justify-end font-thin">
        <li>
          <a
            href="#projects"
            className="py-3 px-6 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="py-3 px-6 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="./Resume - Aditya Singh.pdf"
            target="_blank"
            rel="noreferrer"
            className="py-3 px-6 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://blog-adityanjr.netlify.app/"
            className="py-2 px-6 hover:bg-blue-500 focus:bg-gray rounded-lg bg-gray"
          >
            blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
