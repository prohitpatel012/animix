
import React from 'react';

import {
    TabsUnderline, TabsPills, TabsVertical, TabsGlass,
    TabsAnimated, TabsFolder, TabsCards, TabsMinimal,
    TabsSegmented, TabsIconOnly
} from '@/components/ui-component/tabs';

const PLACEHOLDER_CODE = "// Code coming soon";

export const tabsComponents = [
    { id: 'tabs-underline', name: 'Tabs Underline', preview: <TabsUnderline />, code: PLACEHOLDER_CODE },
    { id: 'tabs-pills', name: 'Tabs Pills', preview: <TabsPills />, code: PLACEHOLDER_CODE },
    { id: 'tabs-vertical', name: 'Tabs Vertical', preview: <TabsVertical />, code: PLACEHOLDER_CODE },
    { id: 'tabs-glass', name: 'Tabs Glass', preview: <TabsGlass />, code: PLACEHOLDER_CODE },
    { id: 'tabs-animated', name: 'Tabs Animated', preview: <TabsAnimated />, code: PLACEHOLDER_CODE },
    { id: 'tabs-folder', name: 'Tabs Folder', preview: <TabsFolder />, code: PLACEHOLDER_CODE },
    { id: 'tabs-cards', name: 'Tabs Cards', preview: <TabsCards />, code: PLACEHOLDER_CODE },
    { id: 'tabs-minimal', name: 'Tabs Minimal', preview: <TabsMinimal />, code: PLACEHOLDER_CODE },
    { id: 'tabs-segmented', name: 'Tabs Segmented', preview: <TabsSegmented />, code: PLACEHOLDER_CODE },
    { id: 'tabs-icon-only', name: 'Tabs Icon Only', preview: <TabsIconOnly />, code: PLACEHOLDER_CODE },
];
