import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import Items from "../typing";
type Props = {
  skills: Items.Skill[]
};

export default function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row overflow-hidden
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[16px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-4 md:gap-6 pt-36">
        {
          skills?.map((skill, index) => {
           return  <Skill key={skill._id} skill = {skill} directionLeft = {index < Math.round(skills.length/2)}/>
          })
        }
      </div>
    </motion.div>
  );
}
