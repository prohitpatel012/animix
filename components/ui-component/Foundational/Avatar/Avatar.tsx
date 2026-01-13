import React from 'react';

type AvatarProps = {
    src?: string;
    alt?: string;
    initials?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
};

const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
};

export const Avatar = ({ src, alt, initials, size = 'md', className = '' }: AvatarProps) => {
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 ${sizes[size]} ${className}`}>
            {src ? (
                <img className="w-full h-full object-cover" src={src} alt={alt || 'Avatar'} />
            ) : (
                <span className="font-medium">{initials}</span>
            )}
        </div>
    );
};
