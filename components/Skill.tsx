import React from 'react'
import { motion } from "framer-motion";
import { Skill } from '../typing';
import { urlFor } from '../sanity';
type Props = {
  directionLeft: boolean;
  skill: Skill
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial = {{
            x : directionLeft ? -200 : 200,
            opacity: 0
        }}
        whileInView = {{opacity: 1, x: 0}}
        transition={{duration: 1}}
        viewport={{ once: true }}
        src={urlFor(skill.image).url()}
        className='rounded-full border w-24 h-24 border-gray-500 object-contain p-2
        xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 first-letter 
        ease-in-out group-hover:bg-gray-300 h-24 w-24 xl:w-28 xl:h-28 rounded-full z-0'>
            <div className='flex justify-center items-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill