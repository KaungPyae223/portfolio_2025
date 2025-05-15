import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const homeContact = gsap.timeline({
        scrollTrigger: {
          trigger: ".contactContainer",
          start: "top 75%",
        },
      });

      homeContact
        .from(
          ".contactLeft",
          {
            x: -100,
            opacity: 0,
            duration: 1,
          },
          0
        )
        .from(
          ".contactUp",
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
            delay: 0.5,
            stagger: 0.3,
          },
          0
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="contactContainer grid md:grid-cols-2 grid-cols-1 lg:m-20 m-5 gap-10 lg:gap-5 md:gap-0">
      <div className="contactLeft">
        <p className="text-5xl leading-[5rem]">
          Get in touch <span className="md:block"></span>
          with me{" "}
          <span className="p-3 px-6 font-medium rounded-xl bg-yellow-300 dark:bg-yellow-500/20 dark:text-yellow-300">
            Anytime
          </span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-20 mt-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      </div>
      <div>
        <p className="text-3xl font-medium mb-5 contactUp">Contact Me</p>
        <p className="mb-4 text-xl contactUp">Kaung Pyae Aung</p>
        <table className="contactUp">
          <tbody>
            <tr>
              <td className="pe-10 font-semibold">Email:</td>
              <td>kaungpyaeaung8123@gmail.com</td>
            </tr>
            <tr>
              <td className="pe-10 font-semibold">Phone:</td>
              <td>09983167263, 095109983</td>
            </tr>
            <tr>
              <td className="pe-10 font-semibold">Address:</td>
              <td>No 28 NateBan Street,Kyee Myint Daing, Yangon</td>
            </tr>
            <tr>
              <td className="flex font-semibold items-start pe-10">
                <p>Availability:</p>
              </td>
              <td>Open for new projects and collaborations.</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-6 font-semibold contactUp">Follow on Social Media</p>
        <div className="flex flex-row my-3 gap-6 contactUp">
          <a href="https://github.com/KaungPyae223">
            <img src="/GitHub.png" className="size-8" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100013951484585">
            <img src="/Facebook.png" className="size-8" />
          </a>
          <a href="https://www.linkedin.com/in/kaung-pyae-908324250/">
            <img src="/Linkedin.png" className="size-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
