import React from "react";

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center my-4 font-semibold text-[#00f1fd] ">
        {heading}
      </h1>
      <p className="text-sm md:text-base lg:text-lg leading-relaxed text-center my-6">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
