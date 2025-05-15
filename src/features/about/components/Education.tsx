import React, { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import EducationTimeline from "./EducationTimeLine";

const Education = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const educationTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: ".educationContainer",
          start: "center 65%",
        },
      });

      educationTimeLine
        .from(
          ".educationleft",
          {
            x: -100,
            opacity: 0,
            duration: 1.2,
          },
          0
        )
        .from(
          ".educationUp",
          {
            y: -70,
            opacity: 0,
            duration: 0.5,
            stagger: 0.5,
            delay: 0.3,
          },
          0
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden m-20 lg:mx-28 mx-5 grid md:grid-cols-2 grid-cols-1 gap-10  pt-3 educationContainer">
      <div className="flex justify-center educationleft">
        <Image
          width={500}
          height={500}
          alt="Skill Photo"
          className="xl:w-2/3 w-full h-full object-cover rounded-lg shadow-lg" // Added some styling for the image
          src={"/Education.png"}
        />
      </div>
      <div className="row-start-1 md:col-start-2">
        <p className="text-5xl mb-10 educationUp leading-[5rem]">
          My{" "}
          <span className="p-3 px-6 font-medium rounded-xl dark:bg-yellow-500/20 dark:text-yellow-300 bg-yellow-300">
            Education
          </span>{" "}
          Journey
        </p>
        <EducationTimeline />
      </div>
    </div>
  );
};

export default Education;
