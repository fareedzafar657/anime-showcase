/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const TextReel = ({
  repeatedTexts,
  direction,
  className,
}: {
  repeatedTexts: any[];
  direction: any[];
  className?: string;
}) => {
  return (
    <motion.div
      className="flex gap-x-[200px] whitespace-nowrap"
      animate={{ x: direction }}
      transition={{
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...repeatedTexts, ...repeatedTexts].map((text, index) => (
        <p
          key={`filled-${index}`}
          className={clsx(
            "text-[70px] lg:text-[150px] text-black uppercase font-retro",
            className
          )}
        >
          {text}
        </p>
      ))}
    </motion.div>
  );
};

export default TextReel;
