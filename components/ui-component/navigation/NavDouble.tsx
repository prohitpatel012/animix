"use client";

import { BiPhone, BiEnvelope, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

export default function NavDouble() {
    return (
        <div className="flex flex-col">
            {/* Top Bar */}
            <div className="bg-neutral-900 text-white text-xs py-2">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <span className="flex items-center gap-1"><BiPhone /> +1 (555) 123-4567</span>
                        <span className="flex items-center gap-1"><BiEnvelope /> support@example.com</span>
                    </div>
                    <div className="flex space-x-3">
                        <BiLogoFacebook className="cursor-pointer hover:text-indigo-400" />
                        <BiLogoTwitter className="cursor-pointer hover:text-indigo-400" />
                        <BiLogoInstagram className="cursor-pointer hover:text-indigo-400" />
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="bg-white border-b border-neutral-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
                    <div className="font-bold text-2xl text-neutral-900">LUXURY</div>
                    <nav className="hidden md:flex space-x-8 uppercase text-sm font-semibold tracking-wide">
                        <a href="#" className="hover:text-indigo-600">Collections</a>
                        <a href="#" className="hover:text-indigo-600">Atelier</a>
                        <a href="#" className="hover:text-indigo-600">Heritage</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="text-sm font-medium hover:text-indigo-600">Login</button>
                        <button className="bg-neutral-900 text-white px-5 py-2 rounded text-sm font-medium hover:bg-neutral-700">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
