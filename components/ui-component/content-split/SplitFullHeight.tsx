"use client";

export default function SplitFullHeight() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-white dark:bg-neutral-950 p-12 lg:p-24 flex flex-col justify-center">
                <div className="max-w-xl mx-auto lg:mx-0">
                    <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
                    <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-8">Design without compromise.</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">
                        We believe that the best products are built with passion and precision. Every pixel matters, every interaction counts.
                    </p>
                    <a href="#" className="inline-block border-b-2 border-black dark:border-white pb-1 text-lg font-bold">Read our manifesto</a>
                </div>
            </div>
            <div className="lg:w-1/2 bg-neutral-100 relative h-96 lg:h-auto">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" alt="Office" />
            </div>
        </div>
    )
}
