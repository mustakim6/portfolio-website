import React from "react";
import profile from "../assets/profile.jpg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div id='hero' className="flex flex-col-reverse md:flex-row my-2 md:w-[90%] mx-auto ">

      {/* div for content and short intro start*/}
      <div className=" md:max-w-[60%] flex flex-col justify-center md:p-2">
        
        <h1 className="md:text-3xl lg:text-5xl font-bold mb-2">Hi, I’m Mustakim Billah</h1>
        <h3 className="md:text-2xl font-semibold">
          Frontend Developer | <span className="text-[#61DBFB]">React </span>&
          <span className="text-[#38BDF8]"> Tailwind CSS</span>
        </h3>
        <p className="md:text-[17px] mt-3">
          I build responsive, user-friendly web interfaces using modern frontend
          technologies. Currently seeking a Junior Frontend Developer /
          Internship opportunity to gain real-world industry experience.
        </p>

        {/* call to action buttons div start */}
        <div className="flex gap-4 my-2">
            <a href="#projects"><Button btnText={'View Projects'}></Button></a>

            <Button btnText={'Download Resume'}></Button>
            
           
        </div>
        {/* cta buttons div end */}

      </div>
      {/* div for content and short intro end*/}

      {/* div for image  start here*/}
      <div className=" md:ml-36">
        <div className="flex justify-center">
          <img
            src={profile}
            className="w-32 md:w-48 lg:w-64 h-auto rounded-full "
            alt="profile_photo"
          />
        </div>
      </div>
      {/* div for image  end here*/}

    </div>
  );
};

export default Hero;
