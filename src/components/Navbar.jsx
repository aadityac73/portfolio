import React from "react";

const Navbar = () => {
  return (
    <nav className="flex h-[17vh] justify-around items-center">
      <h1 className="text-3xl tracking-wide">
        <a href="#">Aditya Chavan</a>
      </h1>
      <ul className="flex gap-[2rem] text-2xl">
        <li>
          <a
            className="hover:text-[#808080] hover:underline hover:underline-offset-[1rem] hover:decoration-[#808080]"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#808080] hover:underline hover:underline-offset-[1rem] hover:decoration-[#808080]"
            href="#experience"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#808080] hover:underline hover:underline-offset-[1rem] hover:decoration-[#808080]"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-[#808080] hover:underline hover:underline-offset-[1rem] hover:decoration-[#808080]"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
