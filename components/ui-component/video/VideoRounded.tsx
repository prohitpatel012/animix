"use client";

export default function VideoRounded() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-indigo-500 ring-offset-4 ring-offset-white dark:ring-offset-neutral-950">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="mt-8 text-center max-w-lg">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Meet Your Instructor</h3>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                        "I've been teaching design for over 10 years. In this video course, I condense everything I've learned into 5 hours of high-impact content."
                    </p>
                </div>
            </div>
        </div>
    )
}
