"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorBrutalist() {
    return (
        <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-4">
            <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-6">
                    <h1 className="text-4xl font-black uppercase italic">Verify_Me</h1>
                    <div className="bg-black text-white p-2">
                        <BiShield className="w-8 h-8" />
                    </div>
                </div>

                <p className="font-mono font-bold mb-6 text-sm">
                    ATTENTION: A verification code has been dispatched to your designated communication device.
                </p>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="font-bold text-sm uppercase block border-b-2 border-black inline-block">Input Code</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <input
                                    key={i}
                                    type="text"
                                    maxLength={1}
                                    className="w-full h-14 border-4 border-black text-center font-mono text-2xl font-bold focus:bg-yellow-200 focus:outline-none transition-colors"
                                />
                            ))}
                        </div>
                    </div>

                    <button className="w-full bg-black text-white font-black py-4 hover:bg-white hover:text-black border-4 border-transparent hover:border-black transition-all text-xl uppercase">
                        Confirm Identity
                    </button>

                    <button className="w-full border-4 border-black font-bold py-2 hover:bg-black hover:text-white transition-colors uppercase text-sm">
                        Resend Transmission
                    </button>
                </form>
            </div>
        </div>
    )
}
