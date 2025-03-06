"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {

  return (
    <div className="py-20" id="projects">
      <h1 className="heading uppercase" >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-12 flex flex-wrap items-center justify-center px-4 gap-32 lg:gap-16 ">
        {projects.map((item, index) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={index}
          >
            <PinContainer
              title="Project"
              href=""
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[30vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full bg-[#13162D] lg:rounded-3xl">
                    <img
                      src="/bg.png"
                      alt="Background Image"
                      className="hidden sm:block w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={item.img}
                    alt="Cover"
                    className="z-10 absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Out
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </a>
            </PinContainer>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;