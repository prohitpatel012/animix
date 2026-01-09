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
        Click Here to Open Modal
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            onClick={() => setIsModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="
                w-full
                max-w-lg
                sm:max-w-xl
                md:max-w-2xl
                lg:max-w-3xl
                bg-white
                rounded-lg
                shadow-xl
                max-h-[90vh]
                flex
                flex-col
                overflow-hidden
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Animated Modal
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-5">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  This modal uses{" "}
                  <code className="bg-gray-100 px-1 rounded text-pink-500">
                    framer-motion
                  </code>{" "}
                  for smooth transitions. The backdrop fades in while the modal
                  scales up smoothly.
                </p>

                <div className="mt-6 p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="text-blue-800 font-medium mb-2">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm sm:text-base">
                    <li>Smooth scale and opacity transitions</li>
                    <li>Backdrop click handling</li>
                    <li>Mobile-friendly scrolling</li>
                    <li>Fully responsive layout</li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 px-6 py-4 border-t">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition"
                >
                  Close
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto px-6 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AnimatedItemsModal;
