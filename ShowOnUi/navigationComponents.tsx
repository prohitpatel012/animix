
import React from 'react';

// Headers
import {
    HeaderSimple, HeaderCentered, HeaderWithSearch, HeaderMegaMenu,
    HeaderDark, HeaderTransparent, HeaderStacked, HeaderEcommerce,
    HeaderGradient, HeaderFloating
} from '@/components/ui-component/headers';

import {
    headerSimpleCode,
    headerCenteredCode,
    headerWithSearchCode,
    headerMegaMenuCode,
    headerDarkCode,
    headerTransparentCode,
    headerStackedCode,
    headerEcommerceCode,
    headerGradientCode,
    headerFloatingCode
} from "@/code/header-code";

// Sidebars
import {
    SidebarSimple, SidebarDark, SidebarMinimal, SidebarWithSearch,
    SidebarDouble, SidebarSlackStyle, SidebarFloating, SidebarNested,
    SidebarWithAvatar, SidebarCollapsible
} from '@/components/ui-component/sidebars';

import ResponsiveSidebar from '@/components/ui-component/ResponsiveSidebar/ResponsiveSidebar';

import {
    sidebarSimpleCode, sidebarDarkCode, sidebarMinimalCode, sidebarWithSearchCode,
    sidebarDoubleCode, sidebarSlackStyleCode, sidebarFloatingCode, sidebarNestedCode,
    sidebarWithAvatarCode, sidebarCollapsibleCode
} from "@/code/sidebar-code";

import { responsiveSideBarCode } from "@/code/responsiveSidebar-code";

// Breadcrumbs
import {
    BreadcrumbSimple, BreadcrumbChevron, BreadcrumbBackground,
    BreadcrumbHomeIcon, BreadcrumbCollapsed, BreadcrumbFullWidth,
    BreadcrumbArrow, BreadcrumbDark, BreadcrumbGlass, BreadcrumbMinimal
} from '@/components/ui-component/breadcrumbs';

import {
    breadcrumbSimpleCode, breadcrumbChevronCode, breadcrumbBackgroundCode,
    breadcrumbHomeIconCode, breadcrumbCollapsedCode, breadcrumbFullWidthCode,
    breadcrumbArrowCode, breadcrumbDarkCode, breadcrumbGlassCode, breadcrumbMinimalCode
} from "@/code/breadcrumb-code";

// Footer
import {
    FooterSimple, FooterLarge, FooterDark, FooterCentered,
    FooterSocial, FooterNewsletter, FooterSitemap, FooterMinimal,
    FooterApp, FooterLegal
} from '@/components/ui-component/footer';

import {
    footerSimpleCode, footerLargeCode, footerDarkCode, footerCenteredCode,
    footerSocialCode, footerNewsletterCode, footerSitemapCode, footerMinimalCode,
    footerAppCode, footerLegalCode
} from "@/code/footer-code";

// Nav Menus
import {
    NavSimple, NavCentered, NavSearch, NavMega, NavSidebar,
    NavMobile, NavTransparent, NavDouble, NavBottom, NavFloating
} from '@/components/ui-component/navigation';

import {
    navSimpleCode, navCenteredCode, navSearchCode, navMegaCode, navSidebarCode,
    navMobileCode, navTransparentCode, navDoubleCode, navBottomCode, navFloatingCode
} from "@/code/nav-menu-code";



// --- Headers ---
export const headerComponents = [
    { id: 'header-simple', name: 'Header Simple', preview: <HeaderSimple />, code: headerSimpleCode },
    { id: 'header-centered', name: 'Header Centered', preview: <HeaderCentered />, code: headerCenteredCode },
    { id: 'header-with-search', name: 'Header With Search', preview: <HeaderWithSearch />, code: headerWithSearchCode },
    { id: 'header-mega-menu', name: 'Header Mega Menu', preview: <HeaderMegaMenu />, code: headerMegaMenuCode },
    { id: 'header-dark', name: 'Header Dark', preview: <HeaderDark />, code: headerDarkCode },
    { id: 'header-transparent', name: 'Header Transparent', preview: <HeaderTransparent />, code: headerTransparentCode },
    { id: 'header-stacked', name: 'Header Stacked', preview: <HeaderStacked />, code: headerStackedCode },
    { id: 'header-ecommerce', name: 'Header Ecommerce', preview: <HeaderEcommerce />, code: headerEcommerceCode },
    { id: 'header-gradient', name: 'Header Gradient', preview: <HeaderGradient />, code: headerGradientCode },
    { id: 'header-floating', name: 'Header Floating', preview: <HeaderFloating />, code: headerFloatingCode },
];

// --- Sidebars ---
export const sidebarComponents = [
    { id: 'sidebar-simple', name: 'Sidebar Simple', preview: <SidebarSimple />, code: sidebarSimpleCode },
    { id: 'sidebar-dark', name: 'Sidebar Dark', preview: <SidebarDark />, code: sidebarDarkCode },
    { id: 'sidebar-minimal', name: 'Sidebar Minimal', preview: <SidebarMinimal />, code: sidebarMinimalCode },
    { id: 'sidebar-with-search', name: 'Sidebar With Search', preview: <SidebarWithSearch />, code: sidebarWithSearchCode },
    { id: 'sidebar-double', name: 'Sidebar Double', preview: <SidebarDouble />, code: sidebarDoubleCode },
    { id: 'sidebar-slack-style', name: 'Sidebar Slack Style', preview: <SidebarSlackStyle />, code: sidebarSlackStyleCode },
    { id: 'sidebar-floating', name: 'Sidebar Floating', preview: <SidebarFloating />, code: sidebarFloatingCode },
    { id: 'sidebar-nested', name: 'Sidebar Nested', preview: <SidebarNested />, code: sidebarNestedCode },
    { id: 'sidebar-with-avatar', name: 'Sidebar With Avatar', preview: <SidebarWithAvatar />, code: sidebarWithAvatarCode },
    { id: 'sidebar-collapsible', name: 'Sidebar Collapsible', preview: <SidebarCollapsible />, code: sidebarCollapsibleCode },
    { id: 'responsive-sidebar', name: 'Responsive Sidebar', preview: <ResponsiveSidebar />, code: responsiveSideBarCode },
];

// --- Breadcrumbs ---
export const breadcrumbComponents = [
    { id: 'breadcrumb-simple', name: 'Breadcrumb Simple', preview: <BreadcrumbSimple />, code: breadcrumbSimpleCode },
    { id: 'breadcrumb-chevron', name: 'Breadcrumb Chevron', preview: <BreadcrumbChevron />, code: breadcrumbChevronCode },
    { id: 'breadcrumb-background', name: 'Breadcrumb Background', preview: <BreadcrumbBackground />, code: breadcrumbBackgroundCode },
    { id: 'breadcrumb-home-icon', name: 'Breadcrumb Home Icon', preview: <BreadcrumbHomeIcon />, code: breadcrumbHomeIconCode },
    { id: 'breadcrumb-collapsed', name: 'Breadcrumb Collapsed', preview: <BreadcrumbCollapsed />, code: breadcrumbCollapsedCode },
    { id: 'breadcrumb-full-width', name: 'Breadcrumb Full Width', preview: <BreadcrumbFullWidth />, code: breadcrumbFullWidthCode },
    { id: 'breadcrumb-arrow', name: 'Breadcrumb Arrow', preview: <BreadcrumbArrow />, code: breadcrumbArrowCode },
    { id: 'breadcrumb-dark', name: 'Breadcrumb Dark', preview: <BreadcrumbDark />, code: breadcrumbDarkCode },
    { id: 'breadcrumb-glass', name: 'Breadcrumb Glass', preview: <BreadcrumbGlass />, code: breadcrumbGlassCode },
    { id: 'breadcrumb-minimal', name: 'Breadcrumb Minimal', preview: <BreadcrumbMinimal />, code: breadcrumbMinimalCode },
];

// --- Footer ---
export const footerComponents = [
    { id: 'footer-simple', name: 'Footer Simple', preview: <FooterSimple />, code: footerSimpleCode },
    { id: 'footer-large', name: 'Footer Large', preview: <FooterLarge />, code: footerLargeCode },
    { id: 'footer-dark', name: 'Footer Dark', preview: <FooterDark />, code: footerDarkCode },
    { id: 'footer-centered', name: 'Footer Centered', preview: <FooterCentered />, code: footerCenteredCode },
    { id: 'footer-social', name: 'Footer Social', preview: <FooterSocial />, code: footerSocialCode },
    { id: 'footer-newsletter', name: 'Footer Newsletter', preview: <FooterNewsletter />, code: footerNewsletterCode },
    { id: 'footer-sitemap', name: 'Footer Sitemap', preview: <FooterSitemap />, code: footerSitemapCode },
    { id: 'footer-minimal', name: 'Footer Minimal', preview: <FooterMinimal />, code: footerMinimalCode },
    { id: 'footer-app', name: 'Footer App', preview: <FooterApp />, code: footerAppCode },
    { id: 'footer-legal', name: 'Footer Legal', preview: <FooterLegal />, code: footerLegalCode },
];

// --- Nav Menus ---
export const navMenuComponents = [
    { id: 'nav-simple', name: 'Nav Simple', preview: <NavSimple />, code: navSimpleCode },
    { id: 'nav-centered', name: 'Nav Centered', preview: <NavCentered />, code: navCenteredCode },
    { id: 'nav-search', name: 'Nav Search', preview: <NavSearch />, code: navSearchCode },
    { id: 'nav-mega', name: 'Nav Mega', preview: <NavMega />, code: navMegaCode },
    { id: 'nav-sidebar', name: 'Nav Sidebar', preview: <NavSidebar />, code: navSidebarCode },
    { id: 'nav-mobile', name: 'Nav Mobile', preview: <NavMobile />, code: navMobileCode },
    { id: 'nav-transparent', name: 'Nav Transparent', preview: <NavTransparent />, code: navTransparentCode },
    { id: 'nav-double', name: 'Nav Double', preview: <NavDouble />, code: navDoubleCode },
    { id: 'nav-bottom', name: 'Nav Bottom', preview: <NavBottom />, code: navBottomCode },
    { id: 'nav-floating', name: 'Nav Floating', preview: <NavFloating />, code: navFloatingCode },
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
