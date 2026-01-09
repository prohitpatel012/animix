'use client'

import React, { useState } from 'react'
import MainComponentArea from '../../components/MainComponentArea'
import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'
import { buttonComponents } from '@/ShowOnUi/buttonComponents'
import { cardsComponents } from '@/ShowOnUi/cardsComponents'
import { motion, AnimatePresence } from 'motion/react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { modalComponent } from '@/ShowOnUi/modalComponent'
import { responsiveSidebarComponents } from '@/ShowOnUi/responsiveSidebarComponents'

function ComponentsHub() {
  const [category, setCategory] = useState('Buttons')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  let activeList: any[] = []
  if (category === 'Buttons') activeList = buttonComponents
  else if (category === 'Cards') activeList = cardsComponents
  else if (category === 'Modal') activeList = modalComponent
  else if (category === 'Sidebar') activeList = responsiveSidebarComponents

  return (
    <div className=" bg-neutral-50">
    
      {/* Mobile Category Button */}
      <div className="px-4 mt-4">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 rounded-md bg-neutral-700 text-white px-4 py-2 text-sm font-medium"
        >
          <HiMenuAlt2 className="size-5" />
          Component Menu
        </button>
      </div>

      {/* Main Layout */}
      <div className="gap-y-6">
       
        {/* Component Area */}
        <div className="">
          <MainComponentArea
            components={activeList}
            onSelect={setSelectedId}
          />
        </div>

       
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 "
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-72 bg-white z-50 shadow-xl "
            >
              <div className="p-4 border-b font-semibold text-neutral-900">
                Categories
              </div>

              <Sidebar
                active={category}
                setActive={(v) => {
                  setCategory(v)
                  setSelectedId(null)
                  setIsDrawerOpen(false) // close drawer on select
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ComponentsHub
