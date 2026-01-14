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

const Skills = () => {
  return (
    <div id="skills">

      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center my-6 font-semibold ">
        Skills
      </h1>

      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
        <SkillCard
          cardTitle="HTML5"
          cardText="semantic and accessible markup"
          img1={html1}
          img2={html2}
        ></SkillCard>
        <SkillCard
          cardTitle="CSS3"
          cardText="layouts, animations, modern styling"
          img1={css1}
          img2={css2}
        ></SkillCard>
        <SkillCard
          cardTitle="JavaScript (ES6+)"
          cardText="clean, modular, interactive logic"
          img1={js1}
          img2={js2}
        ></SkillCard>
        <SkillCard
          cardTitle="ReactJs"
          cardText="component-based UI development"
          img1={react1}
          img2={react2}
        ></SkillCard>
        <SkillCard
          cardTitle="Tailwind CSS"
          cardText="utility-first, responsive design"
          img1={tailwind1}
          img2={tailwind2}
        ></SkillCard>
        <SkillCard
          cardTitle="DaisyUI"
          cardText="component library built on top of Tailwind"
          img1={daisyui1}
          img2={daisyui2}
        ></SkillCard>
      </div>
    </div>
  );
};

export default Skills;
