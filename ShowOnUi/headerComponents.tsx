
import HeaderSimple from "@/components/ui-component/headers/HeaderSimple";
import HeaderCentered from "@/components/ui-component/headers/HeaderCentered";
import HeaderWithSearch from "@/components/ui-component/headers/HeaderWithSearch";
import HeaderMegaMenu from "@/components/ui-component/headers/HeaderMegaMenu";
import HeaderDark from "@/components/ui-component/headers/HeaderDark";
import HeaderTransparent from "@/components/ui-component/headers/HeaderTransparent";
import HeaderStacked from "@/components/ui-component/headers/HeaderStacked";
import HeaderEcommerce from "@/components/ui-component/headers/HeaderEcommerce";
import HeaderGradient from "@/components/ui-component/headers/HeaderGradient";
import HeaderFloating from "@/components/ui-component/headers/HeaderFloating";

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

export const headerComponents = [
    {
        id: "header-simple",
        name: "Simple Header",
        preview: <HeaderSimple />,
        code: headerSimpleCode
    },
    {
        id: "header-centered",
        name: "Centered Header",
        preview: <HeaderCentered />,
        code: headerCenteredCode
    },
    {
        id: "header-search",
        name: "Header with Search",
        preview: <HeaderWithSearch />,
        code: headerWithSearchCode
    },
    {
        id: "header-mega-menu",
        name: "Mega Menu Header",
        preview: <HeaderMegaMenu />,
        code: headerMegaMenuCode
    },
    {
        id: "header-dark",
        name: "Dark Header",
        preview: <HeaderDark />,
        code: headerDarkCode
    },
    {
        id: "header-transparent",
        name: "Transparent Header",
        preview: <HeaderTransparent />,
        code: headerTransparentCode
    },
    {
        id: "header-stacked",
        name: "Stacked Header",
        preview: <HeaderStacked />,
        code: headerStackedCode
    },
    {
        id: "header-ecommerce",
        name: "E-Commerce Header",
        preview: <HeaderEcommerce />,
        code: headerEcommerceCode
    },
    {
        id: "header-gradient",
        name: "Gradient Header",
        preview: <HeaderGradient />,
        code: headerGradientCode
    },
    {
        id: "header-floating",
        name: "Floating Header",
        preview: <HeaderFloating />,
        code: headerFloatingCode
    }
];
