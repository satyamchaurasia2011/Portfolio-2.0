import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-6xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="pic"
        className="mt-28 -mb-4 md:mb-0 flex-shrink-0 w-56 h-56 object-cover 
        md:w-64 md:h-96 rounded-full md:rounded-lg"
      />
      <div className="space-y-10 px-0 md:px-10 md:mt-24">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#0af7ef]/50">little</span>{" "}
          background
        </h4>
        <p className="text-md">{pageInfo.backgroundInformation}</p>
      </div>
    </div>
  );
}
