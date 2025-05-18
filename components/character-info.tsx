import React from "react";

const CharacterInfo = () => {
  return (
    <div className="flex items-start flex-col justify-start mt-10 lg:mt-0 ml-10 lg:ml-0 lg:justify-center h-full ">
      <div className="relative">
        <p className="font-shuriken uppercase text-center z-10 [text-shadow:6px_6px_0_rgba(0,0,0,0.4)]">
          <span className="block text-4xl lg:text-7xl">Naruto</span>
          <span className="block text-3xl lg:text-6xl pl-[25px]">Uzumaki</span>
        </p>
        <div className="relative mt-3">
          <div className="h-[3px] lg:h-[5px] w-[100px] lg:w-[250px] bg-black translate-x-[25px] z-10 [box-shadow:4px_4px_0_rgba(0,0,0,0.4)]" />
        </div>
      </div>
      <div className="mt-4 -ml-1 lg:-ml-4">
        <p className="font-bubble text-xs lg:text-base w-[150px] lg:w-[300px] opacity-80">
          Naruto Uzumaki is a prominent ninja of Konohagakure, known for his
          unwavering determination to become Hokage and his eventual success as
          the Seventh Hokage
        </p>
      </div>
    </div>
  );
};

export default CharacterInfo;
