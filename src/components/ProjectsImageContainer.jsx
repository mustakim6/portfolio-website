import React from "react";

const ProjectsImageContainer = ({projectImg1, projectImg2}) => {
  return (
    <div>
      <figure className=" hover-gallery w-full ">
        <img src={projectImg1} />
        <img src={projectImg2} />
      </figure>
    </div>
  );
};

export default ProjectsImageContainer;
