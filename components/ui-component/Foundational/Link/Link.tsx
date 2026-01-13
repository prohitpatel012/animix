import Link from 'next/link';
import React from 'react';

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    external?: boolean;
};

export const CustomLink = ({ href, children, className = '', external }: LinkProps) => {
    const isExternal = external || href.startsWith('http');

    if (isExternal) {
        return (
            <a
                href={href}
                className={`text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline-offset-4 hover:underline transition-colors ${className}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={`text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline-offset-4 hover:underline transition-colors ${className}`}
        >
            {children}
        </Link>
    );
};
