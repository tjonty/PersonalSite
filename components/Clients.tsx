"use client";

import React from "react";

import { skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skills = () => {
  return (
    <section className="py-20">
      <h1 className="heading">
        <span className="lg:text-7xl text-purple">Skills</span>
      </h1>

      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center md:max-w-60 max-w-32 gap-2">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="md:w-10 w-5"
                />
                <p className="text-start text-white-100 font-semibold">
                  {skill.name}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
