"use client";

import { useState } from "react";
import { AnimatePresence, easeOut, motion } from "motion/react";

function AnimatedItemsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-gray-400 text-black font-bold rounded-sm"
        onClick={() => setIsModalOpen(true)}
      >
        Click Me
      </button>

      {/* Modal Code Here */}

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            onClick={() => setIsModalOpen(false)} // 👈 outside click
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()} // 👈 prevent close on modal click
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="bg-white p-4 rounded-sm 
                                              w-[20%]
  sm:w-[20%]
  md:w-[40%]
  lg:w-[60%]
  min-h-[30rem]
                           
                            
                            "
            >
              {/* Modal Content goes here  */}
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Animated Modal
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                <div className="py-6 flex-1">
                  <p className="text-gray-600 leading-relaxed">
                    This modal uses{" "}
                    <code className="bg-gray-100 px-1 rounded text-pink-500">
                      framer-motion
                    </code>{" "}
                    for smooth transitions. The backdrop fades in while the
                    modal scales up from 90% to 100%.
                  </p>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                    <h3 className="text-blue-800 font-medium mb-2">
                      Key Features:
                    </h3>
                    <ul className="list-disc list-inside text-blue-700 space-y-1">
                      <li>Smooth scale and opacity transitions</li>
                      <li>Backdrop click handling</li>
                      <li>Accessible focus management</li>
                      <li>Fully customizable styling</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AnimatedItemsModal;
