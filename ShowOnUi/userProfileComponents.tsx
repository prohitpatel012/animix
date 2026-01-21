import React from 'react';

// User Profile
import UserDashboard from '@/components/ui-component/user-profile/UserDashboard';

import {
    userDashboardCode
} from "@/code/user-profile-code";

// --- User Profile ---
export const userDashboardComponents = [
    { id: 'user-dashboard', name: 'User Dashboard', preview: <UserDashboard />, code: userDashboardCode },
];

export const userProfileCategories: Record<string, { title: string; description: string; components: any[] }> = {
    'User Profile': {
        title: 'User Dashboard',
        description: 'Comprehensive user dashboard layouts.',
        components: userDashboardComponents
    }
};
