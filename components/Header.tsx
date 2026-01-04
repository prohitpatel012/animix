'use client'

import { AnimatePresence } from 'motion/react';
import Link from 'next/link'
import React, { useState } from 'react'
import { BiBasket, BiCloset, BiMenu, BiSearch, BiUser } from 'react-icons/bi';
import { TbWorldSearch } from "react-icons/tb";
import { motion } from 'motion/react'
import { CgCloseR } from 'react-icons/cg';
import { IoTerminalSharp } from 'react-icons/io5';
import { buttonComponents } from '@/ShowOnUi/buttonComponents';
import { cardsComponents } from '@/ShowOnUi/cardsComponents';
import SearchModal from './SearchModal';

const menuOptions = [
    { name: 'ComponentsHub', href: '/components-hub' },
    { name: 'Templates', href: '/templates' },
    { name: 'Blog', href: '/blog' }
];


function Header() {

    const [activeOption, setActiveOption] = useState('Home');
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);







    return (
        <div className="py-4 px-2 flex justify-between items-center bg-white">

            {/* Logo */}

            <div className="flex items-center space-x-8">
                <section>
                    <Link href="/" className='flex space-x-2 items-center '>
                        <span className='text-white bg-black px-2 py-1 rounded-md'>AX</span>
                        <p className='text-black font-bold text-xl hidden md:inline'>Animix UI</p>
                    </Link>

                </section>

                <section className="md:flex items-center space-x-2 hidden">
                    {menuOptions.map((option) => (
                        <Link
                            key={option.name}
                            href={option.href}
                            onClick={() => setActiveOption(option.name)}
                            className={`
    relative text-sm font-medium transition-colors duration-200
    ${activeOption === option.name
                                    ? 'text-neutral-900'
                                    : 'text-neutral-500 hover:text-neutral-900'}
  `}
                        >
                            {option.name}

                            {activeOption === option.name && (
                                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-neutral-900" />
                            )}
                        </Link>

                    ))}
                </section>
            </div>


            <section className="flex items-center space-x-2">

                {isSearchModalOpen && (
                    <SearchModal
                        isOpen={isSearchModalOpen}
                        onClose={() => setIsSearchModalOpen(false)}
                    />
                )}

                <div onClick={() => setIsSearchModalOpen(true)}>
                    <button className='border border-gray-300 rounded-md p-2 flex items-center space-x-2'>
                        <BiSearch className='size-6' />
                        <input type="text" placeholder='Search' className='outline-none w-full h-full' />
                        <TbWorldSearch className='size-6' />
                    </button>
                </div>





                <div className='md:hidden'>
                    <button
                        className='border border-gray-300 rounded-md p-2 flex items-center'
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <BiMenu className='size-6' />
                    </button>
                    {isMobileMenuOpen && (
                        <MobileMenu
                            isOpen={isMobileMenuOpen}
                            onClose={() => setIsMobileMenuOpen(false)}
                        />
                    )}
                </div>
            </section>



        </div>
    )
}

export default Header






const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

    const [activeOption, setActiveOption] = useState('Home');
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const [category, setCategory] = useState('Buttons')
    const [selectedId, setSelectedId] = useState<string | null>(null)

    let activeList: any[] = []
    if (category === 'Buttons') activeList = buttonComponents
    else if (category === 'Cards') activeList = cardsComponents

    const selectedComponent = activeList.find((c) => c.id === selectedId)


    return (
        <AnimatePresence>

            {
                isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className='min-h-screen bg-white fixed top-0 left-0 z-50 w-full p-4'
                    >

                        {/* Logo */}
                        <div className=' flex justify-between items-center '>
                            <Link href="/" className='flex space-x-2 items-center '>
                                <span className='text-white bg-black px-2 py-1 rounded-md'>AX</span>

                            </Link>
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => onClose()}
                            >
                                <div className="flex items-center space-x-2"><CgCloseR className="size-6" />
                                    <span>Close</span></div>
                            </motion.button>

                        </div>
                        <div className=' flex flex-col gap-4 mt-10'>
                            {menuOptions.map((option) => (
                                <Link
                                    key={option.name}
                                    href={option.href}
                                    onClick={() => {
                                        setActiveOption(option.name);
                                        onClose();
                                    }}
                                    className={`text-md font-medium transition-colors ${activeOption === option.name ? 'text-black font-bold' : 'text-gray-500 hover:text-black'
                                        }`}
                                >
                                    {option.name}
                                </Link>
                            ))}
                        </div>


                        <hr className='my-10' />
                        <div>
                            <button className='flex items-center space-x-2'><span>Components</span> <IoTerminalSharp />

                            </button>




                        </div>







                    </motion.div>
                )
            }

        </AnimatePresence>


    )
}



