import React from "react";
// import { motion } from "framer-motion";
type Props = {};

 export default function BackgroundCircles({}: Props) {
  return (
    <div
    // initial={{
    //   opacity: 0,
    // }}
    // animate={{
    //   scale : [1,2,2,3,1],
    //   opacity : [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
    //   borderRadius : ["20%", "20%", "50%", "80%", "20%"],
    // }}
    // transition={{
    //   duration : 2.5
    // }}
    className="relative flex justify-center items-center">
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-[21rem] animate-ping" />
      {/* <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-[21rem]" /> */}
      <div className="absolute border border-[#333333] rounded-full h-[350px] w-[350px] md:h-[500px] md:w-[500px] mt-[21rem]" />
      <div className="rounded-full border border-[#0af7ef] opacity-20 h-[450px] w-[450px] md:h-[650px] md:w-[650px] absolute mt-[21rem] animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[550px] w-[550px] md:h-[800px] md:w-[800px] mt-[21rem]" />
    </div>
  );
}
