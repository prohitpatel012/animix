import React from 'react';

type BadgeProps = {
    children: React.ReactNode;
    variant?: 'neutral' | 'brand' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

const variants = {
    neutral: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300',
    brand: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300',
    warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300',
    error: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300',
};

const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-sm px-3 py-1',
};

export const Badge = ({ children, variant = 'neutral', size = 'md', className = '' }: BadgeProps) => {
    return (
        <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </span>
    );
};
