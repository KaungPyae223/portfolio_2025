"use client";

import gsap from "gsap";
import React, { useEffect } from "react";

const HomeIntro = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".name", { opacity: 0, y: 50 }); // Reset state
      gsap.to(".name", {
        delay: 0.3,
        duration: 0.8,
        stagger: 0.4,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center py-16 mx-5">
      <p className="name text-5xl p-5 rounded-xl bg-yellow-300 font-semibold">
        Hey, I'm Kaung Pyae Aung
      </p>
      <p className="name text-5xl font-semibold my-12 hidden md:block">
        Full stack web developer
      </p>
      <p className="name md:w-1/2 md:mt-3 mt-8 text-lg text-center">
        I recently finished the Bachelor of Computing and have an experience in
        web development with HTML, CSS, JavaScript, React, Next.js and Laravel.
        I have completed several projects, including portfolio websites, e-commerce,
        e-learning platforms, and others.
      </p>

      
      <div className="name mt-10 flex flex-wrap justify-center gap-6">
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg transition duration-300">
          About Me
        </button>
        <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          View My Projects
        </button>
      </div>
    </div>
  );
};

export default HomeIntro;
