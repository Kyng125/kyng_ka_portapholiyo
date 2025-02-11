"use client";

import React from "react";
import { useRouter } from "next/navigation";

const skills = [
  { name: "Programming", link: "/programming" },
  { name: "Writing", link: "/writing" },
  { name: "Social Media", link: "/social-media" }
];

const Options = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="h-12 min-w-32 m-5 text-center flex items-center justify-center font-semibold rounded-full border-2 border-white text-xs sm:text-sm cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-customGold to-white hover:scale-110 duration-300"
          onClick={() => router.push(skill.link)}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default Options;
