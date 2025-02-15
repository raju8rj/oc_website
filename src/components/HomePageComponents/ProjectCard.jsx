import React from 'react';

const ProjectCard = ({ title, icon }) => {
  return (
    <div className="bg-[#0B0F1F] rounded-2xl p-8 flex flex-col items-center min-w-[250px] min-h-[350px] hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg ">
      <div className="bg-gradient-to-b from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] w-20 h-20 rounded-full p-4 mb-8 flex items-center justify-center">
        <img src={icon} alt={title} className="w-10 h-10" />
      </div>
      <h3 className="text-white text-center text-xl font-medium whitespace-pre-line leading-relaxed">
        {title}
      </h3>
    </div>
  );
};

export default ProjectCard;
