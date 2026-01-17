"use client";

export default function VideoDevice() {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-center">
                    {/* Simple Macbook CSS Frame */}
                    <div className="relative mx-auto bg-neutral-900 rounded-xl shadow-[0_0_0_12px_#333] border-[12px] border-[#333] w-[800px] max-w-full">
                        <div className="rounded-lg overflow-hidden bg-white aspect-video relative">
                            {/* Video Content */}
                            <div className="absolute inset-0 flex items-center justify-center bg-indigo-600 text-white font-bold">
                                App Demo Video Placeholder
                            </div>
                        </div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-[12px] w-32 h-4 bg-[#333] rounded-b-xl flex justify-center items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[850px] mx-auto h-4 bg-[#333] rounded-b-xl shadow-xl mt-[12px] relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-[#444] rounded-b-lg"></div>
                </div>

                <p className="text-center mt-12 text-sm font-medium text-neutral-500 uppercase tracking-widest">
                    Optimized for desktop workflow
                </p>
            </div>
        </div>
    )
}
