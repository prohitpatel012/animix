"use client";

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
                            <div key={color.hex} className="py-2 px-1 overflow-hidden truncate" title={`${color.name}: ${color.hex}`}>
                                {color.hex}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
