import React from "react";
import SkillCard from "../components/SkillCard";
import html1 from "../assets/html1.jpg";
import html2 from "../assets/html2.jpg";
import css1 from "../assets/css1.jpg";
import css2 from "../assets/css2.jpg";
import js1 from "../assets/js1.jpg";
import js2 from "../assets/js2.jpg";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.jpg";
import tailwind1 from "../assets/tailwind1.jpg";
import tailwind2 from "../assets/tailwind2.jpg";
import daisyui1 from "../assets/daisyui1.png";
import daisyui2 from "../assets/daisyui2.jpg";
import SkillsSection from "./SkillsSection";
import SectionTitle from "../components/SectionTitle";
// eslint-disable-next-line no-unused-vars
import { motion} from "framer-motion";
import { fadeUp, item, stagChildrens } from "../components/motionjs/motion";



const Skills = () => {
 
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="skills"
    >
      <SectionTitle
        heading="Skills"
        subHeading="An overview of the technologies and tools I use to build modern, responsive, and scalable web applications."
      ></SectionTitle>

      {/* container for all skill card start here */}
      <motion.div 
      variants={stagChildrens}


      className=" md:max-w-5xl  px-4 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10  place-items-center">
        <motion.div
        variants={item}
        whileHover="hover"
        >
          <SkillCard
        
          cardTitle="HTML5"
          cardText="semantic and accessible markup"
          img1={html1}
          img2={html2}
        ></SkillCard>
        </motion.div>

      <motion.div
      variants={item}
      whileHover="hover"
      >
          <SkillCard
          cardTitle="CSS3"
          cardText="layouts, animations, modern styling"
          img1={css1}
          img2={css2}
        ></SkillCard>
      </motion.div>

       <motion.div
       variants={item}
       whileHover="hover"
       >
         <SkillCard
          cardTitle="JavaScript (ES6+)"
          cardText="clean, modular, interactive logic"
          img1={js1}
          img2={js2}
        ></SkillCard>
       </motion.div>


        <motion.div
       variants={item}
       whileHover="hover"        
        
        >
          <SkillCard
          cardTitle="ReactJs"
          cardText="component-based UI development"
          img1={react1}
          img2={react2}
        ></SkillCard>
        </motion.div>


        <motion.div
        variants={item}
       whileHover="hover" 
        
        >
          <SkillCard
          cardTitle="Tailwind CSS"
          cardText="utility-first, responsive design"
          img1={tailwind1}
          img2={tailwind2}
        ></SkillCard>
        </motion.div>
       
       <motion.div
       variants={item}
       whileHover="hover"
       >
         <SkillCard
          cardTitle="DaisyUI"
          cardText="component library built on top of Tailwind"
          img1={daisyui1}
          img2={daisyui2}
        ></SkillCard>
       </motion.div>

      </motion.div>
      {/* container for all skill card end here */}

      <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      >
        <SkillsSection></SkillsSection>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
