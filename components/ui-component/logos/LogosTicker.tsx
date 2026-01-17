"use client";

// Simple manual ticker implementation using CSS animation definition usually in globals, 
// but here we'll use a wrapper with overflow-hidden and a sliding inner div.
// Note: For production, ensure 'animate-infinite-scroll' is defined in tailwind config or global css.
// I will assume standard tailwind setup and use arbitrary values for a quick marquee effect if needed.

const logos = [
    { name: 'Disney', src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg' },
    { name: 'Airbnb', src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg' },
    { name: 'Apple', src: 'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg' },
    { name: 'Spark', src: 'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg' },
    { name: 'Samsung', src: 'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg' },
    { name: 'Quora', src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg' },
    { name: 'SaaS', src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg' },
];

export default function LogosTicker() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="text-center text-sm font-semibold leading-8 text-neutral-500 mb-8">
                    TRUSTED BY STRATEGIC PARTNERS
                </p>
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 min-w-full items-center">
                        {[...logos, ...logos, ...logos].map((logo, idx) => (
                            <img
                                key={idx}
                                className="h-8 md:h-12 w-auto object-contain dark:invert"
                                src={logo.src}
                                alt={logo.name}
                            />
                        ))}
                    </div>
                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 min-w-full items-center ml-16">
                        {[...logos, ...logos, ...logos].map((logo, idx) => (
                            <img
                                key={`duplicate-${idx}`}
                                className="h-8 md:h-12 w-auto object-contain dark:invert opacity-0" // Hidden duplicate just for spacing logic if needed in pure CSS
                                src={logo.src}
                                alt={logo.name}
                            />
                        ))}
                    </div>
                </div>

                {/* Helper style for marquee if not in global css */}
                <style jsx>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
            .animate-marquee {
                animation: marquee 25s linear infinite;
            }
        `}</style>
            </div>
        </div>
    );
}
