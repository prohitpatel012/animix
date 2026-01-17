"use client";

import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";

export default function FooterApp() {
    return (
        <footer className="bg-neutral-950 text-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Experience the app on mobile</h2>
                <p className="text-neutral-400 mb-10 max-w-2xl mx-auto">
                    Download our top-rated app for iOS and Android to manage your workflow on the go. Sync across all devices seamlessly.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
                        <BiLogoApple className="w-8 h-8" />
                        <div className="text-left leading-none">
                            <div className="text-xs font-medium">Download on the</div>
                            <div className="text-lg font-bold">App Store</div>
                        </div>
                    </button>
                    <button className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                        <BiLogoPlayStore className="w-8 h-8" />
                        <div className="text-left leading-none">
                            <div className="text-xs font-medium">Get it on</div>
                            <div className="text-lg font-bold">Google Play</div>
                        </div>
                    </button>
                </div>
                <div className="mt-16 pt-8 border-t border-neutral-800 flex justify-center gap-8 text-neutral-500 text-sm">
                    <a href="#" className="hover:text-white">Support</a>
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                </div>
            </div>
        </footer>
    )
}
