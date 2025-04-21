import React from "react";
import htm_logo from '../assets/htm_logo.png';
import js_logo from '../assets/js_logo.png';
import node_logo from '../assets/node_logo.png';

const Skill = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="transition-all duration-300 ease-in-out hover:bg-red-400 p-4 rounded-lg">
            <img
              src={htm_logo}
              alt="HTML"
              className="w-[80%] sm:w-[300px] lg:w-[500px] mx-auto object-contain border-2 border-red-500 rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="transition-all duration-300 ease-in-out hover:bg-red-400 p-4 rounded-lg">
            <img
              src={js_logo}
              alt="JavaScript"
              className="w-[80%] sm:w-[300px] lg:w-[500px] mx-auto object-contain border-2 border-red-500 rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="transition-all duration-300 ease-in-out hover:bg-red-400 p-4 rounded-lg">
            <img
              src={node_logo}
              alt="Node.js"
              className="w-[80%] sm:w-[300px] lg:w-[500px] mx-auto object-contain border-2 border-red-500 rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
