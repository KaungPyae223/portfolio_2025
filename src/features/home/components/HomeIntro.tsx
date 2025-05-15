"use client";

import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

const HomeIntro = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".name", { opacity: 0, y: 50 });
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
    <div className="flex flex-col items-center py-16 mx-5 transition-colors duration-300">
      <p className="name text-5xl p-5 rounded-xl bg-yellow-300 dark:bg-yellow-500 text-black dark:text-gray-900 font-semibold transition-colors duration-300">
        I&apos;m Kaung Pyae Aung
      </p>

      <p className="name text-5xl font-semibold my-12 hidden md:block text-gray-800 dark:text-gray-100 transition-colors duration-300">
        Full stack web developer
      </p>

      <p className="name md:w-1/2 md:mt-3 mt-8 text-lg text-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
        I recently finished the Bachelor of Computing and have an experience in
        web development with HTML, CSS, JavaScript, React, Next.js and Laravel.
        I have completed several projects, including portfolio websites,
        e-commerce, e-learning platforms, and others.
      </p>

      <div className="name mt-10 flex flex-wrap justify-center gap-6">
        <Link
          href={"/about"}
          className="bg-yellow-300 dark:bg-yellow-500 hover:bg-yellow-400 dark:hover:bg-yellow-600 text-black dark:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          About Me
        </Link>
        <Link
          href={"/projects"}
          className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
};

export default HomeIntro;
