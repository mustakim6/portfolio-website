import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (!isHovering && current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      initial={{y:-100}}
      animate={{ y: hidden && !isHovering ? -100 : 0 }}
      transition={{ duration: '1', type: "spring", stiffness: 300, damping: 30 }}
      className=" bg-black/20 hover:bg-black/60  w-full p-4 md:px-10  md:flex md:justify-between md:items-center rounded-xl sticky top-0 z-50 hover:shadow-[0_0_20px_2px_rgba(30,58,138,0.8)] hover:my-1 "
    >
      <div
        className="text-4xl font-bold bg-clip-text text-transparent 
        bg-linear-to-r from-[#00f1fd] to-[#0066ff]"
      >
        Portfolio
      </div>

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
    </motion.nav>
  );
};

export default Navbar;
