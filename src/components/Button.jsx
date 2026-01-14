import React from 'react';

const Button = ({btnText, btnId, icon}) => {
    return (
       <button id={btnId} className="btn bg-[#009fa7] hover:bg-[#025f64] btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> {icon}{btnText} </button>
    );
};

export default Button;