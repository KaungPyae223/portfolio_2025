"use client";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const MySkills = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-icon", {
        scrollTrigger: {
          trigger: ".homeSkill",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <div className="my-20 homeSkill p-10 rounded-xl mx-auto w-fit bg-white shadow-xl">
      <p className="text-3xl font-semibold text-center">My Technical Skills</p>
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 gap-10 place-items-center">
        <img src="/JS.png" alt="JavaScript" className="size-16 skill-icon" />
        <img src="/PHP.png" alt="PHP" className="size-16 skill-icon" />
        <img src="/React.png" alt="React" className="size-16 skill-icon" />
        <img src="/SQL.png" alt="SQL" className="size-16 skill-icon" />
        <img src="/CSS.svg" alt="CSS" className="size-16 skill-icon" />
        <img
          src="/Tailwind.svg"
          alt="Tailwind"
          className="size-16 skill-icon"
        />
        <img
          src="/laravel.svg"
          alt="Laravel"
          className="size-18 skill-icon"
        />
        <img
          src="/nextjs.svg"
          alt="Next js"
          className="size-18 skill-icon"
        />
      </div>
    </div>
  );
};

export default MySkills;
