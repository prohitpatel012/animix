"use client";

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
        description: `Optimized for ${niche.toLowerCase()} interfaces.`,
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
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
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
                                                    title={`Copy ${color.name}: ${color.hex}`}
                                                >
                                                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${copied === color.hex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
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
