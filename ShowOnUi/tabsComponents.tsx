
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
