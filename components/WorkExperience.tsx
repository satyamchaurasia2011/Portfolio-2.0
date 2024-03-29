import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typing";
type Props = {
  experiences: Experience[]
};

function WorkExperience({experiences}: Props) {
  const sortedExp  = experiences?.sort((a:Experience,b:Experience) => (Number(new Date(b.dateStarted)) - Number(new Date(a.dateStarted))))
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{duration : 1.5}}
      className="h-screen flex flex-col items-center justify-evenly relative
     overflow-hidden text-left md:flex-row mx-auto max-w-7xl px-3 md:px-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[16px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className=" w-full flex space-x-5  overflow-x-scroll scrollbar-track-gray-400/20
    scrollbar-thumb-[#0af7ef]/80 scrollbar-thin p-2 md:p-10 snap-x snap-mandatory mt-20">
        {
          sortedExp?.map(experience => {
            return <ExperienceCard key={experience._id} experience={experience}/>
          })
        }
      </div>
    </motion.div>
  );
}

export default WorkExperience;
