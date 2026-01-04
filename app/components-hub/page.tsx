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

function ComponentsHub() {
  const [category, setCategory] = useState('Buttons')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  let activeList: any[] = []
  if (category === 'Buttons') activeList = buttonComponents
  else if (category === 'Cards') activeList = cardsComponents
  else if (category === 'Modal') activeList = modalComponent

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center px-3 py-4 lg:py-8 text-lg lg:text-3xl font-semibold tracking-tight text-neutral-900"
      >
        Animix UI provides the component collection for faster development.
      </motion.h1>

      {/* Mobile Category Button */}
      <div className="lg:hidden px-4 mb-4">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium"
        >
          <HiMenuAlt2 className="size-5" />
          Categories
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-8 grid-cols-1 gap-y-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar
            active={category}
            setActive={(v) => {
              setCategory(v)
              setSelectedId(null)
            }}
          />
        </div>

        {/* Component Area */}
        <div className="col-span-5">
          <MainComponentArea
            components={activeList}
            onSelect={setSelectedId}
          />
        </div>

        {/* Feed */}
        <div className="col-span-2 hidden md:inline">
          <Feed />
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
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-72 bg-white z-50 shadow-xl lg:hidden"
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
