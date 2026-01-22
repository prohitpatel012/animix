'use client'

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { BiMenu, BiSearch } from 'react-icons/bi';
import { CgCloseR } from 'react-icons/cg';
import { IoTerminalSharp } from 'react-icons/io5';
import HeaderSearchModal from './SearchModal';

const menuOptions = [
    { name: 'Components', href: '/components-hub' },
    { name: 'Templates', href: '/templates' },
    { name: 'Blog', href: '/blog' }
];

import { useAuthStore } from '@/lib/store/authStore';

// ... (imports remain)

function Header() {
    const [activeOption, setActiveOption] = useState('');
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Auth state with hydration safe pattern
    const authUser = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const user = mounted ? authUser : null;

    return (
        <>
            <motion.header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800'
                    : 'bg-white dark:bg-black border-b border-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className='flex items-center gap-2 group'>
                                <div className='bg-black dark:bg-white text-white dark:text-black w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform'>
                                    A
                                </div>
                                <span className='text-xl font-bold tracking-tight text-neutral-900 dark:text-white'>Animix</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {menuOptions.map((option) => (
                                <Link
                                    key={option.name}
                                    href={option.href}
                                    onClick={() => setActiveOption(option.name)}
                                    className={`text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${activeOption === option.name
                                        ? 'text-black dark:text-white'
                                        : 'text-neutral-500'
                                        }`}
                                >
                                    {option.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSearchModalOpen(true)}
                                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-500 bg-neutral-100 dark:bg-neutral-900 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors w-64"
                            >
                                <BiSearch className='w-4 h-4' />
                                <span>Search...</span>
                                <span className="ml-auto text-xs text-neutral-400">⌘K</span>
                            </button>

                            {/* Auth Actions */}
                            {user ? (
                                <div className="hidden md:flex items-center gap-4">
                                    <div className="flex flex-col items-end">
                                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                            {user.name}
                                        </span>
                                        <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
                                            {user.role}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => logout()}
                                        className="text-sm text-red-600 hover:text-red-700 font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    href="/login"
                                    className="hidden md:block text-sm font-medium text-neutral-900 dark:text-white hover:text-blue-600 transition-colors"
                                >
                                    Log in
                                </Link>
                            )}

                            <button
                                className='md:hidden p-2 text-neutral-600 dark:text-neutral-300'
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <BiMenu className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} user={user} logout={logout} />
                )}
            </AnimatePresence>

            <HeaderSearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
        </>
    )
}

export default Header

const MobileMenu = ({ isOpen, onClose, user, logout }: { isOpen: boolean, onClose: () => void, user: any, logout: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className='fixed inset-0 z-[60] bg-white dark:bg-black p-6'
        >
            <div className='flex justify-between items-center mb-8'>
                <div className="flex items-center gap-2">
                    <div className='bg-black dark:bg-white text-white dark:text-black w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg'>
                        A
                    </div>
                    <span className='text-xl font-bold text-neutral-900 dark:text-white'>Animix</span>
                </div>
                <button onClick={onClose} className="p-2 text-neutral-500 hover:text-black dark:hover:text-white">
                    <CgCloseR className="w-6 h-6" />
                </button>
            </div>

            <nav className='flex flex-col gap-6'>
                {menuOptions.map((option) => (
                    <Link
                        key={option.name}
                        href={option.href}
                        onClick={onClose}
                        className='text-2xl font-semibold text-neutral-900 dark:text-white hover:text-neutral-500 transition-colors'
                    >
                        {option.name}
                    </Link>
                ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4">
                {user ? (
                    <>
                        <div className="flex items-center gap-2">
                            <div className="text-xl font-medium text-neutral-900 dark:text-white">
                                {user.name}
                            </div>
                            <span className="text-xs uppercase font-bold tracking-wider text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                                {user.role}
                            </span>
                        </div>
                        <button
                            onClick={() => { logout(); onClose(); }}
                            className="text-lg font-medium text-red-600 text-left"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link
                        href="/login"
                        onClick={onClose}
                        className='text-xl font-semibold text-blue-600 dark:text-blue-400'
                    >
                        Sign in
                    </Link>
                )}
            </div>
        </motion.div>
    )
}



