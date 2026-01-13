import React from 'react';

type TextProps = {
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    variant?: 'primary' | 'secondary' | 'muted' | 'accent';
    align?: 'left' | 'center' | 'right';
    className?: string;
};

const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
};

const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};

const variants = {
    primary: 'text-neutral-900 dark:text-neutral-100',
    secondary: 'text-neutral-700 dark:text-neutral-300',
    muted: 'text-neutral-500 dark:text-neutral-400',
    accent: 'text-blue-600 dark:text-blue-400',
};

const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
};

export const Text = ({
    children,
    size = 'base',
    weight = 'normal',
    variant = 'primary',
    align = 'left',
    className = ''
}: TextProps) => {
    return (
        <p className={`${sizes[size]} ${weights[weight]} ${variants[variant]} ${aligns[align]} ${className}`}>
            {children}
        </p>
    );
};
