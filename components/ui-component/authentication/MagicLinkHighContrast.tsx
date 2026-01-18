"use client";

import { BiRightArrow } from "react-icons/bi";

export default function MagicLinkHighContrast() {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center p-8 border-[20px] border-black">
            <div className="max-w-2xl mx-auto w-full">
                <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase leading-[0.8] tracking-tighter">
                    Pass<br />word<br />less.
                </h1>

                <div className="bg-black text-white p-6 mb-8 inline-block transform -rotate-1">
                    <p className="text-xl font-bold uppercase tracking-widest">Login via Email Link</p>
                </div>

                <form className="flex flex-col md:flex-row gap-4 border-t-8 border-black pt-8">
                    <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        className="flex-1 bg-neutral-100 border-4 border-black p-6 text-xl font-bold uppercase placeholder-neutral-500 focus:bg-yellow-300 transition-colors outline-none"
                    />
                    <button className="bg-black text-white px-10 py-6 text-xl font-black uppercase hover:bg-neutral-800 transition-colors flex items-center gap-2 justify-center">
                        Send <BiRightArrow />
                    </button>
                </form>
            </div>
        </div>
    )
}
