"use client";
import ProjectIntro from "@/features/projects/components/ProjectIngro";
import ProjectList from "@/features/projects/components/ProjectList";
import React from "react";

const page = () => {
  return (
    <div>
      <ProjectIntro />
      <ProjectList />
    </div>
  );
};

export default page;
