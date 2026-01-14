import React from 'react';

const SkillCard = ({cardTitle, cardText, img1, img2}) => {
    return (
        <div className="card bg-base-100 w-60 shadow-sm">

        <figure className=" hover-gallery max-w-60">

          <img src={img1} />
          <img src={img2} />
          
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardText}</p>
        </div>
        
      </div>
    );
};

export default SkillCard;