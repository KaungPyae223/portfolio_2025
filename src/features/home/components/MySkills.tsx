"use client";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
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
    <div className="my-20 homeSkill p-10 rounded-xl mx-auto w-fit bg-white dark:bg-gray-800 shadow-xl dark:shadow-lg transition-colors duration-300">
      <p className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 transition-colors duration-300">
        My Technical Skills
      </p>
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 gap-10 place-items-center">
        <Image
          width={100}
          height={100}
          src="/JS.png"
          alt="JavaScript"
          className="size-16 skill-icon"
        />
        <Image
          width={100}
          height={100}
          src="/PHP.png"
          alt="PHP"
          className="size-16 skill-icon"
        />
        <Image
          width={100}
          height={100}
          src="/React.png"
          alt="React"
          className="size-16 skill-icon"
        />
        <Image
          width={100}
          height={100}
          src="/SQL.png"
          alt="SQL"
          className="size-16 skill-icon"
        />
        <Image
          width={100}
          height={100}
          src="/CSS.svg"
          alt="CSS"
          className="size-16 skill-icon"
        />
        <Image
          width={100}
          height={100}
          src="/Tailwind.svg"
          alt="Tailwind"
          className="size-16 skill-icon"
        />
        <Image
          width={100}
          height={100}
          src="/laravel.svg"
          alt="Laravel"
          className="size-18 skill-icon"
        />
        <Image
          width={100}
          height={100}
          src="/nextjs.svg"
          alt="Next js"
          className="size-18 skill-icon"
        />
      </div>
    </div>
  );
};

export default MySkills;
