import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";

// Define the skill data as an array of objects
const skillsData = [
  {
    title: "HTML",
    description:
      "HTML is basic of a web development and I know the most of HTML elements and in diploma assignments have a knowledge of W3C validation.",
  },
  {
    title: "CSS",
    description:
      "In diploma assignments, I made a website only using a CSS and have knowledge of most use CSS properties.",
  },
  {
    title: "Java Script",
    description:
      "From MMSIT I have studied the vanilla js well and I think I can use the java script well.",
  },
  {
    title: "Tailwind",
    description:
      "The mostly use CSS library is tailwind and have experience of using popular tailwind plugins like material tailwind, preline, daisy ui.",
  },
  {
    title: "React",
    description:
      "React is the I mostly used javascript framework. I have been used the popular React libraries such as GSAP, Framer motion, chartjs and others. I require many knowledge to expert the react but I think I can make the project react well.",
  },
];

const Skill = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const skillTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: ".skillsContainer",
          start: "center 65%",
        },
      });

      skillTimeLine
        .from(
          ".skillLeft",
          {
            x: -100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          0
        )
        .from(
          ".skillRight",
          {
            x: 100,
            opacity: 0,
            duration: 0.8,
          },
          0
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden m-20 lg:mx-20 mx-5 grid md:grid-cols-2 grid-cols-1 gap-10 pt-3 skillsContainer">
      <div>
        <p className="text-4xl md:text-5xl mb-10 skillLeft leading-tight md:leading-[5rem] font-sans text-gray-800 dark:text-white">
          My{" "}
          <span className="p-2 md:p-3 rounded-xl px-4 md:px-6 font-medium bg-yellow-300">
            Skills
          </span>{" "}
          Description
        </p>
        <div className="mt-16 pe-5">
          {skillsData.map((skill, index) => (
            <div
              key={index} // Using index as key
              className={`pb-3 skillLeft ${
                index === skillsData.length - 1
                  ? ""
                  : "border-b border-b-gray-300 dark:border-b-gray-700 mb-5"
              }`}
            >
              <h6 className="text-lg font-semibold text-blue-gray-900 dark:text-white leading-none">
                {skill.title}
              </h6>
              <p className="font-normal mt-1 text-gray-600 dark:text-gray-400 text-base">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-start skillRight">
        <Image
          width={500}
          height={500}
          alt="Skill Photo"
          className="xl:w-2/3 w-full object-cover rounded-lg shadow-lg"
          src={"/Skills.png"}
        />
      </div>
    </div>
  );
};

export default Skill;
