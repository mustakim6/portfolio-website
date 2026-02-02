import React from "react";
import ProjectsImageContainer from "./ProjectsImageContainer";

const ProjectCard = ({websiteLink, aboutWebsite, websiteName, projectImg1, projectImg2, sourceCode}) => {
  return (
    <div className="group rounded-2xl bg-black/30 border border-white/10 p-5 shadow-md hover:shadow-[0_8px_25px_rgba(26,209,165,0.45)] transition-all duration-300 hover:-translate-y-1">
      {/* Project Image */}
      <div className=" overflow-hidden md:h-60 rounded-xl">
       
    <ProjectsImageContainer 
    projectImg1={projectImg1}
    projectImg2={projectImg2}
    ></ProjectsImageContainer>
    
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg md:text-xl font-semibold text-purple-400">
          {websiteName}
        </h3>

        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          {aboutWebsite}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400">
            React
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-teal-500/10 text-teal-400">
            Tailwind
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400">
            JavaScript
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-3">
          <a href={websiteLink} target="_blank" className="text-sm text-primary hover:underline">
            Live Demo
          </a>
          <a href={sourceCode}  className="text-sm text-gray-400 hover:text-white">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
