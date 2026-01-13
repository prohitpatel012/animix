import React from 'react';
import { IoClose } from "react-icons/io5";

type ChipProps = {
    label: string;
    onRemove?: () => void;
    variant?: 'neutral' | 'brand';
    className?: string;
};

export const Chip = ({ label, onRemove, variant = 'neutral', className = '' }: ChipProps) => {
    const baseStyle = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-colors border";
    const variants = {
        neutral: "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300",
        brand: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300",
    };

    return (
        <span className={`${baseStyle} ${variants[variant]} ${className}`}>
            {label}
            {onRemove && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                    className="hover:bg-black/5 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors"
                >
                    <IoClose className="size-3.5" />
                </button>
            )}
        </span>
    );
};
