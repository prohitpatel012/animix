import React from 'react';

type DividerProps = {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
};

export const Divider = ({ orientation = 'horizontal', className = '' }: DividerProps) => {
    if (orientation === 'vertical') {
        return <div className={`w-[1px] h-full bg-neutral-200 dark:bg-neutral-800 ${className}`} />;
    }
    return <div className={`w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 ${className}`} />;
};
