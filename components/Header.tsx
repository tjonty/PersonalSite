import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { trackEvent } from '@/lib/firebase';

const Header = () => {
  function downloadResume() {
    trackEvent('button_clicked', {
      section_id: 'Resume',
    })
    const link = document.createElement("a");
    link.href = "/Jonty Tejani.pdf";
    link.download = "/Jonty Tejani.pdf";
    link.click();
  }


  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
            Software Engineer
          </p>
          <TextGenerateEffect
            words="Jonty Tejani"
            className="text-center uppercase text-[40px] md:text-5xl lg:text-8xl"
          />

          <p className="text-left italic md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl">
            Coder. Engineer.
          </p>

          <MagicButton
            handleClick={() => { downloadResume() }}
            title="RESUME"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
