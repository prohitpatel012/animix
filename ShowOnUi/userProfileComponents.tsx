import React from 'react';

// User Profile Components
import AccountSettings from '@/components/ui-component/user-profile/AccountSettings';
import ActivityLog from '@/components/ui-component/user-profile/ActivityLog';
import AvatarUpload from '@/components/ui-component/user-profile/AvatarUpload';
import Billing from '@/components/ui-component/user-profile/Billing';
import ConnectedAccounts from '@/components/ui-component/user-profile/ConnectedAccounts';
import DeactivateAccount from '@/components/ui-component/user-profile/DeactivateAccount';
import DeleteAccount from '@/components/ui-component/user-profile/DeleteAccount';
import EditProfile from '@/components/ui-component/user-profile/EditProfile';
import Invoices from '@/components/ui-component/user-profile/Invoices';
import NotificationSettings from '@/components/ui-component/user-profile/NotificationSettings';
import PaymentMethods from '@/components/ui-component/user-profile/PaymentMethods';
import PrivacySettings from '@/components/ui-component/user-profile/PrivacySettings';
import SecuritySettings from '@/components/ui-component/user-profile/SecuritySettings';
import SessionManagement from '@/components/ui-component/user-profile/SessionManagement';
import Subscription from '@/components/ui-component/user-profile/Subscription';
import UpgradePlan from '@/components/ui-component/user-profile/UpgradePlan';
import UsageQuota from '@/components/ui-component/user-profile/UsageQuota';
import UserDashboard from '@/components/ui-component/user-profile/UserDashboard';
import UserProfile from '@/components/ui-component/user-profile/UserProfile';

const PLACEHOLDER_CODE = "// Code coming soon";

export const userProfileComponentsList = [
    { id: 'user-profile', name: 'User Profile', preview: <UserProfile />, code: PLACEHOLDER_CODE },
    { id: 'user-dashboard', name: 'User Dashboard', preview: <UserDashboard />, code: PLACEHOLDER_CODE },
    { id: 'edit-profile', name: 'Edit Profile', preview: <EditProfile />, code: PLACEHOLDER_CODE },
    { id: 'account-settings', name: 'Account Settings', preview: <AccountSettings />, code: PLACEHOLDER_CODE },
    { id: 'avatar-upload', name: 'Avatar Upload', preview: <AvatarUpload />, code: PLACEHOLDER_CODE },
    { id: 'security-settings', name: 'Security Settings', preview: <SecuritySettings />, code: PLACEHOLDER_CODE },
    { id: 'notification-settings', name: 'Notification Settings', preview: <NotificationSettings />, code: PLACEHOLDER_CODE },
    { id: 'privacy-settings', name: 'Privacy Settings', preview: <PrivacySettings />, code: PLACEHOLDER_CODE },
    { id: 'connected-accounts', name: 'Connected Accounts', preview: <ConnectedAccounts />, code: PLACEHOLDER_CODE },
    { id: 'session-management', name: 'Session Management', preview: <SessionManagement />, code: PLACEHOLDER_CODE },
    { id: 'billing', name: 'Billing', preview: <Billing />, code: PLACEHOLDER_CODE },
    { id: 'payment-methods', name: 'Payment Methods', preview: <PaymentMethods />, code: PLACEHOLDER_CODE },
    { id: 'invoices', name: 'Invoices', preview: <Invoices />, code: PLACEHOLDER_CODE },
    { id: 'subscription', name: 'Subscription', preview: <Subscription />, code: PLACEHOLDER_CODE },
    { id: 'upgrade-plan', name: 'Upgrade Plan', preview: <UpgradePlan />, code: PLACEHOLDER_CODE },
    { id: 'usage-quota', name: 'Usage Quota', preview: <UsageQuota />, code: PLACEHOLDER_CODE },
    { id: 'activity-log', name: 'Activity Log', preview: <ActivityLog />, code: PLACEHOLDER_CODE },
    { id: 'deactivate-account', name: 'Deactivate Account', preview: <DeactivateAccount />, code: PLACEHOLDER_CODE },
    { id: 'delete-account', name: 'Delete Account', preview: <DeleteAccount />, code: PLACEHOLDER_CODE },
];

export const userProfileCategories = {
    'User Profile': {
        title: 'User Profile & Settings',
        description: 'Comprehensive components for user profiles, dashboards, and account management.',
        components: userProfileComponentsList
    }
};
