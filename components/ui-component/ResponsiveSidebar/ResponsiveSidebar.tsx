"use client"

import Link from "next/link"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

function ResponsiveHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
      sublinks: [
        { name: "Our Story", link: "/about/story" },
        { name: "Team", link: "/about/team" },
      ],
    },
    {
      name: "Services",
      link: "/services",
      sublinks: [
        { name: "Web Development", link: "/services/web" },
        { name: "Mobile Apps", link: "/services/mobile" },
        { name: "UI/UX Design", link: "/services/design" },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  const isActive = (link: string) =>
    pathname === link || (link !== "/" && pathname.startsWith(link))

  return (
    <header className="border-b border-gray-200 relative bg-white z-50 w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between py-3 px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Image
          src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=500"
          alt="Logo"
          width={32}
          height={28}
          className="rounded-md"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.link}
                className={`flex items-center gap-1 transition-colors ${isActive(item.link)
                  ? "font-bold border-b-4 border-b-gray-400 border-wi "
                  : "text-gray-700 hover:text-blue-500"
                  }`}
              >
                {item.name}
                {item.sublinks && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </Link>


              {/* Desktop Dropdown */}
              <AnimatePresence>
                {item.sublinks && activeMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-96 min-h-96 p-4
                    "

                  >
                    {item.sublinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.link}
                        className="block py-2 text-sm text-gray-700 hover:text-blue-500 borde"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center space-x-2 border rounded px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input placeholder="Search" className="outline-none text-sm" />
          </div>
          <Link href="/login" className="text-black font-medium border rounded px-2 py-1 bg-yellow-300  ">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 space-y-4 max-h-screen">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === item.name ? null : item.name
                      )
                    }
                    className="flex w-full justify-between items-center text-2xl font-bold py-2 
                     
                    "
                  >
                    {item.name}
                    {item.sublinks && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                  </button>

                  {/* Mobile Sublinks */}
                  <AnimatePresence>
                    {item.sublinks && activeMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 space-y-2"
                      >
                        {item.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.link}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/login" className="
              absolute bottom-20 left-2 py-2  px-4 bg-yellow-300 rounded-md text-black font-medium
              ">
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default ResponsiveHeader
