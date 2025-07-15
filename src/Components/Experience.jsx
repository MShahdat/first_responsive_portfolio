import React from 'react';
import {
  FaCss3,
  FaFigma,
  FaGoogle,
  FaHtml5,
  FaJs,
  FaReact,
  FaAmazon
} from 'react-icons/fa';
import { SiMongodb, SiRedis, SiNetflix } from 'react-icons/si';

const Experience = () => {
  return (
    <div id='experience' className="text-white bg-[#0f172a] py-12 px-4 md:px-24">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Experience</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
        {/* Left Grid: 3x3 Tech Icons */}
        <div className="grid grid-cols-3 gap-6 place-items-center">
          <div className="bg-black p-4 rounded-xl">
            <FaHtml5 color="#E34F26" size={40} />
          </div>
          <div className="bg-black p-4 rounded-xl">
            <FaHtml5 color="#F16529" size={40} />
          </div>
          <div className="bg-black p-4 rounded-xl">
            <FaCss3 color="#1572B6" size={40} />
          </div>
          <div className="bg-black p-4 rounded-xl">
            <FaReact color="#61DAFB" size={40} />
          </div>
          <div className="bg-black p-4 rounded-xl">
            <FaJs color="#F7DF1E" size={40} />
          </div>
          <div className="bg-black p-4 rounded-xl">
            <FaFigma color="#F24E1E" size={40} />
          </div>
          <div className="bg-black p-4 rounded-xl">
            <SiMongodb color="#47A248" size={40} />
          </div>
          <div className="bg-black p-4 rounded-xl">
            <SiRedis color="#D82C20" size={40} />
          </div>
          {/* Add more if needed */}
        </div>

        {/* Right Grid: Experience Cards */}
        <div className="flex flex-col gap-6 justify-center h-full">
          {/* Google */}
          <div className="bg-slate-900 rounded-lg p-5 flex items-start gap-4">
            <FaGoogle size={40} color="#4285F4" />
            <div>
              <h2 className="font-semibold">Software Engineer, Google</h2>
              <p className="text-sm text-gray-400">Sept 2023 - Present</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Work as software developer</li>
                <li>Senior SDE developer</li>
              </ul>
            </div>
          </div>

          {/* Netflix */}
          <div className="bg-slate-900 rounded-lg p-5 flex items-start gap-4">
            <SiNetflix size={40} color="#E50914" />
            <div>
              <h2 className="font-semibold">Software Engineer, Netflix</h2>
              <p className="text-sm text-gray-400">Sept 2023 - Present</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Work as software developer</li>
                <li>Senior SDE developer</li>
              </ul>
            </div>
          </div>

          {/* Amazon */}
          <div className="bg-slate-900 rounded-lg p-5 flex items-start gap-4">
            <FaAmazon size={40} color="#FF9900" />
            <div>
              <h2 className="font-semibold">Software Engineer, Amazon</h2>
              <p className="text-sm text-gray-400">Sept 2023 - Present</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Work as software developer</li>
                <li>Senior SDE developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
