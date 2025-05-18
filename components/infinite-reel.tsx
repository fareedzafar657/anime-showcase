"use client";

import React from "react";
import { motion } from "framer-motion";
import TextReel from "./text-reel";

const InfiniteReel = () => {
  const baseText = "Naruto Uzumaki";
  const repeatedTexts = new Array(5).fill(baseText);

  return (
    <div className="overflow-hidden h-screen w-screen flex items-center justify-end">
      <div className="bg-white w-[100vw] lg:w-[200vw] h-[20vh] lg:h-[45vh] lg:rotate-[45deg] overflow-hidden relative">
        {/* Background Pattern */}
        <motion.div
          animate={{ x: ["-10%", "0%"] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
          className="plus_pattern absolute h-full w-[300vh] mix-blend-multiply"
        />

        <div className=" flex flex-col justify-center items-center space-y-[-40px] lg:space-y-[-100px] -mt-[35px] lg:-mt-[65px]">
          <TextReel
            direction={["-60%", "60%"]}
            repeatedTexts={repeatedTexts}
          />

          <TextReel
            className="outline-text"
            direction={["60%", "-60%"]}
            repeatedTexts={repeatedTexts}
          />

          <TextReel
            direction={["-60%", "60%"]}
            repeatedTexts={repeatedTexts}
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteReel;
