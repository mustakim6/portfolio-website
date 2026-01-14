import React from "react";
import hcrtd from "../assets/hcrtd.mp4";

const About = () => {
  return (
    <div id='about'>
        
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center my-4 font-semibold ">
        About Me
      </h1>

{/* about paragraph n image container start here */}
      <div className="text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-start flex flex-col md:flex-row items-center p-2">

        <p className="md:w-[68%]">
          I am a Computer Science and Engineering student with a strong interest
          in frontend web development. I have hands-on experience building
          responsive websites and web applications using{" "}
          <span className="bg-black/80">
            <span className="text-orange-600"> HTML</span>,{" "}
            <span className="text-blue-600"> CSS</span>,{" "}
            <span className="text-yellow-400"> JavaScript</span>,
            <span className="text-cyan-400"> React</span>,{" "}
            <span className="text-[#38BDF8]"> Tailwind CSS </span> and{" "}
            <span className="text-teal-400"> DaisyUI</span>
          </span>
          . <br />I enjoy turning design ideas into functional user interfaces
          and continuously improving my skills by working on real-world
          projects. <br /> I am currently looking for a Junior Developer or
          Internship position where I can contribute, learn from experienced
          developers, and grow professionally.
        </p>

{/*div for add a video, it contains logos of html,css,react,tailwindcss and js start here*/}
        <div className="w-48 md:ml-28 my-3 ">
          <video autoPlay loop muted playsInline className="">
            <source src={hcrtd} type="video/mp4" />
          </video>
        </div>
{/*div for add a video, it contains logos of html,css,react,tailwindcss and js end here*/}

      </div>
{/* about paragraph n image container end here */}

    </div>
  );
};

export default About;
