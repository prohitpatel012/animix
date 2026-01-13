import React from 'react';

type HeadingProps = {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    align?: 'left' | 'center' | 'right';
    className?: string;
};

const styles = {
    1: 'text-4xl lg:text-5xl font-extrabold tracking-tight',
    2: 'text-3xl lg:text-4xl font-bold tracking-tight',
    3: 'text-2xl lg:text-3xl font-bold',
    4: 'text-xl lg:text-2xl font-semibold',
    5: 'text-lg lg:text-xl font-semibold',
    6: 'text-base lg:text-lg font-semibold uppercase tracking-wide',
};

const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
};

export const Heading = ({
    children,
    level = 2,
    align = 'left',
    className = ''
}: HeadingProps) => {
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return (
        <Tag className={`text-neutral-900 dark:text-white ${styles[level]} ${aligns[align]} ${className}`}>
            {children}
        </Tag>
    );
};
