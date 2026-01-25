
import React from 'react';

// Heroes
import HeroSimple from '@/components/ui-component/heroes/HeroSimple';
import HeroSimpleCentered from '@/components/ui-component/heroes/HeroSimpleCentered';
import HeroSplit from '@/components/ui-component/heroes/HeroSplit';
import HeroSaaS from '@/components/ui-component/heroes/HeroSaaS';
import HeroApp from '@/components/ui-component/heroes/HeroApp';
import HeroGradient from '@/components/ui-component/heroes/HeroGradient';
import HeroDark from '@/components/ui-component/heroes/HeroDark';


import {
    heroSimpleCode,
    heroSimpleCenteredCode,
    heroSplitCode,
    heroSaaSCode,
    heroAppCode,
    heroGradientCode,
    heroDarkCode
} from '@/code/hero-code';


export const heroComponents = [
    { id: 'hero-simple', name: 'Hero Simple', preview: <HeroSimple />, code: heroSimpleCode },
    { id: 'hero-simple-centered', name: 'Hero Simple Centered', preview: <HeroSimpleCentered />, code: heroSimpleCenteredCode },
    { id: 'hero-split', name: 'Hero Split', preview: <HeroSplit />, code: heroSplitCode },
    { id: 'hero-saas', name: 'Hero SaaS', preview: <HeroSaaS />, code: heroSaaSCode },
    { id: 'hero-app', name: 'Hero App', preview: <HeroApp />, code: heroAppCode },
    { id: 'hero-gradient', name: 'Hero Gradient', preview: <HeroGradient />, code: heroGradientCode },
    { id: 'hero-dark', name: 'Hero Dark', preview: <HeroDark />, code: heroDarkCode },
];

export const heroCategories: Record<string, { title: string; description: string; components: any[] }> = {
    'Simple': {
        title: 'Simple Heroes',
        description: 'Clean and straightforward hero sections.',
        components: [
            { id: 'hero-simple', name: 'Hero Simple', preview: <HeroSimple />, code: heroSimpleCode },
            { id: 'hero-simple-centered', name: 'Hero Simple Centered', preview: <HeroSimpleCentered />, code: heroSimpleCenteredCode },
        ]
    },
    'Split': {
        title: 'Split Heroes',
        description: 'Two-column layouts typically with text and image.',
        components: [
            { id: 'hero-split', name: 'Hero Split', preview: <HeroSplit />, code: heroSplitCode },
        ]
    },
    'SaaS': {
        title: 'SaaS Heroes',
        description: 'Optimized for software products with dashboards and CTAs.',
        components: [
            { id: 'hero-saas', name: 'Hero SaaS', preview: <HeroSaaS />, code: heroSaaSCode },
        ]
    },
    'App': {
        title: 'App Showcase',
        description: 'Heroes designed to showcase mobile applications.',
        components: [
            { id: 'hero-app', name: 'Hero App', preview: <HeroApp />, code: heroAppCode },
        ]
    },
    'Gradient': {
        title: 'Gradient Heroes',
        description: 'Vibrant and colorful hero sections.',
        components: [
            { id: 'hero-gradient', name: 'Hero Gradient', preview: <HeroGradient />, code: heroGradientCode },
        ]
    },
    'Dark': {
        title: 'Dark Mode Heroes',
        description: 'Sleek dark themed hero sections.',
        components: [
            { id: 'hero-dark', name: 'Hero Dark', preview: <HeroDark />, code: heroDarkCode },
        ]
    }
};
