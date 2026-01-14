import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl lg:text-5xl text-center my-3 font-semibold border-3">
        About Me
      </h1>

      <div className="text-2xl  ">
        <p className="w-[70%]">
            I am a Computer Science and Engineering student with a strong interest
        in frontend web development. I have hands-on experience building
        responsive websites and web applications using <span className="bg-black/80">

           <span className="text-orange-600"> HTML</span>, <span className="text-blue-600"> CSS</span>, <span className="text-yellow-400"> JavaScript</span>,
        <span className="text-cyan-400"> React</span> and <span className="text-[#38BDF8]">Tailwind CSS </span> 
            </span>. <br />I enjoy turning design ideas into functional
        user interfaces and continuously improving my skills by working on
        real-world projects. <br /> I am currently looking for a Junior Developer or
        Internship position where I can contribute, learn from experienced
        developers, and grow professionally.
        </p>
        
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default About;
