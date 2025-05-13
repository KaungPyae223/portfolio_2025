"use client";

import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ProjectCard from "@/features/public/ProjectCard";
gsap.registerPlugin(ScrollTrigger);

const MyProject = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".homeProjectTitle", {
        scrollTrigger: {
          trigger: ".homeProjectTitle",
          start: "center center",
        },
        opacity: 0,
        duration: 0.6,
      });

      gsap.from(".project", {
        scrollTrigger: {
          trigger: ".project",
          start: "25% 75%",
        },
        opacity: 0,
        y: 100,
        ease: "power1.out",
        duration: 0.8,
        stagger: 0.3,
      });

      gsap.from(".homeProjectViewMore", {
        scrollTrigger: {
          trigger: ".homeProjectViewMore",
          start: "center 75%",
        },
        opacity: 0,
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="lg:mx-auto max-w-6xl m-5 my-10 pt-20">
      <p className="text-3xl font-semibold text-center homeProjectTitle">
        My Best Projects
      </p>
      <div className="mt-16 gap-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="project">
          <ProjectCard
            image={
              "https://images.unsplash.com/photo-1745946596837-0393d87a1706?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Hello World"}
            description={"lorem10"}
            frontendLink={"/"}
            backendLink={"/"}
            demoLink={"/"}
            tech={["html", "css"]}
            key={"12"}
          />
        </div>
        <div className="project">
          <ProjectCard
            image={
              "https://images.unsplash.com/photo-1745946596837-0393d87a1706?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Hello World"}
            description={"lorem10"}
            frontendLink={"/"}
            backendLink={"/"}
            demoLink={"/"}
            tech={["html", "css"]}
            key={"12"}
          />
        </div>
        <div className="project">
          <ProjectCard
            image={
              "https://images.unsplash.com/photo-1745946596837-0393d87a1706?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Hello World"}
            description={"lorem10"}
            frontendLink={"/"}
            backendLink={"/"}
            demoLink={"/"}
            tech={["html", "css"]}
            key={"12"}
          />
        </div>
        <div className="project">
          <ProjectCard
            image={
              "https://images.unsplash.com/photo-1745946596837-0393d87a1706?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Hello World"}
            description={"lorem10"}
            frontendLink={"/"}
            backendLink={"/"}
            demoLink={"/"}
            tech={["html", "css"]}
            key={"12"}
          />
        </div>
        <div className="project">
          <ProjectCard
            image={
              "https://images.unsplash.com/photo-1745946596837-0393d87a1706?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Hello World"}
            description={"lorem10"}
            frontendLink={"/"}
            backendLink={"/"}
            demoLink={"/"}
            tech={["html", "css"]}
            key={"12"}
          />
        </div>
        <div className="project">
          <ProjectCard
            image={
              "https://images.unsplash.com/photo-1745946596837-0393d87a1706?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"Hello World"}
            description={"lorem10"}
            frontendLink={"/"}
            backendLink={"/"}
            demoLink={"/"}
            tech={["html", "css"]}
            key={"12"}
          />
        </div>
      </div>
      <div className="homeProjectViewMore mt-10 px-6 py-3 rounded-full bg-yellow-300 w-fit mx-auto cursor-pointer  hover:bg-yellow-800 duration-300 hover:text-white">
        View All Products
      </div>
    </div>
  );
};

export default MyProject;
