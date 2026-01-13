import React from 'react';

type ImageProps = {
    src: string;
    alt: string;
    aspectRatio?: 'auto' | 'square' | 'video' | 'portrait';
    fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    className?: string;
};

const aspectRatios = {
    auto: 'aspect-auto',
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
};

const fits = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
};

const radii = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
};

export const Image = ({
    src,
    alt,
    aspectRatio = 'auto',
    fit = 'cover',
    radius = 'md',
    className = ''
}: ImageProps) => {
    return (
        <div className={`overflow-hidden bg-neutral-100 dark:bg-neutral-800 ${radii[radius]} ${aspectRatios[aspectRatio]} ${className}`}>
            <img
                src={src}
                alt={alt}
                className={`w-full h-full ${fits[fit]}`}
            />
        </div>
    );
};
