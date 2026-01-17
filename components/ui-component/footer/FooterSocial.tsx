"use client";

import { BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagramAlt, BiLogoYoutube, BiLogoPinterest } from "react-icons/bi";

export default function FooterSocial() {
    return (
        <footer className="bg-neutral-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#1877F2] transition-colors">
                                <BiLogoFacebookSquare className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">Facebook</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#1DA1F2] transition-colors">
                                <BiLogoTwitter className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">Twitter</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#E4405F] transition-colors">
                                <BiLogoInstagramAlt className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">Instagram</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#FF0000] transition-colors">
                                <BiLogoYoutube className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">YouTube</span>
                        </a>
                        <a href="#" className="group flex flex-col items-center">
                            <div className="p-4 bg-neutral-800 rounded-full group-hover:bg-[#BD081C] transition-colors">
                                <BiLogoPinterest className="w-8 h-8" />
                            </div>
                            <span className="mt-2 text-sm text-neutral-400 group-hover:text-white">Pinterest</span>
                        </a>
                    </div>
                    <div className="text-center border-t border-neutral-800 pt-8 w-full max-w-2xl">
                        <p className="text-neutral-500 text-sm">
                            We are social. Connect with us on your favorite platforms to stay updated with our latest news, offers, and events.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
