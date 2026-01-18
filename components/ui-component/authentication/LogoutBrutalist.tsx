"use client";

import { BiLogOut } from "react-icons/bi";

export default function LogoutBrutalist() {
    return (
        <div className="min-h-screen bg-lime-300 flex items-center justify-center p-4">
            <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className="flex justify-between items-start mb-6">
                    <h1 className="text-4xl font-black uppercase">Bye_Bye!</h1>
                    <div className="bg-black text-white p-2">
                        <BiLogOut className="w-8 h-8" />
                    </div>
                </div>

                <div className="bg-black text-white p-4 font-mono font-bold text-sm mb-6">
                    STATUS: DISCONNECTED
                    <br />
                    TIME: {new Date().toLocaleTimeString()}
                </div>

                <div className="space-y-4">
                    <button className="w-full bg-white text-black font-black py-4 uppercase border-4 border-black hover:bg-black hover:text-white transition-colors text-xl">
                        Log In
                    </button>

                    <button className="w-full bg-transparent text-black font-bold py-2 uppercase border-4 border-transparent hover:underline">
                        Return to Homepage
                    </button>
                </div>
            </div>
        </div>
    )
}
