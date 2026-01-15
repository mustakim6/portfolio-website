import React from 'react';

const SkillItem = ({ icon, title, text }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-[0_8px_25px_rgba(26,209,165,0.45)] transition-all duration-300 hover:-translate-y-1">
      <div className="card-body items-center text-center gap-3">
        
        {/* Icon */}
        <div className="text-4xl">
          {icon}
        </div>

        {/* Title */}
        <h2 className="card-title text-lg md:text-xl font-semibold">
          {title}
        </h2>

        {/* Text */}
        <p className="text-sm md:text-base leading-relaxed text-gray-300 ">
          {text}
        </p>

      </div>
    </div>
  );
};


export default SkillItem;