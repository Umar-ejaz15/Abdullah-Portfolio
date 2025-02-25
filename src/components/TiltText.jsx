import React from "react";

const TiltText = () => {
  return (
    <div className="flex flex-col  mt-32 ml-10 tracking-tighter  ">
      <h1 className="sm:text-[6vw] md:text-[10vw] text-[15vw] leading-none uppercase font-[anzo1]">
        I am <span className="font-[anzo2] text-purple-700">Dark Mode</span>
      </h1>
      <h1 className="text-[11.5vw] leading-none uppercase font-[anzo1]">Designer</h1>
      <h1 className="text-[4vw] leading-none uppercase font-[anzo2]">To hire</h1>
    </div>
  );
};

export default TiltText;
