"use client";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ProjectCard from "@/features/public/ProjectCard";
import { useGetBestProject } from "../hooks/useGetBestProject";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MyProject = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".homeProjectTitle", {
        scrollTrigger: {
          trigger: ".homeProjectTitle",
          start: "top 85%",
        },
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".homeProjectViewMore", {
        scrollTrigger: {
          trigger: ".homeProjectViewMore",
          start: "top 90%",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power1.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const router = useRouter();

  type ProjectItem = {
    Projects: {
      id: number;
      image: string;
      name: string;
      description: string;
      frontend: string;
      backend: string;
      demo: string;
      tech: string;
    };
  };

  const data: ProjectItem[] = useGetBestProject();

  return (
    <div className="lg:mx-auto max-w-6xl m-5 my-10 pt-20 transition-colors duration-300">
      <p className="text-3xl font-semibold text-center homeProjectTitle text-gray-800 dark:text-gray-100 transition-colors duration-300">
        My Best Projects
      </p>
      <div className="mt-16 gap-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data &&
          data.map((el, i) => (
            <motion.div
              className="project"
              key={el.Projects.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
            >
              <ProjectCard
                image={el.Projects.image}
                title={el.Projects.name}
                description={el.Projects.description}
                frontendLink={el.Projects.frontend}
                backendLink={el.Projects.backend}
                demoLink={el.Projects.demo}
                tech={el.Projects.tech?.split("/") || []}
              />
            </motion.div>
          ))}
      </div>
      <div
        onClick={() => router.push("/projects")}
        className="homeProjectViewMore mt-10 px-6 py-3 rounded-full bg-yellow-300 text-gray-800 dark:text-gray-900 hover:bg-yellow-700 dark:hover:bg-yellow-600 w-fit mx-auto cursor-pointer transition-all duration-300 hover:text-white dark:hover:text-white shadow-md"
      >
        View All Projects
      </div>
    </div>
  );
};

export default MyProject;
