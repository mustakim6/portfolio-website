import React from "react";
import profile from "../assets/profile.jpeg";
import Button from "../components/Button";
import { FaDownload } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      id="hero"
      className="flex flex-col-reverse md:flex-row my-6 md:w-[90%] mx-auto "
    >
      {/* div for content and short intro start*/}
      <div className=" md:max-w-[60%] flex flex-col justify-center md:p-2">
        <motion.h1
          style={{
            background:
              "linear-gradient(90deg, #ff1aff, #00e5ff, #39ff14, #ffea00)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0 , x:-100}}
          animate={{ opacity: 1 , x:0}}
          transition={{ duration: 2 }}
          className="md:text-3xl lg:text-5xl font-bold mb-2"
        >
          Hi, I’m Mustakim Billah
        </motion.h1>
        <h3 className="md:text-2xl font-semibold">
          Frontend Developer | <span className="text-[#61DBFB]">React </span>&
          <span className="text-[#38BDF8]"> Tailwind CSS</span>
        </h3>
        <p className="md:text-[17px] mt-3">
          I build responsive, user-friendly web interfaces using modern frontend
          technologies. Currently seeking a Junior Frontend Developer /
          Internship opportunity to gain real-world industry experience.
        </p>

        {/* call to action buttons div start */}
        <div className="flex gap-4 my-2">
          <motion.a
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            href="#projects"
          >
            <Button btnText="View Projects"></Button>
          </motion.a>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            
          >
            <a href="cv_mustakim.pdf" download>
              <Button
              btnText="Download Resume"
              icon={<FaDownload className="text-xl md:text-2xl lg:text-3xl " />}
            ></Button>
            </a>
          </motion.div>
        </div>
        {/* cta buttons div end */}
      </div>
      {/* div for content and short intro end*/}

      {/* div for image  start here*/}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" md:ml-36"
      >
        <div className="flex justify-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full blur-2xl bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-70 animate-pulse"></div>

            <img
              src={profile}
              alt="profile_photo"
              className="relative w-32 md:w-48 lg:w-64 h-auto rounded-full border-4 border-white/10"
            />
          </div>
        </div>
      </motion.div>
      {/* div for image  end here*/}
    </motion.div>
  );
};

export default Hero;
