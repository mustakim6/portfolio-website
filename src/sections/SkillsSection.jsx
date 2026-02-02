import React from "react";
import {
  FaReact,
  FaTools,
  FaPalette,
  FaCloudDownloadAlt,
  FaRoute,
  FaUserShield,
} from "react-icons/fa";
import SkillItem from "../components/SkillItem";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto px-4">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-10">
        Practical Development Experience
      </h2>

      {/* additional skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillItem
          icon={<FaReact className="text-cyan-400" />}
          title="Frontend Development"
          text="HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, daisyUI"
        />

        <SkillItem
          icon={<FaCloudDownloadAlt className="text-sky-400" />}
          title="API Integration"
          text="Integrated REST APIs using Fetch API and Axios, handled async data, error states, loading indicators, and dynamic UI updates."
        />

        <SkillItem
          icon={<FaUserShield className="text-yellow-400" />}
          title="User Authentication & Management"
          text="Implemented user authentication and management using Firebase Authentication, including login, signup, protected routes, and role-based access."
        />

        <SkillItem
          icon={<FaRoute className="text-purple-400" />}
          title="Client-Side Routing"
          text="Built single-page application navigation using React Router, including nested routes."
        />
        {/* dynamic routing, and protected routes */}

        <SkillItem
          icon={<FaPalette className="text-pink-400" />}
          title="UI & Responsive Design"
          text="Mobile-first design, Flexbox, Grid, responsive layouts, basic UI/UX"
        />

        <SkillItem
          icon={<FaTools className="text-emerald-400" />}
          title="Tools & Workflow"
          text="Basic Git & GitHub, VS Code, browser dev tools, clean project structure and deploy in vercel"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
