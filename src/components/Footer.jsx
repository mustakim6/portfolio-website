import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUp } from "./motionjs/motion";
const Footer = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h1 className="text-sm md:text-base text-gray-300 leading-relaxed text-center mt-2 py-6 bg-black/60 rounded">
        © 2026 Mustakim Billah. All rights reserved.
      </h1>
    </motion.div>
  );
};

export default Footer;
