"use client";
import React from "react";
import { motion } from "motion/react";

const SolidBars = () => {
  return (
    <div className="overflow-hidden h-screen w-screen flex items-center">
      <motion.div
        className="flex absolute"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="h-[300vh] rotate-[25deg] w-[45vw] bg-yellow-200 mx-2 ">
              <div className="plus_pattern w-full h-full mix-blend-multiply" />
            </div>
            <div className="h-[300vh] rotate-[25deg] w-[7vw] lg:w-[10vw] bg-transparent mx-2" />
            <div className="h-[300vh] rotate-[25deg] w-[20vw] lg:w-[10vw] bg-yellow-200 mx-2">
            <div className="plus_pattern w-full h-full mix-blend-multiply" />
            </div>
            <div className="h-[300vh] rotate-[25deg] w-[100vw] lg:w-[65vw] bg-transparent mx-2" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default SolidBars;
