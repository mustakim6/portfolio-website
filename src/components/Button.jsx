import React from 'react';

const Button = ({btnText, btnId, icon}) => {
    return (
       <button id={btnId} className="btn rounded-3xl bg-[#009fa7] hover:bg-[#025f64] btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.8)]"> {icon}{btnText} </button>
    );
};

export default Button;