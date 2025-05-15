import Image from "next/image";
import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  tech = [],
  frontendLink,
  backendLink,
  demoLink,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03] h-full">
      <Image
        height={400}
        width={400}
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover"
        loading="lazy"
      />
      <div className="flex flex-col p-5 flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 pt-1.5 text-justify">
          {description}
        </p>

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {tech.map((t, index) => (
              <span
                key={index}
                className="bg-yellow-200 dark:bg-yellow-500/20 text-sm px-3 py-1 rounded-full font-medium hover:scale-105 transition-transform duration-200 dark:text-yellow-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-3 mt-auto">
          {frontendLink && (
            <a
              href={frontendLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} frontend code`}
              className="text-sm text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Frontend
            </a>
          )}
          {backendLink && (
            <a
              href={backendLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} backend code`}
              className="text-sm text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Backend
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="text-sm text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
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
