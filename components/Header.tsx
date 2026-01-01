'use client'

import { AnimatePresence } from 'motion/react';
import Link from 'next/link'
import React, { useState } from 'react'
import { BiBasket, BiCloset, BiMenu, BiSearch, BiUser } from 'react-icons/bi';
import { TbWorldSearch } from "react-icons/tb";
import { motion } from 'motion/react'
import { CgCloseR } from 'react-icons/cg';
import { IoTerminalSharp } from 'react-icons/io5';

const menuOptions = [
    { name: 'ComponentsHub', href: '/components-hub' },
    { name: 'TemplesHub', href: '/templates-hub' },
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
                        <span className='text-white bg-black px-2 py-1 rounded-md'>AA</span>
                        <p className='text-black font-bold text-xl hidden md:inline'>Antigravity UI Library</p>
                    </Link>

                </section>

                <section className="md:flex items-center space-x-2 hidden">
                    {menuOptions.map((option) => (
                        <Link
                            key={option.name}
                            href={option.href}
                            onClick={() => setActiveOption(option.name)}
                            className={`text-md font-medium transition-colors ${activeOption === option.name ? 'text-black font-bold' : 'text-gray-500 hover:text-black'
                                }`}
                        >
                            {option.name}
                        </Link>
                    ))}
                </section>
            </div>


            <section className="flex items-center space-x-2">


                <div onClick={() => setIsSearchModalOpen(true)}>
                    <button className='border border-gray-300 rounded-md p-2 flex items-center space-x-2'>
                        <BiSearch className='size-6' />
                        <input type="text" placeholder='Search' className='outline-none w-full h-full' />
                        <TbWorldSearch className='size-6' />
                    </button>


                </div>
                {isSearchModalOpen && (
                    <SearchModal
                        isOpen={isSearchModalOpen}
                        onClose={() => setIsSearchModalOpen(false)}
                    />
                )}

                <div>
                    <button className='border border-gray-300 rounded-md p-2 flex items-center space-x-2'>
                        <BiBasket className='size-6' />
                    </button>
                </div>

                <div className='hidden md:inline'>
                    <button className='border border-gray-300 rounded-md px-4 py-2 flex items-center space-x-2'

                    >
                        {/* <BiUser className='size-6' /> */}

                        Login
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



const SearchModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg relative" onClick={(e) => e.stopPropagation()}>
                <h1 className="text-2xl font-bold">Search Modal</h1>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}



const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

    const [activeOption, setActiveOption] = useState('Home');
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


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



                            {/* List Down all the components */}


                        </div>




                        {/* Menu Items */}



                        {/* --------------------------------- */}



                        {/* Component Option and items */}

                    </motion.div>
                )
            }

        </AnimatePresence>


    )
}
