
import React from 'react';

// Landing Pages
import LandingPageModern from '@/components/ui-component/landing-pages/LandingPageModern';
import LandingPageSaaS from '@/components/ui-component/landing-pages/LandingPageSaaS';
import LandingPageAgency from '@/components/ui-component/landing-pages/LandingPageAgency';

import {
    landingPageModernCode,
    landingPageSaaSCode,
    landingPageAgencyCode
} from '@/code/landing-page-code';


export const landingPageCategories: Record<string, { title: string; description: string; components: any[] }> = {
    'Modern': {
        title: 'Modern Landing Page',
        description: 'A sleek, high-conversion landing page with modern design elements.',
        components: [
            { id: 'landing-modern', name: 'Modern Landing', preview: <LandingPageModern />, code: landingPageModernCode },
        ]
    },
    'SaaS': {
        title: 'SaaS Platform',
        description: 'Complete SaaS home page with features, pricing, and CTA.',
        components: [
            { id: 'landing-saas', name: 'SaaS Landing', preview: <LandingPageSaaS />, code: landingPageSaaSCode },
        ]
    },
    'Agency': {
        title: 'Digital Agency',
        description: 'Portfolio and service focused layout for agencies.',
        components: [
            { id: 'landing-agency', name: 'Agency Landing', preview: <LandingPageAgency />, code: landingPageAgencyCode },
        ]
    }
};
