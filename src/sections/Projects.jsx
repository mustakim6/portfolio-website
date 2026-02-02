import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import cryptoImg1 from "../assets/cryptoImg1.png";
import cryptoImg2 from "../assets/cryptoImg2.png";
import agencyImg1 from "../assets/agencyImg1.png";
import agencyImg2 from "../assets/agencyImg2.png";

const Projects = () => {
  return (
    <div id="projects">
      <SectionTitle
        heading="Projects"
        subHeading="Projects I built while learning and practicing modern web development
        technologies. These showcase my understanding of core concepts, hands-on
        implementation, and continuous improvement."
      ></SectionTitle>

      {/*div for projects cards start  */}

      <div className=" max-w-7xl mx-auto px-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center">
        <ProjectCard
          projectImg1={cryptoImg1}
          projectImg2={cryptoImg2}
          websiteName="Crypto Web Landing-Page"
          websiteLink="https://mustakim6.github.io/crypto-web-landingpage/"
          aboutWebsite="A sleek and responsive landing page designed for cryptocurrency platforms, showcasing essential features and services in a modern layout. By following Crypto Next.js Theme from ThemeWagon"
          sourceCode='https://github.com/mustakim6/crypto-web-landingpage'
        />

        <ProjectCard
          projectImg1={agencyImg1}
          projectImg2={agencyImg2}
          websiteName="Web platform for agency"
          websiteLink="https://mustakim6.github.io/agency-client/#connect"
          aboutWebsite="A modern web-platform for an agency where both provider and consumer can perform their tasks without any problem."
          sourceCode='https://github.com/mustakim6/agency-client'
          
        />
        
      </div>

      {/*div for projects cards end here  */}
    </div>
  );
};

export default Projects;
