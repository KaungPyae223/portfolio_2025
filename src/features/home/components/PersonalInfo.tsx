"use client";

import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const PersonalInfo = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".profileContainer",
          start: "top center",
        },
      });

      tl.from(".left", {
        x: -100,
        opacity: 0,
        duration: 1.2,
      }).from(
        ".right",
        {
          x: 100,
          opacity: 0,
          duration: 1.2,
        },
        0
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="profileContainer my-20 px-6 lg:px-20 grid md:grid-cols-2 gap-16 overflow-hidden items-center transition-colors duration-300">
      <div className="left flex justify-center">
        <Image
          className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
          src="https://res.cloudinary.com/dzkoc2zf7/image/upload/v1746976058/cropped-Kaung_Pyae_Aung-removebg-preview_1_1_oefxf8.png"
          alt="Profile"
          width={500}
          height={500}
        />
      </div>

      <div className="right space-y-6 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <h2 className="text-4xl font-bold text-yellow-600 dark:text-yellow-400">
          Short Bio
        </h2>

        <div className="space-y-3">
          <div className="grid grid-cols-[120px_1fr] gap-y-2 text-base">
            <span className="font-semibold">Name:</span>
            <span>Kaung Pyae Aung</span>

            <span className="font-semibold">Gender:</span>
            <span>Male</span>

            <span className="font-semibold">DOB:</span>
            <span>8 December 2003</span>

            <span className="font-semibold">Address:</span>
            <span>No 28 NateBan Street, Kyee Myint Daing, Yangon</span>

            <span className="font-semibold">Education:</span>
            <ul className="list-disc ps-5 col-span-1 md:col-span-1">
              <li>High School Graduate (2019 -2020)</li>
              <li>NCC Level 4 Diploma in Computing (2022 - 2023)</li>
              <li>NCC Level 5 Diploma in Computing (2023 - 2024)</li>
              <li>
                Bachelor of Computing in University of Greenwich (2024 - 2025)
              </li>
              <li>MMSIT SWD (2023)</li>
              <li>MMSIT WAD (2024)</li>
            </ul>

            <span className="font-semibold">Experiences:</span>
            <ul className="list-disc ps-5 col-span-1 md:col-span-1">
              <li>KMD School Projects</li>
              <li>Personal Projects</li>
              <li>MMSIT Laravel Software Development Intern (2024 - 2025)</li>
              <li>ET-Verdict Software Development Intern (2025 - )</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition-colors duration-300 shadow-md">
            View Details
          </button>
          <button className="px-6 py-2 border border-yellow-500 text-gray-700 dark:text-gray-200 hover:text-white hover:bg-yellow-500 dark:hover:bg-yellow-600 rounded-full transition-colors duration-300 shadow-md">
            View CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
