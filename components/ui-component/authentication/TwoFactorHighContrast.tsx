"use client";

import { BiShield } from "react-icons/bi";

export default function TwoFactorHighContrast() {
    return (
        <div className="min-h-screen bg-white ring-offset-2 flex items-center justify-center p-4">
            <div className="w-full max-w-md border-4 border-black p-8 bg-white text-black">
                <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-6">
                    <BiShield className="w-12 h-12" />
                    <div>
                        <h1 className="text-3xl font-bold uppercase">Verify Code</h1>
                        <p className="font-bold underline">Security Check</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-xl font-bold mb-2 uppercase">Enter 6-Digit Code:</label>
                        <input
                            type="text"
                            className="w-full border-4 border-black p-4 text-3xl font-bold tracking-widest focus:bg-black focus:text-white outline-none transition-colors"
                            placeholder="######"
                        />
                    </div>

                    <button className="w-full bg-black text-white py-4 text-xl font-bold uppercase border-4 border-black hover:bg-white hover:text-black transition-colors focus:ring-4 ring-offset-4 ring-black">
                        Submit Code
                    </button>
                </div>
            </div>
        </div>
    )
}
