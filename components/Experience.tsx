import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading uppercase">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 flex flex-col items-center justify-center gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="hidden md:flex flex-row items-center justify-between text-xl md:text-2xl font-bold">
                  <span className="text-sm md:text-md">{card.company}</span>
                  <span>{card.title}</span>
                  <span className="text-sm md:text-md">{card.duration}</span>
                </h1>
                <h1 className="flex md:hidden flex-col text-start text-xl md:text-2xl font-bold">
                  <span>{card.title}</span>
                  <span className="text-sm">
                    <span>{card.company}</span>
                    <span>{card.duration}</span>
                  </span>
                </h1>
                <hr className="m-3" />
                {card.desc}
                {card.lines.map((line, i) => (
                  <p key={i} className="text-start text-white-100 mt-3 font-semibold">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
