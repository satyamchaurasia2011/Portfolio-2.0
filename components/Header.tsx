import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typing";
type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-center md:justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center">
      <motion.div
        initial={{
          opacity: 0, 
          x: -500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center "
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              bgColor="transparent"
              fgColor="gray"
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 500,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url="https://satyamchaurasia.vercel.app/#contact"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
        <Link
          href="https://drive.google.com/file/d/100wAPVwfAFlfwwKFqVgSYOUKSX9hK7dT/view?usp=sharing"
          target="_blank"
          className="mx-10 hidden md:inline-flex"
        >
           <p className="uppercase text-sm text-gray-400">
            Resume
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
