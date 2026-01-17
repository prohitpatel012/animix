"use client";

const logos = [
    { name: 'Transistor', src: 'https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Reform', src: 'https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg' },
    { name: 'Tuple', src: 'https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'SavvyCal', src: 'https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'Statamic', src: 'https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg' },
];

export default function LogosDark() {
    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-lg font-semibold leading-8 text-white">Trusted by the most innovative teams</h2>
                    <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                        {logos.map((logo) => (
                            <img
                                key={logo.name}
                                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                                src={logo.src}
                                alt={logo.name}
                                width={158}
                                height={48}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
