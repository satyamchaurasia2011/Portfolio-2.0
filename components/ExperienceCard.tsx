import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col items-center rounded-lg space-y-3 flex-shrink-0
    w-fit md:w-[600px]  snap-center bg-[#292929] pt-8 px-4 md:px-8 md:-mb-8
    lg:hover:opacity-100 lg:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full object-contain"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-4">
        <h4 className="text-xl md:text-3xl font-light">{experience.jobTitle}</h4>
        <p className="text-lg md:text-xl font-bold mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => {
            return (
              <img
                key={technology._id}
                className="h-7 w-7 md:h-10 md:w-10 rounded-full"
                src={urlFor(technology.image).url()}
                alt=""
              />
            );
          })}
        </div>
        <p className="uppercase p-2 md:py-5 text-gray-300">
          {experience.dateStarted} - {experience.dateEnded ? experience.dateEnded : "Present"}
        </p>
        <ul className="list-disc space-y-3 ml-4 md:ml-8 text-[13px] md:text-[15px] h-40">
          {experience?.points?.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
