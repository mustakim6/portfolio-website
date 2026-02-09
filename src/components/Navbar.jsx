import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
   const [navOpen, setNavOpen] = useState(false); // mobile menu state

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (!isHovering && current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
const toggleNav = () => setNavOpen(!navOpen);
  return (
    <motion.nav
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      initial={{ y: -100 }}
      animate={{ y: hidden && !isHovering ? -100 : 0 }}
      transition={{
        duration: "1",
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className=" bg-black/20 hover:bg-black/60  w-full p-4 md:px-10 flex justify-between items-center  md:flex md:justify-between md:items-center rounded-xl sticky top-0 z-50 hover:shadow-[0_0_20px_2px_rgba(30,58,138,0.8)] hover:my-1 "
    >
      <div
        className="text-4xl font-bold bg-clip-text text-transparent 
        bg-linear-to-r from-[#00f1fd] to-[#0066ff]"
      >
        Portfolio
      </div>


     {/* desktop menu */}
      <div>
        <ul className=" hidden md:flex gap-10  text-text font-medium ">
          <li className="cursor-pointer transition-colors duration-300  hover:text-amber-600 hover:underline">
            <a href="#hero">Home</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#about">About Me</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#skills">Skills</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#projects">Projects</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#education">Education</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

       {/* Hamburger Icon */}
      <div className="md:hidden z-50" onClick={toggleNav}>
        {navOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* mobile menu */}
      <div  className={`md:hidden bg-black/90 w-full absolute left-0 transition-all duration-300 flex flex-col items-center gap-6 py-6 ${
          navOpen ? "top-20" : "-top-96"
        }`}>
        <ul className="md:flex gap-10  text-text font-medium ">
          <li className="cursor-pointer transition-colors duration-300  hover:text-amber-600 hover:underline">
            <a href="#hero">Home</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#about">About Me</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#skills">Skills</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#projects">Projects</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#education">Education</a>
          </li>

          <li className="cursor-pointer transition-colors duration-300 hover:text-amber-600 hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>



    </motion.nav>
  );
};

export default Navbar;
