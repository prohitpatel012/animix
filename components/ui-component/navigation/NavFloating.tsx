"use client";

export default function NavFloating() {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 h-64 flex items-end justify-center pb-8">
            <div className="bg-neutral-900/90 dark:bg-white/90 backdrop-blur text-white dark:text-neutral-900 px-2 py-2 rounded-full shadow-2xl flex items-center gap-1 animate-fade-in-up">
                {[
                    { label: "Home", active: true },
                    { label: "Work", active: false },
                    { label: "About", active: false },
                    { label: "Contact", active: false }
                ].map((item) => (
                    <a
                        key={item.label}
                        href="#"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${item.active ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm' : 'hover:bg-white/10 dark:hover:bg-black/10'}`}
                    >
                        {item.label}
                    </a>
                ))}
                <button className="ml-2 px-5 py-2 bg-indigo-500 rounded-full text-sm font-bold text-white hover:bg-indigo-400">
                    Hire Me
                </button>
            </div>
            <style jsx>{`
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fadeInUp 0.5s ease-out forwards;
            }
        `}</style>
        </div>
    )
}
