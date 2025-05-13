import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  frontendLink,
  backendLink,
  demoLink,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition hover:scale-105 duration-300">
      <img src={image} alt={title} className="w-full h-[250px] object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, index) => (
            <span
              key={index}
              className="bg-yellow-200 text-sm px-3 py-1 rounded-full font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-3">
          {frontendLink && (
            <a
              href={frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Frontend
            </a>
          )}
          {backendLink && (
            <a
              href={backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Backend
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
