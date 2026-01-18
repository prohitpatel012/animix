"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutHighContrast() {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center p-8 border-[20px] border-black">
            <div className="max-w-3xl mx-auto w-full text-center">
                <div className="inline-block bg-black text-white p-4 mb-8">
                    <BiLogOut className="w-16 h-16" />
                </div>

                <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase leading-none tracking-tighter">
                    Logged<br />Out.
                </h1>

                <div className="border-t-8 border-b-8 border-black py-8 mb-8 space-y-4">
                    <button className="block w-full bg-black text-white text-2xl font-black uppercase py-6 hover:bg-white hover:text-black border-4 border-black transition-colors">
                        Log In Again
                    </button>
                    <button className="block w-full bg-white text-black text-2xl font-black uppercase py-6 border-4 border-black hover:bg-black hover:text-white transition-colors">
                        Go Home
                    </button>
                </div>

                <p className="font-bold uppercase tracking-widest text-xl">Session Terminated.</p>
            </div>
        </div>
    )
}
