"use client";
import Contact from "@/features/home/components/Contact";
import HomeIntro from "@/features/home/components/HomeIntro";
import MyProjects from "@/features/home/components/MyProjects";
import MySkills from "@/features/home/components/MySkills";
import PersonalInfo from "@/features/home/components/PersonalInfo";
import React from "react";

const page = () => {
  return (
    <div>
      <HomeIntro />
      <PersonalInfo />
      <MySkills />
      <MyProjects />
      <Contact />
    </div>
  );
};

export default page;
