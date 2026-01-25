export const colorGridCode = `"use client";

import { useState } from "react";
import { BiCheck, BiCopy } from "react-icons/bi";

type ColorCategory = {
    name: string;
    colors: { name: string; hex: string }[];
};

const palettes: ColorCategory[] = [
    {
        name: "Slate (Cool Gray)",
        colors: [
            { name: "Slate 50", hex: "#f8fafc" },
            { name: "Slate 100", hex: "#f1f5f9" },
            { name: "Slate 200", hex: "#e2e8f0" },
            { name: "Slate 300", hex: "#cbd5e1" },
            { name: "Slate 400", hex: "#94a3b8" },
            { name: "Slate 500", hex: "#64748b" },
            { name: "Slate 600", hex: "#475569" },
            { name: "Slate 700", hex: "#334155" },
            { name: "Slate 800", hex: "#1e293b" },
            { name: "Slate 900", hex: "#0f172a" },
            { name: "Slate 950", hex: "#020617" },
        ],
    },
    {
        name: "Gary (Neutral)",
        colors: [
            { name: "Gray 50", hex: "#f9fafb" },
            { name: "Gray 100", hex: "#f3f4f6" },
            { name: "Gray 200", hex: "#e5e7eb" },
            { name: "Gray 300", hex: "#d1d5db" },
            { name: "Gray 400", hex: "#9ca3af" },
            { name: "Gray 500", hex: "#6b7280" },
            { name: "Gray 600", hex: "#4b5563" },
            { name: "Gray 700", hex: "#374151" },
            { name: "Gray 800", hex: "#1f2937" },
            { name: "Gray 900", hex: "#111827" },
            { name: "Gray 950", hex: "#030712" },
        ],
    },
    {
        name: "Zinc (Industrial)",
        colors: [
            { name: "Zinc 50", hex: "#fafafa" },
            { name: "Zinc 100", hex: "#f4f4f5" },
            { name: "Zinc 200", hex: "#e4e4e7" },
            { name: "Zinc 300", hex: "#d4d4d8" },
            { name: "Zinc 400", hex: "#a1a1aa" },
            { name: "Zinc 500", hex: "#71717a" },
            { name: "Zinc 600", hex: "#52525b" },
            { name: "Zinc 700", hex: "#3f3f46" },
            { name: "Zinc 800", hex: "#27272a" },
            { name: "Zinc 900", hex: "#18181b" },
            { name: "Zinc 950", hex: "#09090b" },
        ],
    },
    {
        name: "Neutral (True Gray)",
        colors: [
            { name: "Neutral 50", hex: "#fafafa" },
            { name: "Neutral 100", hex: "#f5f5f5" },
            { name: "Neutral 200", hex: "#e5e5e5" },
            { name: "Neutral 300", hex: "#d4d4d4" },
            { name: "Neutral 400", hex: "#a3a3a3" },
            { name: "Neutral 500", hex: "#737373" },
            { name: "Neutral 600", hex: "#525252" },
            { name: "Neutral 700", hex: "#404040" },
            { name: "Neutral 800", hex: "#262626" },
            { name: "Neutral 900", hex: "#171717" },
            { name: "Neutral 950", hex: "#0a0a0a" },
        ],
    },
    {
        name: "Stone (Warm Gray)",
        colors: [
            { name: "Stone 50", hex: "#fafaf9" },
            { name: "Stone 100", hex: "#f5f5f4" },
            { name: "Stone 200", hex: "#e7e5e4" },
            { name: "Stone 300", hex: "#d6d3d1" },
            { name: "Stone 400", hex: "#a8a29e" },
            { name: "Stone 500", hex: "#78716c" },
            { name: "Stone 600", hex: "#57534e" },
            { name: "Stone 700", hex: "#44403c" },
            { name: "Stone 800", hex: "#292524" },
            { name: "Stone 900", hex: "#1c1917" },
            { name: "Stone 950", hex: "#0c0a09" },
        ],
    },
    {
        name: "Red",
        colors: [
            { name: "Red 50", hex: "#fef2f2" },
            { name: "Red 100", hex: "#fee2e2" },
            { name: "Red 200", hex: "#fecaca" },
            { name: "Red 300", hex: "#fca5a5" },
            { name: "Red 400", hex: "#f87171" },
            { name: "Red 500", hex: "#ef4444" },
            { name: "Red 600", hex: "#dc2626" },
            { name: "Red 700", hex: "#b91c1c" },
            { name: "Red 800", hex: "#991b1b" },
            { name: "Red 900", hex: "#7f1d1d" },
            { name: "Red 950", hex: "#450a0a" },
        ],
    },
    {
        name: "Orange",
        colors: [
            { name: "Orange 50", hex: "#fff7ed" },
            { name: "Orange 100", hex: "#ffedd5" },
            { name: "Orange 200", hex: "#fed7aa" },
            { name: "Orange 300", hex: "#fdba74" },
            { name: "Orange 400", hex: "#fb923c" },
            { name: "Orange 500", hex: "#f97316" },
            { name: "Orange 600", hex: "#ea580c" },
            { name: "Orange 700", hex: "#c2410c" },
            { name: "Orange 800", hex: "#9a3412" },
            { name: "Orange 900", hex: "#7c2d12" },
            { name: "Orange 950", hex: "#431407" },
        ],
    },
    {
        name: "Amber",
        colors: [
            { name: "Amber 50", hex: "#fffbeb" },
            { name: "Amber 100", hex: "#fef3c7" },
            { name: "Amber 200", hex: "#fde68a" },
            { name: "Amber 300", hex: "#fcd34d" },
            { name: "Amber 400", hex: "#fbbf24" },
            { name: "Amber 500", hex: "#f59e0b" },
            { name: "Amber 600", hex: "#d97706" },
            { name: "Amber 700", hex: "#b45309" },
            { name: "Amber 800", hex: "#92400e" },
            { name: "Amber 900", hex: "#78350f" },
            { name: "Amber 950", hex: "#451a03" },
        ],
    },
    {
        name: "Yellow",
        colors: [
            { name: "Yellow 50", hex: "#fefce8" },
            { name: "Yellow 100", hex: "#fef9c3" },
            { name: "Yellow 200", hex: "#fef08a" },
            { name: "Yellow 300", hex: "#fde047" },
            { name: "Yellow 400", hex: "#facc15" },
            { name: "Yellow 500", hex: "#eab308" },
            { name: "Yellow 600", hex: "#ca8a04" },
            { name: "Yellow 700", hex: "#a16207" },
            { name: "Yellow 800", hex: "#854d0e" },
            { name: "Yellow 900", hex: "#713f12" },
            { name: "Yellow 950", hex: "#422006" },
        ],
    },
    {
        name: "Lime",
        colors: [
            { name: "Lime 50", hex: "#f7fee7" },
            { name: "Lime 100", hex: "#ecfccb" },
            { name: "Lime 200", hex: "#d9f99d" },
            { name: "Lime 300", hex: "#bef264" },
            { name: "Lime 400", hex: "#a3e635" },
            { name: "Lime 500", hex: "#84cc16" },
            { name: "Lime 600", hex: "#65a30d" },
            { name: "Lime 700", hex: "#4d7c0f" },
            { name: "Lime 800", hex: "#3f6212" },
            { name: "Lime 900", hex: "#365314" },
            { name: "Lime 950", hex: "#1a2e05" },
        ],
    },
    {
        name: "Green",
        colors: [
            { name: "Green 50", hex: "#f0fdf4" },
            { name: "Green 100", hex: "#dcfce7" },
            { name: "Green 200", hex: "#bbf7d0" },
            { name: "Green 300", hex: "#86efac" },
            { name: "Green 400", hex: "#4ade80" },
            { name: "Green 500", hex: "#22c55e" },
            { name: "Green 600", hex: "#16a34a" },
            { name: "Green 700", hex: "#15803d" },
            { name: "Green 800", hex: "#166534" },
            { name: "Green 900", hex: "#14532d" },
            { name: "Green 950", hex: "#052e16" },
        ],
    },
    {
        name: "Emerald",
        colors: [
            { name: "Emerald 50", hex: "#ecfdf5" },
            { name: "Emerald 100", hex: "#d1fae5" },
            { name: "Emerald 200", hex: "#a7f3d0" },
            { name: "Emerald 300", hex: "#6ee7b7" },
            { name: "Emerald 400", hex: "#34d399" },
            { name: "Emerald 500", hex: "#10b981" },
            { name: "Emerald 600", hex: "#059669" },
            { name: "Emerald 700", hex: "#047857" },
            { name: "Emerald 800", hex: "#065f46" },
            { name: "Emerald 900", hex: "#064e3b" },
            { name: "Emerald 950", hex: "#022c22" },
        ],
    },
    {
        name: "Teal",
        colors: [
            { name: "Teal 50", hex: "#f0fdfa" },
            { name: "Teal 100", hex: "#ccfbf1" },
            { name: "Teal 200", hex: "#99f6e4" },
            { name: "Teal 300", hex: "#5eead4" },
            { name: "Teal 400", hex: "#2dd4bf" },
            { name: "Teal 500", hex: "#14b8a6" },
            { name: "Teal 600", hex: "#0d9488" },
            { name: "Teal 700", hex: "#0f766e" },
            { name: "Teal 800", hex: "#115e59" },
            { name: "Teal 900", hex: "#134e4a" },
            { name: "Teal 950", hex: "#042f2e" },
        ],
    },
    {
        name: "Cyan",
        colors: [
            { name: "Cyan 50", hex: "#ecfeff" },
            { name: "Cyan 100", hex: "#cffafe" },
            { name: "Cyan 200", hex: "#a5f3fc" },
            { name: "Cyan 300", hex: "#67e8f9" },
            { name: "Cyan 400", hex: "#22d3ee" },
            { name: "Cyan 500", hex: "#06b6d4" },
            { name: "Cyan 600", hex: "#0891b2" },
            { name: "Cyan 700", hex: "#0e7490" },
            { name: "Cyan 800", hex: "#155e75" },
            { name: "Cyan 900", hex: "#164e63" },
            { name: "Cyan 950", hex: "#083344" },
        ],
    },
    {
        name: "Sky",
        colors: [
            { name: "Sky 50", hex: "#f0f9ff" },
            { name: "Sky 100", hex: "#e0f2fe" },
            { name: "Sky 200", hex: "#bae6fd" },
            { name: "Sky 300", hex: "#7dd3fc" },
            { name: "Sky 400", hex: "#38bdf8" },
            { name: "Sky 500", hex: "#0ea5e9" },
            { name: "Sky 600", hex: "#0284c7" },
            { name: "Sky 700", hex: "#0369a1" },
            { name: "Sky 800", hex: "#075985" },
            { name: "Sky 900", hex: "#0c4a6e" },
            { name: "Sky 950", hex: "#082f49" },
        ],
    },
    {
        name: "Blue",
        colors: [
            { name: "Blue 50", hex: "#eff6ff" },
            { name: "Blue 100", hex: "#dbeafe" },
            { name: "Blue 200", hex: "#bfdbfe" },
            { name: "Blue 300", hex: "#93c5fd" },
            { name: "Blue 400", hex: "#60a5fa" },
            { name: "Blue 500", hex: "#3b82f6" },
            { name: "Blue 600", hex: "#2563eb" },
            { name: "Blue 700", hex: "#1d4ed8" },
            { name: "Blue 800", hex: "#1e40af" },
            { name: "Blue 900", hex: "#1e3a8a" },
            { name: "Blue 950", hex: "#172554" },
        ],
    },
    {
        name: "Indigo",
        colors: [
            { name: "Indigo 50", hex: "#eef2ff" },
            { name: "Indigo 100", hex: "#e0e7ff" },
            { name: "Indigo 200", hex: "#c7d2fe" },
            { name: "Indigo 300", hex: "#a5b4fc" },
            { name: "Indigo 400", hex: "#818cf8" },
            { name: "Indigo 500", hex: "#6366f1" },
            { name: "Indigo 600", hex: "#4f46e5" },
            { name: "Indigo 700", hex: "#4338ca" },
            { name: "Indigo 800", hex: "#3730a3" },
            { name: "Indigo 900", hex: "#312e81" },
            { name: "Indigo 950", hex: "#1e1b4b" },
        ],
    },
    {
        name: "Violet",
        colors: [
            { name: "Violet 50", hex: "#f5f3ff" },
            { name: "Violet 100", hex: "#ede9fe" },
            { name: "Violet 200", hex: "#ddd6fe" },
            { name: "Violet 300", hex: "#c4b5fd" },
            { name: "Violet 400", hex: "#a78bfa" },
            { name: "Violet 500", hex: "#8b5cf6" },
            { name: "Violet 600", hex: "#7c3aed" },
            { name: "Violet 700", hex: "#6d28d9" },
            { name: "Violet 800", hex: "#5b21b6" },
            { name: "Violet 900", hex: "#4c1d95" },
            { name: "Violet 950", hex: "#2e1065" },
        ],
    },
    {
        name: "Purple",
        colors: [
            { name: "Purple 50", hex: "#faf5ff" },
            { name: "Purple 100", hex: "#f3e8ff" },
            { name: "Purple 200", hex: "#e9d5ff" },
            { name: "Purple 300", hex: "#d8b4fe" },
            { name: "Purple 400", hex: "#c084fc" },
            { name: "Purple 500", hex: "#a855f7" },
            { name: "Purple 600", hex: "#9333ea" },
            { name: "Purple 700", hex: "#7e22ce" },
            { name: "Purple 800", hex: "#6b21a8" },
            { name: "Purple 900", hex: "#581c87" },
            { name: "Purple 950", hex: "#3b0764" },
        ],
    },
    {
        name: "Fuchsia",
        colors: [
            { name: "Fuchsia 50", hex: "#fdf4ff" },
            { name: "Fuchsia 100", hex: "#fae8ff" },
            { name: "Fuchsia 200", hex: "#f5d0fe" },
            { name: "Fuchsia 300", hex: "#f0abfc" },
            { name: "Fuchsia 400", hex: "#e879f9" },
            { name: "Fuchsia 500", hex: "#d946ef" },
            { name: "Fuchsia 600", hex: "#c026d3" },
            { name: "Fuchsia 700", hex: "#a21caf" },
            { name: "Fuchsia 800", hex: "#86198f" },
            { name: "Fuchsia 900", hex: "#701a75" },
            { name: "Fuchsia 950", hex: "#4a044e" },
        ],
    },
    {
        name: "Pink",
        colors: [
            { name: "Pink 50", hex: "#fdf2f8" },
            { name: "Pink 100", hex: "#fce7f3" },
            { name: "Pink 200", hex: "#fbcfe8" },
            { name: "Pink 300", hex: "#f9a8d4" },
            { name: "Pink 400", hex: "#f472b6" },
            { name: "Pink 500", hex: "#ec4899" },
            { name: "Pink 600", hex: "#db2777" },
            { name: "Pink 700", hex: "#be185d" },
            { name: "Pink 800", hex: "#9d174d" },
            { name: "Pink 900", hex: "#831843" },
            { name: "Pink 950", hex: "#500724" },
        ],
    },
    {
        name: "Rose",
        colors: [
            { name: "Rose 50", hex: "#fff1f2" },
            { name: "Rose 100", hex: "#ffe4e6" },
            { name: "Rose 200", hex: "#fecdd3" },
            { name: "Rose 300", hex: "#fda4af" },
            { name: "Rose 400", hex: "#fb7185" },
            { name: "Rose 500", hex: "#f43f5e" },
            { name: "Rose 600", hex: "#e11d48" },
            { name: "Rose 700", hex: "#be123c" },
            { name: "Rose 800", hex: "#9f1239" },
            { name: "Rose 900", hex: "#881337" },
            { name: "Rose 950", hex: "#4c0519" },
        ],
    },
    {
        name: "Social Media Brands",
        colors: [
            { name: "Facebook", hex: "#1877F2" },
            { name: "Twitter", hex: "#1DA1F2" },
            { name: "Instagram", hex: "#E1306C" },
            { name: "Snapchat", hex: "#FFFC00" },
            { name: "LinkedIn", hex: "#0A66C2" },
            { name: "YouTube", hex: "#FF0000" },
            { name: "Pinterest", hex: "#E60023" },
            { name: "TikTok", hex: "#000000" },
            { name: "Discord", hex: "#5865F2" },
            { name: "Twitch", hex: "#9146FF" },
            { name: "Reddit", hex: "#FF4500" },
            { name: "Spotify", hex: "#1DB954" },
            { name: "Slack", hex: "#4A154B" },
            { name: "WhatsApp", hex: "#25D366" },
        ],
    },
    {
        name: "Tech Brands",
        colors: [
            { name: "Google Blue", hex: "#4285F4" },
            { name: "Google Red", hex: "#EA4335" },
            { name: "Google Yellow", hex: "#FBBC05" },
            { name: "Google Green", hex: "#34A853" },
            { name: "Microsoft", hex: "#F25022" },
            { name: "Amazon", hex: "#FF9900" },
            { name: "Netflix", hex: "#E50914" },
            { name: "Airbnb", hex: "#FF5A5F" },
            { name: "Stripe", hex: "#635BFF" },
            { name: "GitHub", hex: "#181717" },
            { name: "Zoom", hex: "#2D8CFF" },
            { name: "Figma", hex: "#F24E1E" },
        ],
    },
    {
        name: "Retro / 80s",
        colors: [
            { name: "Neon Pink", hex: "#FF6EC7" },
            { name: "Neon Blue", hex: "#00F9FF" },
            { name: "Electric Purple", hex: "#BF00FF" },
            { name: "Hot Orange", hex: "#FF8A00" },
            { name: "Lime Green", hex: "#CCFF00" },
            { name: "Cyber Yellow", hex: "#FFD300" },
            { name: "Synthwave Magenta", hex: "#FF00CC" },
            { name: "Vaporwave Teal", hex: "#00FFFF" },
        ],
    },
    {
        name: "Pastels",
        colors: [
            { name: "Pastel Red", hex: "#ffbdbd" },
            { name: "Pastel Orange", hex: "#ffdfbd" },
            { name: "Pastel Yellow", hex: "#ffffbd" },
            { name: "Pastel Green", hex: "#d9ffbd" },
            { name: "Pastel Teal", hex: "#bdffff" },
            { name: "Pastel Blue", hex: "#bdd9ff" },
            { name: "Pastel Purple", hex: "#dfbdff" },
            { name: "Pastel Pink", hex: "#ffbdf7" },
        ],
    }
];

export default function ColorGrid() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        setCopied(hex);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="space-y-12 py-8">
            {palettes.map((category) => (
                <div key={category.name}>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 pl-1 border-l-4 border-indigo-500">
                        {category.name} ({category.colors.length})
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {category.colors.map((color) => (
                            <button
                                key={color.hex}
                                onClick={() => copyToClipboard(color.hex)}
                                className="group relative flex flex-col items-start text-left bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all ring-1 ring-neutral-200 dark:ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <div
                                    className="w-full h-24 sm:h-32 transition-transform group-hover:scale-110"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 rounded-full p-1.5 shadow-sm">
                                    {copied === color.hex ? (
                                        <BiCheck className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <BiCopy className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                                    )}
                                </div>
                                <div className="p-3 w-full bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 z-10">
                                    <p className="text-sm font-medium text-neutral-900 dark:text-white truncate">
                                        {color.name}
                                    </p>
                                    <p className="text-xs text-neutral-500 font-mono mt-0.5 uppercase">
                                        {color.hex}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
`;

export const colorCombinationsCode = `"use client";

import { useState } from "react";
import { BiCopy, BiCheck } from "react-icons/bi";

type Palette = {
    name: string;
    description: string;
    colors: { name: string; hex: string; role: string }[];
};

const themes: Palette[] = [
    {
        name: "Modern SaaS",
        description: "Clean, trustworthy blue tones perfect for software dashboards.",
        colors: [
            { name: "Primary", hex: "#2563EB", role: "Action" },
            { name: "Secondary", hex: "#1E40AF", role: "Highlight" },
            { name: "Background", hex: "#F3F4F6", role: "Base" },
            { name: "Surface", hex: "#FFFFFF", role: "Cards" },
            { name: "Text", hex: "#111827", role: "Content" },
        ]
    },
    {
        name: "Sunset Vibes",
        description: "Warm, energetic gradient hues for creative portfolios.",
        colors: [
            { name: "Gradient Start", hex: "#FF4D4D", role: "Brand" },
            { name: "Gradient Mid", hex: "#F9CB28", role: "Accent" },
            { name: "Dark Bg", hex: "#1a1a2e", role: "Background" },
            { name: "Light Text", hex: "#FFF5F5", role: "Text" },
        ]
    },
    {
        name: "Forest Calm",
        description: "Earthy greens and neutrals for eco-friendly or wellness brands.",
        colors: [
            { name: "Deep Green", hex: "#2D6A4F", role: "Primary" },
            { name: "Sage", hex: "#95D5B2", role: "Secondary" },
            { name: "Off White", hex: "#F1FAEE", role: "Background" },
            { name: "Charcoal", hex: "#1B4332", role: "Text" },
        ]
    },
    {
        name: "Neon Nights",
        description: "High contrast cyberpunk aesthetic for gaming or nightlife.",
        colors: [
            { name: "Neon Pink", hex: "#FF007F", role: "Accent" },
            { name: "Cyan", hex: "#00FFF5", role: "Secondary" },
            { name: "Dark Purple", hex: "#2A004E", role: "Background" },
            { name: "Void", hex: "#120024", role: "Surface" },
        ]
    },
    {
        name: "Luxury Gold",
        description: "Sophisticated black and gold pairing for high-end services.",
        colors: [
            { name: "Gold", hex: "#D4AF37", role: "Accent" },
            { name: "Rich Black", hex: "#0A0A0A", role: "Primary" },
            { name: "Dark Gray", hex: "#1C1C1C", role: "Surface" },
            { name: "Silver", hex: "#C0C0C0", role: "Text" },
        ]
    },
    {
        name: "Corporate Trust",
        description: "Professional navy and slate for financial institutions.",
        colors: [
            { name: "Navy", hex: "#0F172A", role: "Primary" },
            { name: "Slate", hex: "#64748B", role: "Secondary" },
            { name: "Light Blue", hex: "#E0F2FE", role: "Accent" },
            { name: "White", hex: "#FFFFFF", role: "Base" },
        ]
    },
    {
        name: "Playful Pop",
        description: "Bright, fun colors for children's products or casual apps.",
        colors: [
            { name: "Hot Pink", hex: "#FF6B6B", role: "Primary" },
            { name: "Sunshine", hex: "#FFD93D", role: "Secondary" },
            { name: "Sky Blue", hex: "#4D96FF", role: "Accent" },
            { name: "Mint", hex: "#6BCB77", role: "Success" },
        ]
    },
    {
        name: "Minimalist Mono",
        description: "Stark black and white with a single bold accent.",
        colors: [
            { name: "Black", hex: "#000000", role: "Primary" },
            { name: "White", hex: "#FFFFFF", role: "Background" },
            { name: "Gray", hex: "#F5F5F5", role: "Surface" },
            { name: "Accent Red", hex: "#EF4444", role: "Brand" },
        ]
    },
    {
        name: "Coffee Shop",
        description: "Warm browns and creams for cozy, inviting atmospheres.",
        colors: [
            { name: "Espresso", hex: "#3E2723", role: "Text" },
            { name: "Latte", hex: "#D7CCC8", role: "Surface" },
            { name: "Cream", hex: "#FFF8E1", role: "Background" },
            { name: "Caramel", hex: "#8D6E63", role: "Accent" },
        ]
    },
    {
        name: "Ocean breeze",
        description: "Relaxing aquatic tones.",
        colors: [
            { name: "Deep Sea", hex: "#006994", role: "Primary" },
            { name: "Surf", hex: "#4CA3DD", role: "Secondary" },
            { name: "Sand", hex: "#F5E6CA", role: "Background" },
            { name: "Foam", hex: "#E1F4F3", role: "Surface" },
        ]
    },
    {
        name: "Lavender Dream",
        description: "Soft purples for feminine or calming brands.",
        colors: [
            { name: "Lavender", hex: "#E6E6FA", role: "Background" },
            { name: "Amethist", hex: "#9966CC", role: "Primary" },
            { name: "Deep Purple", hex: "#4B0082", role: "Text" },
            { name: "Lilac", hex: "#C8A2C8", role: "Accent" },
        ]
    },
    {
        name: "Burnt Orange",
        description: "Retro 70s inspired warm palette.",
        colors: [
            { name: "Burnt Orange", hex: "#CC5500", role: "Primary" },
            { name: "Mustard", hex: "#FFDB58", role: "Secondary" },
            { name: "Olive", hex: "#808000", role: "Accent" },
            { name: "Eggshell", hex: "#F0EAD6", role: "Bg" },
        ]
    }
];

export default function ColorCombinations() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        setCopied(hex);
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {themes.map((theme) => (
                <div key={theme.name} className="flex flex-col bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
                    <div className="p-6 pb-4">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{theme.name}</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{theme.description}</p>
                    </div>

                    <div className="flex-1 flex flex-col sm:flex-row h-48 sm:h-32 w-full">
                        {theme.colors.map((color) => (
                            <div
                                key={color.hex}
                                className="group relative flex-1 flex flex-col items-center justify-center p-2 transition-all hover:flex-[1.5]"
                                style={{ backgroundColor: color.hex }}
                            >
                                <button
                                    onClick={() => copyToClipboard(color.hex)}
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity cursor-pointer"
                                >
                                    <div className="bg-white text-neutral-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                                        {copied === color.hex ? <BiCheck className="text-green-600 text-base" /> : <BiCopy />}
                                        {color.hex}
                                    </div>
                                </button>

                                <div className="mt-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] uppercase font-bold tracking-wider">
                                    {color.role}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-5 text-center text-xs text-neutral-500 font-mono border-t border-neutral-100 dark:border-neutral-800 divide-x divide-neutral-100 dark:divide-neutral-800">
                        {theme.colors.map((color) => (
                            <div key={color.hex} className="py-2 px-1 overflow-hidden truncate" title={\`\${color.name}: \${color.hex}\`}>
                                {color.hex}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
`;

export const megaColorCombinationsCode = `\"use client";

import { useState } from "react";
import { BiCopy, BiCheck, BiTag } from "react-icons/bi";

type ColorDefinition = {
    name: string; // e.g., "Primary", "CTA", "Background"
    hex: string;
};

type IndustryPalette = {
    id: string;
    industry: string; // e.g., "E-commerce", "LMS"
    subNiche: string; // e.g., "Luxury Fashion", "University"
    description: string;
    colors: ColorDefinition[];
};

// Generators for specific industries to ensure realistic, usable palettes
const generateIndustryPalettes = (): IndustryPalette[] => {
    const categories = [
        {
            name: "E-Commerce",
            niches: [
                "Luxury Fashion", "Electronics", "Organic Food", "Sports Gear", "Beauty & Cosmetics",
                "Home Decor", "Toys & Kids", "Automotive", "Pet Supplies", "Jewelry",
                "Streetwear", "Minimalist Apparel", "Tech Gadgets", "Grocery Delivery", "Handmade Crafts",
                "Sneaker Health", "Outdoor Adventure", "Bookstore", "Gaming Hardware", "Subscription Box"
            ]
        },
        {
            name: "Education / LMS",
            niches: [
                "University Portal", "Kindergarten", "Coding Bootcamp", "Language App", "Corporate Training",
                "Science Research", "Art School", "Math & Logic", "History Archive", "Music Theory",
                "E-Library", "Student Dashboard", "Online Course", "Tutor Platform", "Exam Prep",
                "Vocational Training", "Kids Science", "Digital Marketing Course", "Medical School", "Law School"
            ]
        },
        {
            name: "SaaS & Tech",
            niches: [
                "Fintech Dashboard", "CRM Platform", "Analytics Tool", "Project Management", "Cybersecurity",
                "Cloud Hosting", "AI Interface", "Developer Tools", "HR Software", "Marketing Automation",
                "Crypto Exchange", "Social Media Manager", "Video Conferencing", "Cloud Storage", "Email Marketing",
                "Help Desk", "Productivity App", "No-Code Builder", "Data Viz", "IoT Control"
            ]
        },
        {
            name: "Healthcare & Wellness",
            niches: [
                "Hospital System", "Mental Health App", "Dental Clinic", "Fitness Tracker", "Yoga Studio",
                "Nutrition Plan", "Telemedicine", "Pharmacy", "Senior Care", "Pediatrics",
                "Meditation App", "Gym Franchise", "Spa & Wellness", "Physical Therapy", "Dermatology",
                "Health Insurance", "Running App", "Sleep Tracker", "Organic Vitamins", "Women's Health"
            ]
        },
        {
            name: "Services & Lifestyle",
            niches: [
                "Real Estate", "Travel Agency", "Modern Law Firm", "Construction", "Fine Dining",
                "Event Planning", "Photography Porfolio", "Wedding Planner", "News Portal", "Charity / NGO",
                "Interior Design", "Logistics", "Cleaning Service", "Recruitment", "Architecture",
                "Coffee Shop", "Bakery", "Hotel Booking", "Barber Shop", "Veterinary"
            ]
        }
    ];

    const palettes: IndustryPalette[] = [];
    let idCounter = 1;

    categories.forEach(cat => {
        cat.niches.forEach(niche => {
            // Generate a 'Light' version
            palettes.push(createPalette(idCounter++, cat.name, niche, "Light"));
            // Generate a 'Dark' or 'Alternative' version to double the count to ~100+
            // Actually, let's just create distinct unique ones to hit 100.
            // 5 categories * 20 niches = 100 basic profiles.
        });
    });

    return palettes;
};

// Helper used to deterministically pick colors based on the niche name string
// This ensures "Luxury Fashion" always gets the same elegant colors without hardcoding 1000 strings manually
const createPalette = (id: number, industry: string, niche: string, variant: string): IndustryPalette => {
    const seed = niche.length + industry.length;

    // Define base hues based on industry vibe
    let primaryHue = 210; // Default Blue
    let sat = 80;
    let light = 50;

    if (industry === "E-Commerce") {
        if (niche.includes("Luxury") || niche.includes("Jewelry")) { primaryHue = 45; sat = 40; light = 40; } // Gold/dark
        else if (niche.includes("Food") || niche.includes("Grocery")) { primaryHue = 120; sat = 70; } // Green
        else if (niche.includes("Fashion") || niche.includes("Beauty")) { primaryHue = 330; sat = 80; } // Pink
        else if (niche.includes("Sports") || niche.includes("Automotive")) { primaryHue = 0; sat = 90; } // Red
        else if (niche.includes("Tech")) { primaryHue = 220; sat = 90; } // Tech Blue
    } else if (industry === "Education / LMS") {
        if (niche.includes("Kids") || niche.includes("Kindergarten")) { primaryHue = 50; sat = 95; } // Yellow/Primary
        else if (niche.includes("University") || niche.includes("Law")) { primaryHue = 240; sat = 60; } // Navy
        else if (niche.includes("Coding") || niche.includes("Science")) { primaryHue = 190; sat = 80; } // Cyan/Teal
        else { primaryHue = 200; sat = 60; }
    } else if (industry === "Healthcare & Wellness") {
        if (niche.includes("Hospital") || niche.includes("Dental")) { primaryHue = 195; sat = 85; } // Clinical Blue
        else if (niche.includes("Yoga") || niche.includes("Spa")) { primaryHue = 150; sat = 40; } // Sage Green
        else if (niche.includes("Mental") || niche.includes("Health")) { primaryHue = 260; sat = 40; } // Calming Purple
        else { primaryHue = 170; sat = 70; }
    } else if (industry === "SaaS & Tech") {
        if (niche.includes("Fintech") || niche.includes("Bank")) { primaryHue = 220; sat = 90; light = 45; } // Trust Blue
        else if (niche.includes("Cyber") || niche.includes("Crypto")) { primaryHue = 270; sat = 80; light = 60; } // Neon/Purple
        else if (niche.includes("Marketing") || niche.includes("HR")) { primaryHue = 10; sat = 85; } // Orange/Energetic
        else { primaryHue = 250; sat = 80; }
    } else if (industry === "Services & Lifestyle") {
        if (niche.includes("Real Estate")) { primaryHue = 210; sat = 50; }
        else if (niche.includes("Construction")) { primaryHue = 35; sat = 90; } // Yellow/Orange
        else if (niche.includes("Food") || niche.includes("Restaurant")) { primaryHue = 20; sat = 80; } // Warm
        else { primaryHue = 290; sat = 40; }
    }

    // Generate the specific 10 colors for this niche
    const colors: ColorDefinition[] = [
        { name: "Primary Brand", hex: HSLToHex(primaryHue, sat, light) },
        { name: "Secondary", hex: HSLToHex((primaryHue + 30) % 360, sat - 10, light + 10) },
        { name: "Accent/CTA", hex: HSLToHex((primaryHue + 180) % 360, 85, 55) }, // Complimentary
        { name: "Dark Text", hex: "#111827" },
        { name: "Light Text", hex: "#6B7280" },
        { name: "Background", hex: "#F9FAFB" },
        { name: "Surface Card", hex: "#FFFFFF" },
        { name: "Success", hex: "#10B981" }, // Standardized
        { name: "Warning", hex: "#F59E0B" },
        { name: "Error/Danger", hex: "#EF4444" },
    ];

    // Custom tweaks for "Dark Mode" vibes in certain niches
    if (["Cybersecurity", "Gaming Hardware", "Crypto Exchange", "Developer Tools"].some(s => niche.includes(s))) {
        colors[3] = { name: "Dark Text", hex: "#F9FAFB" }; // Swap for dark mode feel
        colors[4] = { name: "Light Text", hex: "#9CA3AF" };
        colors[5] = { name: "Background", hex: "#0F172A" };
        colors[6] = { name: "Surface Card", hex: "#1E293B" };
    }

    return {
        id: id.toString(),
        industry,
        subNiche: niche,
        description: \`Optimized for \${niche.toLowerCase()} interfaces.\`,
        colors
    };
};

function HSLToHex(h: number, s: number, l: number) {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return \`#\${toHex(f(0))}\${toHex(f(8))}\${toHex(f(4))}\`;
}

const allPalettes = generateIndustryPalettes();

export default function MegaColorCombinations() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        setCopied(hex);
        setTimeout(() => setCopied(null), 1000);
    };

    return (
        <div className="space-y-12 py-8">
            {/* Industry Sections */}
            {Array.from(new Set(allPalettes.map(p => p.industry))).map(ind => (
                <div key={ind}>
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{ind}</h2>
                        <span className="text-sm px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                            {allPalettes.filter(p => p.industry === ind).length} Variations
                        </span>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {allPalettes.filter(p => p.industry === ind).map((palette) => (
                            <div key={palette.id} className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{palette.subNiche}</h3>
                                        <p className="text-xs text-neutral-500">{palette.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-5 gap-y-6 gap-x-2">
                                    {palette.colors.map((color, idx) => (
                                        <div key={idx} className="flex flex-col gap-1 group">
                                            <div className="relative">
                                                <button
                                                    onClick={() => copyToClipboard(color.hex)}
                                                    className="h-12 w-full rounded-md shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    style={{ backgroundColor: color.hex }}
                                                    title={\`Copy \${color.name}: \${color.hex}\`}
                                                >
                                                    <div className={\`absolute inset-0 flex items-center justify-center transition-opacity \${copied === color.hex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}\`}>
                                                        <span className="bg-black/50 backdrop-blur-sm text-white p-1 rounded-full">
                                                            {copied === color.hex ? <BiCheck /> : <BiCopy className="w-3 h-3" />}
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 truncate w-full" title={color.name}>
                                                    {color.name}
                                                </div>
                                                <div className="text-[9px] font-mono text-neutral-400 uppercase">
                                                    {color.hex}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
`;
