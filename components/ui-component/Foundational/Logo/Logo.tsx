import React from 'react';
import { BiCommand } from "react-icons/bi";

type LogoProps = {
    icon?: React.ReactNode;
    text?: string;
    variant?: 'text-only' | 'icon-only' | 'full';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

export const Logo = ({
    icon = <BiCommand className="w-full h-full" />,
    text = "Animix",
    variant = 'full',
    size = 'md',
    className = ''
}: LogoProps) => {

    // Size logic
    const iconSizes = {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
    };

    const textSizes = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
    };

    return (
        <div className={`flex items-center gap-2 font-bold text-neutral-900 dark:text-white ${className}`}>
            {variant !== 'text-only' && (
                <div className={`${iconSizes[size]} text-blue-600`}>
                    {icon}
                </div>
            )}
            {variant !== 'icon-only' && (
                <span className={`${textSizes[size]} tracking-tight`}>
                    {text}
                </span>
            )}
        </div>
    );
};
