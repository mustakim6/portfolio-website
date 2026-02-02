import React from "react";
import SectionTitle from "../components/SectionTitle";

const Education = () => {
  return (
    <div>
      <section id="education" className="max-w-6xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          
          <SectionTitle heading='Education'></SectionTitle>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            
            Through my academic journey, I have gained a good understanding of computer science and software development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* University Card */}
          <div className="rounded-2xl bg-black/30 border border-white/10 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-purple-400">
              Bachelor of Science in Computer Science & Engineering
            </h3>
            <p className="mt-2 text-gray-300 font-semibold">
              Daffodil International University
            </p>
            <p className="text-sm text-gray-400">2022 – 2025</p>
            <p className="text-sm text-gray-400">DSC,Ashulia,Savar,Dhaka.</p>

            <div className="mt-4">
              <p className="text-sm text-gray-300 font-medium">
                Key Focus Areas:
              </p>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>Web Development</li>
                <li>Database Management Systems</li>
                <li>Operating Systems</li>
                <li> Data Mining and Machine Learning</li>
                <li>Data Structure and Algorithm</li>
              </ul>
            </div>
          </div>

          {/* College Card */}
          <div className="rounded-2xl bg-black/30 border border-white/10 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-purple-400">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="mt-2 text-gray-300 font-semibold">
              Shahid Syed Nazrul Islam College
            </p>
            <p className="text-sm text-gray-400">2017 – 2019</p>
            <p className="text-sm text-gray-400">Mymensingh</p>

            <div className="mt-4">
              <p className="text-sm text-gray-300 font-medium">Background:</p>
              <p className="mt-1 text-sm text-gray-400">
                Science group with a strong foundation in mathematics, physics,
                and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
