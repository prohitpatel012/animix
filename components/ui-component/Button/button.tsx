"use client";
import { motion } from "framer-motion";

import { BiArrowToRight, BiCopy } from "react-icons/bi";


export function PrimaryButton() {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <button className="px-4 py-2 rounded-md bg-black text-white hover:bg-neutral-800 transition">
        Primary Button
      </button>

      <button className="px-3 py-1.5 text-sm rounded-md bg-black text-white">
        Small
      </button>

      <button className="px-4 py-2 text-base rounded-md bg-black text-white">
        Medium
      </button>

      <button className="px-6 py-3 text-lg rounded-md bg-black text-white">
        Large
      </button>


      <button
        disabled
        className="px-4 py-2 rounded-md bg-black/40 text-white cursor-not-allowed"
      >
        Disabled
      </button>



      <button className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2">
        Continue
        <BiArrowToRight />
      </button>



      <button className="p-2 rounded-md bg-black text-white hover:bg-neutral-800">
        <BiCopy />
      </button>


      <button
        disabled
        className="px-4 py-2 rounded-md bg-black text-white flex items-center gap-2"
      >
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        Loading
      </button>


      <button className="w-full px-4 py-2 rounded-md bg-black text-white">
        Submit
      </button>

      <button className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
        Get Started
      </button>

      <button className="px-4 py-2 rounded-md border border-black text-black hover:bg-black hover:text-white transition">
        Primary Outline
      </button>




      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 rounded-md bg-black text-white"
      >
        Animated Button
      </motion.button>


    </div>
  )
}


export function AnimatedButton() {
  return (
    
    <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 rounded-md bg-black text-white"
      >
        Animated Button
      </motion.button>

  )
}




export function SecondaryButton() {
  return (
    <div className=''>
      <button className="px-4 py-2 rounded-md bg-black text-white">
        Secondary Button
      </button>
    </div>
  )
}
