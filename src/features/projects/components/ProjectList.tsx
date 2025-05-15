"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/features/public/ProjectCard";
import { useGetAllProjects } from "../hooks/useGetAllProjects";

const ProjectList = () => {
  type ProjectItem = {
    id: number;
    image: string;
    name: string;
    description: string;
    frontend: string;
    backend: string;
    demo: string;
    tech: string;
    type: string;
  };

  const data: ProjectItem[] = useGetAllProjects();

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? data
      : data.filter((project: ProjectItem) => project.type === activeFilter);

  const filters = ["all", "frontend", "backend"];

  return (
    <div className="lg:mx-auto max-w-6xl m-5 my-10 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex justify-center mb-10"
      >
        <div className="relative bg-gray-200 rounded-full p-1 flex gap-2">
          {filters.map((filter) => (
            <div
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative cursor-pointer z-10 w-1/3 px-6 py-2 flex items-center justify-center rounded-full font-medium transition-colors duration-300 ${
                activeFilter === filter ? "text-white" : "text-gray-700"
              }`}
            >
              <span className="z-10 mx-auto">
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </span>
              {filter === activeFilter && (
                <motion.div
                  layout
                  layoutId="switch-highlight"
                  className="absolute inset-0 bg-yellow-500 dark:bg-blue-600 rounded-full z-0"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 frontendContainer">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.name}
                description={project.description}
                frontendLink={project.frontend}
                backendLink={project.backend}
                demoLink={project.demo}
                tech={project.tech?.split("/") || []}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectList;
