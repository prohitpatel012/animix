"use client";
import { motion } from "framer-motion";




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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>



      <button className="p-2 rounded-md bg-black text-white hover:bg-neutral-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5" />
        </svg>
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

      <button className="px-4 py-2 rounded-md text-white bg-linear-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
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
