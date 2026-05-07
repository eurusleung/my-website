import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="h-screen relative flex items-start justify-center">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
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

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative z-10 px-5 pt-52">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-6">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            展览 · 旅行 · 阅读 · 编程
          </p>

          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-purple leading-tight">
            把生活过成自己喜欢的样子
          </h1>

          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Hi! 我是 Eurus 梁入元，一个在广州的展览项目经理，正在探索 AI 与编程的世界。
          </p>

          <a href="#about" className="mt-4">
            <MagicButton
              title="了解更多"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
