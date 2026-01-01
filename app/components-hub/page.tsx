'use client'

import React, { useState } from 'react'
import MainComponentArea from '../../components/MainComponentArea'
import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'
import { buttonComponents } from '@/ShowOnUi/buttonComponents'
import { cardsComponents } from '@/ShowOnUi/cardsComponents'
import { motion } from 'motion/react'

function ComponentsHub() {
  const [category, setCategory] = useState('Buttons')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  let activeList: any[] = []
  if (category === 'Buttons') activeList = buttonComponents
  else if (category === 'Cards') activeList = cardsComponents

  const selectedComponent = activeList.find((c) => c.id === selectedId)

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="
            text-center
            px-3
            py-4
            lg:py-8
            text-lg
            lg:text-3xl
            font-semibold
            tracking-tight
            text-neutral-900
          "
        >
          Animix UI provides the component collection for faster development.
        </motion.h1>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-8 grid-cols-1 gap-y-6">
        {/* Sidebar */}
        <div className="hidden lg:inline">
          <Sidebar
            active={category}
            setActive={(v) => {
              setCategory(v)
              setSelectedId(null)
            }}
          />
        </div>

{/* Phone View Items */}



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
    </div>
  )
}

export default ComponentsHub
