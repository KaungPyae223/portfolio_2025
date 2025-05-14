"use client";

import AboutIntro from "@/features/about/components/AboutIntro";
import Education from "@/features/about/components/Education";
import Skill from "@/features/about/components/Skill";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutIntro />
      <Education />
      <Skill />
      <p>Hello</p>
    </div>
  );
};

export default page;
