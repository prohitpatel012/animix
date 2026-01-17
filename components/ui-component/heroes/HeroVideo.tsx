"use client";

import { motion } from "motion/react";
import { BiPlay, BiPause } from "react-icons/bi";
import { useState, useRef } from "react";

export default function HeroVideo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative bg-neutral-900 py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full object-cover">
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover opacity-50"
                    poster="https://images.unsplash.com/photo-1492619856393-8b20244c402a?auto=format&fit=crop&w=1336&q=80"
                    loop
                    muted
                    playsInline
                >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Experience the future of media
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-neutral-300 max-w-2xl mx-auto">
                        Immersive storytelling like never before. Watch our showreel to see what's possible with our new platform.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button
                            onClick={togglePlay}
                            className="rounded-full bg-white/10 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-white/20 backdrop-blur-sm transition flex items-center gap-2 border border-white/20"
                        >
                            {isPlaying ? <BiPause className="text-2xl" /> : <BiPlay className="text-2xl" />}
                            {isPlaying ? "Pause Reel" : "Watch Reel"}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
