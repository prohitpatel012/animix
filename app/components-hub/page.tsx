'use client'


import React, { useState } from 'react'
import MainComponentArea from '../../components/MainComponentArea'
import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'
import { buttonComponents } from '@/ShowOnUi/buttonComponents'
import { cardsComponents } from '@/ShowOnUi/cardsComponents'
import { motion } from 'motion/react'
import { IoTerminalSharp } from 'react-icons/io5'


function ComponentsHub() {

    const [category, setCategory] = useState("Buttons");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    let activeList: any[] = [];
    if (category === "Buttons") activeList = buttonComponents;
    else if (category === "Cards") activeList = cardsComponents;
    // else if (category === "Tooltips") activeList = tooltipComponents;


    const selectedComponent = activeList.find((c) => c.id === selectedId);



    return (
        <div className='min-h-screen'>
            {/* Headers Section */}
            {/* Whats you want to shows  */}
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, damping: 1, ease: "easeInOut" }}

                    className=' text-center px-2 py-2 text-lg lg:text-3xl font-bold text-gray-900 '>
                    Animix UI provides the component collection for faster development.
                </motion.h1>
            </div>

            {/* sidebar */}
            {/* Main */}

            <div className='grid lg:grid-cols-8 grid-cols-1'>
                <div className='hidden lg:inline'><Sidebar active={category}
                    setActive={(v) => {
                        setCategory(v);
                        setSelectedId(null);
                    }} />
                </div>


                <div className='col-span-5 '>
                    <MainComponentArea components={activeList}
                        onSelect={setSelectedId} />
                </div>
                <div className='col-span-2 hidden md:inline'><Feed /></div>

            </div>

            {/* another widgets page */}
        </div>
    )
}

export default ComponentsHub