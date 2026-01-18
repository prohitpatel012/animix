
import React from 'react';

// Headers
import {
    HeaderSimple, HeaderCentered, HeaderWithSearch, HeaderMegaMenu,
    HeaderDark, HeaderTransparent, HeaderStacked, HeaderEcommerce,
    HeaderGradient, HeaderFloating
} from '@/components/ui-component/headers';

// Sidebars
import {
    SidebarSimple, SidebarDark, SidebarMinimal, SidebarWithSearch,
    SidebarDouble, SidebarSlackStyle, SidebarFloating, SidebarNested,
    SidebarWithAvatar, SidebarCollapsible
} from '@/components/ui-component/sidebars';

import ResponsiveSidebar from '@/components/ui-component/ResponsiveSidebar/ResponsiveSidebar';

// Breadcrumbs
import {
    BreadcrumbSimple, BreadcrumbChevron, BreadcrumbBackground,
    BreadcrumbHomeIcon, BreadcrumbCollapsed, BreadcrumbFullWidth,
    BreadcrumbArrow, BreadcrumbDark, BreadcrumbGlass, BreadcrumbMinimal
} from '@/components/ui-component/breadcrumbs';

// Footer
import {
    FooterSimple, FooterLarge, FooterDark, FooterCentered,
    FooterSocial, FooterNewsletter, FooterSitemap, FooterMinimal,
    FooterApp, FooterLegal
} from '@/components/ui-component/footer';

// Nav Menus
import {
    NavSimple, NavCentered, NavSearch, NavMega, NavSidebar,
    NavMobile, NavTransparent, NavDouble, NavBottom, NavFloating
} from '@/components/ui-component/navigation';

const PLACEHOLDER_CODE = "// Code coming soon";

// --- Headers ---
export const headerComponents = [
    { id: 'header-simple', name: 'Header Simple', preview: <HeaderSimple />, code: PLACEHOLDER_CODE },
    { id: 'header-centered', name: 'Header Centered', preview: <HeaderCentered />, code: PLACEHOLDER_CODE },
    { id: 'header-with-search', name: 'Header With Search', preview: <HeaderWithSearch />, code: PLACEHOLDER_CODE },
    { id: 'header-mega-menu', name: 'Header Mega Menu', preview: <HeaderMegaMenu />, code: PLACEHOLDER_CODE },
    { id: 'header-dark', name: 'Header Dark', preview: <HeaderDark />, code: PLACEHOLDER_CODE },
    { id: 'header-transparent', name: 'Header Transparent', preview: <HeaderTransparent />, code: PLACEHOLDER_CODE },
    { id: 'header-stacked', name: 'Header Stacked', preview: <HeaderStacked />, code: PLACEHOLDER_CODE },
    { id: 'header-ecommerce', name: 'Header Ecommerce', preview: <HeaderEcommerce />, code: PLACEHOLDER_CODE },
    { id: 'header-gradient', name: 'Header Gradient', preview: <HeaderGradient />, code: PLACEHOLDER_CODE },
    { id: 'header-floating', name: 'Header Floating', preview: <HeaderFloating />, code: PLACEHOLDER_CODE },
];

// --- Sidebars ---
export const sidebarComponents = [
    { id: 'sidebar-simple', name: 'Sidebar Simple', preview: <SidebarSimple />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-dark', name: 'Sidebar Dark', preview: <SidebarDark />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-minimal', name: 'Sidebar Minimal', preview: <SidebarMinimal />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-with-search', name: 'Sidebar With Search', preview: <SidebarWithSearch />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-double', name: 'Sidebar Double', preview: <SidebarDouble />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-slack-style', name: 'Sidebar Slack Style', preview: <SidebarSlackStyle />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-floating', name: 'Sidebar Floating', preview: <SidebarFloating />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-nested', name: 'Sidebar Nested', preview: <SidebarNested />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-with-avatar', name: 'Sidebar With Avatar', preview: <SidebarWithAvatar />, code: PLACEHOLDER_CODE },
    { id: 'sidebar-collapsible', name: 'Sidebar Collapsible', preview: <SidebarCollapsible />, code: PLACEHOLDER_CODE },
    { id: 'responsive-sidebar', name: 'Responsive Sidebar', preview: <ResponsiveSidebar />, code: PLACEHOLDER_CODE },
];

// --- Breadcrumbs ---
export const breadcrumbComponents = [
    { id: 'breadcrumb-simple', name: 'Breadcrumb Simple', preview: <BreadcrumbSimple />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-chevron', name: 'Breadcrumb Chevron', preview: <BreadcrumbChevron />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-background', name: 'Breadcrumb Background', preview: <BreadcrumbBackground />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-home-icon', name: 'Breadcrumb Home Icon', preview: <BreadcrumbHomeIcon />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-collapsed', name: 'Breadcrumb Collapsed', preview: <BreadcrumbCollapsed />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-full-width', name: 'Breadcrumb Full Width', preview: <BreadcrumbFullWidth />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-arrow', name: 'Breadcrumb Arrow', preview: <BreadcrumbArrow />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-dark', name: 'Breadcrumb Dark', preview: <BreadcrumbDark />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-glass', name: 'Breadcrumb Glass', preview: <BreadcrumbGlass />, code: PLACEHOLDER_CODE },
    { id: 'breadcrumb-minimal', name: 'Breadcrumb Minimal', preview: <BreadcrumbMinimal />, code: PLACEHOLDER_CODE },
];

// --- Footer ---
export const footerComponents = [
    { id: 'footer-simple', name: 'Footer Simple', preview: <FooterSimple />, code: PLACEHOLDER_CODE },
    { id: 'footer-large', name: 'Footer Large', preview: <FooterLarge />, code: PLACEHOLDER_CODE },
    { id: 'footer-dark', name: 'Footer Dark', preview: <FooterDark />, code: PLACEHOLDER_CODE },
    { id: 'footer-centered', name: 'Footer Centered', preview: <FooterCentered />, code: PLACEHOLDER_CODE },
    { id: 'footer-social', name: 'Footer Social', preview: <FooterSocial />, code: PLACEHOLDER_CODE },
    { id: 'footer-newsletter', name: 'Footer Newsletter', preview: <FooterNewsletter />, code: PLACEHOLDER_CODE },
    { id: 'footer-sitemap', name: 'Footer Sitemap', preview: <FooterSitemap />, code: PLACEHOLDER_CODE },
    { id: 'footer-minimal', name: 'Footer Minimal', preview: <FooterMinimal />, code: PLACEHOLDER_CODE },
    { id: 'footer-app', name: 'Footer App', preview: <FooterApp />, code: PLACEHOLDER_CODE },
    { id: 'footer-legal', name: 'Footer Legal', preview: <FooterLegal />, code: PLACEHOLDER_CODE },
];

// --- Nav Menus ---
export const navMenuComponents = [
    { id: 'nav-simple', name: 'Nav Simple', preview: <NavSimple />, code: PLACEHOLDER_CODE },
    { id: 'nav-centered', name: 'Nav Centered', preview: <NavCentered />, code: PLACEHOLDER_CODE },
    { id: 'nav-search', name: 'Nav Search', preview: <NavSearch />, code: PLACEHOLDER_CODE },
    { id: 'nav-mega', name: 'Nav Mega', preview: <NavMega />, code: PLACEHOLDER_CODE },
    { id: 'nav-sidebar', name: 'Nav Sidebar', preview: <NavSidebar />, code: PLACEHOLDER_CODE },
    { id: 'nav-mobile', name: 'Nav Mobile', preview: <NavMobile />, code: PLACEHOLDER_CODE },
    { id: 'nav-transparent', name: 'Nav Transparent', preview: <NavTransparent />, code: PLACEHOLDER_CODE },
    { id: 'nav-double', name: 'Nav Double', preview: <NavDouble />, code: PLACEHOLDER_CODE },
    { id: 'nav-bottom', name: 'Nav Bottom', preview: <NavBottom />, code: PLACEHOLDER_CODE },
    { id: 'nav-floating', name: 'Nav Floating', preview: <NavFloating />, code: PLACEHOLDER_CODE },
];


export const navigationCategories: Record<string, { title: string; description: string; components: any[] }> = {
    'Headers': {
        title: 'Headers',
        description: 'Page headers and top navigation bars.',
        components: headerComponents
    },
    'Sidebars': {
        title: 'Sidebars',
        description: 'Vertical navigation sidebars.',
        components: sidebarComponents
    },
    'Breadcrumbs': {
        title: 'Breadcrumbs',
        description: 'Navigation trails for hierarchical pages.',
        components: breadcrumbComponents
    },
    'Footer': {
        title: 'Footer',
        description: 'Page footers with links and info.',
        components: footerComponents
    },
    'Nav Menus': {
        title: 'Navigation Menus',
        description: 'General purpose navigation components.',
        components: navMenuComponents
    }
};
