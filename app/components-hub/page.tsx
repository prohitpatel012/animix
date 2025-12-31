'use client'


import React, { useState } from 'react'
import MainComponentArea from '../../components/MainComponentArea'
import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'
import { buttonComponents } from '@/ShowOnUi/buttonComponents'
import { cardsComponents } from '@/ShowOnUi/cardsComponents'


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
                <h1 className='text-xl font-medium max-w-md md:max-w-2xl mx-auto tracking-tight py-2'>Components hub page has been build for faster devolopement.</h1>
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