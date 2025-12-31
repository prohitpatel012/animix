'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { BiBasket, BiMenu, BiSearch, BiUser } from 'react-icons/bi';
import { TbWorldSearch } from "react-icons/tb";


function Header() {

    const [activeOption, setActiveOption] = useState('Home');
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const menuOptions = [
        { name: 'ComponentsHub', href: '/components-hub' },
        { name: 'TemplesHub', href: '/templates-hub' },
    ];


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
                    <BiMenu className='size-6' />
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