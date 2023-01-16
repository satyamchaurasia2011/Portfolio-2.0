import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typing";
import BackgroundCircles from "./BackgroundCircles";
type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "Developer",
      "Self Motivator",
      "Creator && Innovator",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-8">
      <BackgroundCircles />
      <img
        className="relative rounded-full w-32 h-32 object-cover mx-auto"
        src={urlFor(pageInfo?.image).url()}
        alt="profile"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-4 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3"> {text}</span>
          <Cursor cursorColor="#0af7ef" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            {" "}
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
