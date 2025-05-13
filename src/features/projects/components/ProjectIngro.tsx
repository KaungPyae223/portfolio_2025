import gsap from "gsap";
import React, { useEffect } from "react";

const ProjectIntro = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projectIntro", {
        y: 50,
        duration: 1.2,
        opacity: 0,
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  });
  return (
    <div className="m-20 my-40">
      <p className="text-5xl leading-[5rem] font-medium mb-10 text-center projectIntro">
        My Web Development{" "}
        <span className="rounded-lg p-3 px-6 font-medium bg-yellow-300">
          Projects
        </span>{" "}
      </p>
    </div>
  );
};

export default ProjectIntro;
