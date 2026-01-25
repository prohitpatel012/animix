
import React from 'react';
import ColorGrid from '@/components/ui-component/colors/ColorGrid';
import ColorCombinations from '@/components/ui-component/colors/ColorCombinations';
import MegaColorCombinations from '@/components/ui-component/colors/MegaColorCombinations';
import { colorGridCode, colorCombinationsCode, megaColorCombinationsCode } from '@/code/colors-code';

export const colorsComponents = [
  { id: 'massive-palette', name: 'Massive Palette', preview: <ColorGrid />, code: colorGridCode },
  { id: 'color-combinations', name: 'Color Combinations', preview: <ColorCombinations />, code: colorCombinationsCode },
  { id: 'mega-combinations', name: 'Mega Combinations', preview: <MegaColorCombinations />, code: megaColorCombinationsCode },
];

export const colorsCategories: Record<string, { title: string; description: string; components: any[] }> = {
  'Massive Palette': {
    title: 'Massive Color Palette',
    description: 'A comprehensive grid of Tailwind CSS colors.',
    components: [
      { id: 'massive-palette', name: 'Massive Palette', preview: <ColorGrid />, code: colorGridCode }
    ]
  },
  'Color Combinations': {
    title: 'Color Combinations',
    description: 'Curated pairings of colors for beautiful UIs.',
    components: [
      { id: 'color-combinations', name: 'Color Combinations', preview: <ColorCombinations />, code: colorCombinationsCode }
    ]
  },
  'Mega Combinations': {
    title: 'Mega Niche Combinations',
    description: '100+ Industry-specific color palettes for E-commerce, SaaS, Health, and more.',
    components: [
      { id: 'mega-combinations', name: 'Mega Combinations', preview: <MegaColorCombinations />, code: megaColorCombinationsCode }
    ]
  }
};
