"use client";

export default function VideoSimple() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-neutral-900/10 dark:ring-white/10">
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Co_X7D7Vd8X3xX3x"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
