
import React from 'react';

import {
    TabsUnderline, TabsPills, TabsVertical, TabsGlass,
    TabsAnimated, TabsFolder, TabsCards, TabsMinimal,
    TabsSegmented, TabsIconOnly
} from '@/components/ui-component/tabs';

import {
    tabsUnderlineCode, tabsPillsCode, tabsVerticalCode, tabsGlassCode,
    tabsAnimatedCode, tabsFolderCode, tabsCardsCode, tabsMinimalCode,
    tabsSegmentedCode, tabsIconOnlyCode
} from "@/code/tabs-code";

export const tabsComponents = [
    { id: 'tabs-underline', name: 'Tabs Underline', preview: <TabsUnderline />, code: tabsUnderlineCode },
    { id: 'tabs-pills', name: 'Tabs Pills', preview: <TabsPills />, code: tabsPillsCode },
    { id: 'tabs-vertical', name: 'Tabs Vertical', preview: <TabsVertical />, code: tabsVerticalCode },
    { id: 'tabs-glass', name: 'Tabs Glass', preview: <TabsGlass />, code: tabsGlassCode },
    { id: 'tabs-animated', name: 'Tabs Animated', preview: <TabsAnimated />, code: tabsAnimatedCode },
    { id: 'tabs-folder', name: 'Tabs Folder', preview: <TabsFolder />, code: tabsFolderCode },
    { id: 'tabs-cards', name: 'Tabs Cards', preview: <TabsCards />, code: tabsCardsCode },
    { id: 'tabs-minimal', name: 'Tabs Minimal', preview: <TabsMinimal />, code: tabsMinimalCode },
    { id: 'tabs-segmented', name: 'Tabs Segmented', preview: <TabsSegmented />, code: tabsSegmentedCode },
    { id: 'tabs-icon-only', name: 'Tabs Icon Only', preview: <TabsIconOnly />, code: tabsIconOnlyCode },
];

export const tabsCategories: Record<string, { title: string; description: string; components: any[] }> = {
    'Underline': {
        title: 'Underline Tabs',
        description: 'Classic tabs with an animated underline indicator.',
        components: [
            { id: 'tabs-underline', name: 'Tabs Underline', preview: <TabsUnderline />, code: tabsUnderlineCode }
        ]
    },
    'Pills': {
        title: 'Pill Tabs',
        description: 'Rounded pill-shaped tabs for a modern look.',
        components: [
            { id: 'tabs-pills', name: 'Tabs Pills', preview: <TabsPills />, code: tabsPillsCode }
        ]
    },
    'Vertical': {
        title: 'Vertical Tabs',
        description: 'Side-by-side layout suitable for settings pages.',
        components: [
            { id: 'tabs-vertical', name: 'Tabs Vertical', preview: <TabsVertical />, code: tabsVerticalCode }
        ]
    },
    'Glass': {
        title: 'Glassmorphism Tabs',
        description: 'Translucent tabs with blur effects.',
        components: [
            { id: 'tabs-glass', name: 'Tabs Glass', preview: <TabsGlass />, code: tabsGlassCode }
        ]
    },
    'Animated': {
        title: 'Animated Tabs',
        description: 'Tabs with smooth transition effects.',
        components: [
            { id: 'tabs-animated', name: 'Tabs Animated', preview: <TabsAnimated />, code: tabsAnimatedCode }
        ]
    },
    'Folder': {
        title: 'Folder Tabs',
        description: 'File-folder style tabs useful for IDEs or content organizers.',
        components: [
            { id: 'tabs-folder', name: 'Tabs Folder', preview: <TabsFolder />, code: tabsFolderCode }
        ]
    },
    'Cards': {
        title: 'Card Tabs',
        description: 'Large clickable cards acting as radio selection tabs.',
        components: [
            { id: 'tabs-cards', name: 'Tabs Cards', preview: <TabsCards />, code: tabsCardsCode }
        ]
    },
    'Minimal': {
        title: 'Minimal Tabs',
        description: 'Clean, text-focused tabs with minimal decoration.',
        components: [
            { id: 'tabs-minimal', name: 'Tabs Minimal', preview: <TabsMinimal />, code: tabsMinimalCode }
        ]
    },
    'Segmented': {
        title: 'Segmented Control',
        description: 'iOS-style segmented controls for switching views.',
        components: [
            { id: 'tabs-segmented', name: 'Tabs Segmented', preview: <TabsSegmented />, code: tabsSegmentedCode }
        ]
    },
    'Icon Only': {
        title: 'Icon Tabs',
        description: 'Space-saving tabs using only icons.',
        components: [
            { id: 'tabs-icon-only', name: 'Tabs Icon Only', preview: <TabsIconOnly />, code: tabsIconOnlyCode }
        ]
    }
};

