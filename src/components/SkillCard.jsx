import React from "react";

const SkillCard = ({ cardTitle, cardText, img1, img2 }) => {
  return (
    <div
      className="w-65 sm:w-70 md:w-75 rounded-3xl bg-black/20 shadow-sm hover:shadow-[0_8px_25px_rgba(26,209,165,0.45)]
  transition-all
  duration-300 "
    >
      <figure className=" hover-gallery w-full p-2 ">
        <img className="rounded-xl" src={img1} />
        <img className="rounded-xl" src={img2} />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg md:text-xl font-semibold text-purple-400">
          {cardTitle}
        </h2>
        <p className="text-sm md:text-xl leading-relaxed text-gray-300">
          {cardText}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
