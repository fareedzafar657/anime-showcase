import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <>
      <Image
        src={"/konoha.png"}
        alt="background"
        width={1920}
        height={1080}
        className="h-screen w-screen object-cover mask-fade-circle"
      />
      <div className="w-screen h-screen bg-gray-600/70 absolute inset-0" />
      
    </>
  );
};

export default BackgroundImage;
