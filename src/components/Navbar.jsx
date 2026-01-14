import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className=" bg-[#393E46] w-fit md:w-full p-4 md:flex md:justify-between md:items-center rounded">

        <div className="text-xl font-semibold ">Mustakim Billah</div>

        <ul className="md:flex gap-16  text-text font-medium ">
          <li className="cursor-pointer transition-colors duration-300  hover:text-amber-600 hover:underline">
            <a href="#hero">Home</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#about">About Me</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#skills">Skills</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300hover:text-amber-600 hover:underline">
            <a href="#projects">Projects</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#education">Education</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300hover:text-amber-600 hover:underline">
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
