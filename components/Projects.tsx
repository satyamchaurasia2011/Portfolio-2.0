import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Link from "next/link";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-left overflow-hidden
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll scrollbar-track-gray-400/20
        scrollbar-thumb-[#0af7ef]/80 scrollbar-thin overflow-y-hidden snap-x 
        snap-mandatory z-20 mt-10"
      >
        {projects?.map((project) => {
          return (
            <div
              key={project._id}
              className=" w-screen flex flex-col flex-shrink-0 snap-center items-center 
            space-y-5 justify-center p-20 md:px-28 h-full"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                src={project?.image ? urlFor(project?.image)?.url() : "/"}
                alt=""
                className="w-auto max-h-56"
              />
              <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  {project.title}
                </h4>
                <div className="flex justify-center items-center space-x-4">
                  {project?.technologies?.map((tech) => {
                    return (
                      <img
                      key={tech._id}
                        src={urlFor(tech.image).url()}
                        className="h-12 w-12 rounded-full object-contain"
                      />
                    );
                  })}
                </div>

                <p className="text-lg text-center md:text-left">
                  {project.summary}
                </p>
                <Link href={project?.linkToBuild} target="_blank">
                  <button className="heroButton mt-4 text-white text-xs">Demo</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#0af7ef]/10 left-0 h-[500px] skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
