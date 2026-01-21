
import React from 'react';
import LoginSimple from "@/components/ui-component/authentication/LoginSimple";
import LoginModern from "@/components/ui-component/authentication/LoginModern";
import LoginSplit from "@/components/ui-component/authentication/LoginSplit";
import LoginSocial from "@/components/ui-component/authentication/LoginSocial";
import {
    LoginSimpleCode,
    LoginModernCode,
    LoginSplitCode,
    LoginSocialCode,
    SignupSimpleCode,
    SignupSplitCode,
    SignupImageCode
} from './authenticationCode';

import SignupSimple from "@/components/ui-component/authentication/SignupSimple";
import SignupSplit from "@/components/ui-component/authentication/SignupSplit";
import SignupImage from "@/components/ui-component/authentication/SignupImage";

import LogoutCard from "@/components/ui-component/authentication/LogoutCard";
import LogoutSimple from "@/components/ui-component/authentication/LogoutSimple";
import LogoutModern from "@/components/ui-component/authentication/LogoutModern";
import LogoutSplit from "@/components/ui-component/authentication/LogoutSplit";

import ForgotPasswordSimple from "@/components/ui-component/authentication/ForgotPasswordSimple";
import ForgotPasswordSplit from "@/components/ui-component/authentication/ForgotPasswordSplit";

import AccountLockedModern from "@/components/ui-component/authentication/AccountLockedModern";
import AccountLockedSimple from "@/components/ui-component/authentication/AccountLockedSimple";

import MagicLinkCard from "@/components/ui-component/authentication/MagicLinkCard";
import MagicLinkSimple from "@/components/ui-component/authentication/MagicLinkSimple";

import TwoFactorSimple from "@/components/ui-component/authentication/TwoFactorSimple";
import TwoFactorCard from "@/components/ui-component/authentication/TwoFactorCard";

// Placeholder code strings - In a real scenario these would be imported from @/code/authentication-code
const PLACEHOLDER_CODE = "// Code coming soon";

export const loginComponents = [
    { id: 'login-simple', name: 'Login Simple', preview: <LoginSimple />, code: LoginSimpleCode },
    { id: 'login-modern', name: 'Login Modern', preview: <LoginModern />, code: LoginModernCode },
    { id: 'login-split', name: 'Login Split', preview: <LoginSplit />, code: LoginSplitCode },
    { id: 'login-social', name: 'Login Social', preview: <LoginSocial />, code: LoginSocialCode },
];

export const signupComponents = [
    { id: 'signup-simple', name: 'Signup Simple', preview: <SignupSimple />, code: SignupSimpleCode },
    { id: 'signup-split', name: 'Signup Split', preview: <SignupSplit />, code: SignupSplitCode },
    { id: 'signup-image', name: 'Signup Image', preview: <SignupImage />, code: SignupImageCode },
];

export const logoutComponents = [
    { id: 'logout-card', name: 'Logout Card', preview: <LogoutCard />, code: PLACEHOLDER_CODE },
    { id: 'logout-simple', name: 'Logout Simple', preview: <LogoutSimple />, code: PLACEHOLDER_CODE },
    { id: 'logout-modern', name: 'Logout Modern', preview: <LogoutModern />, code: PLACEHOLDER_CODE },
    { id: 'logout-split', name: 'Logout Split', preview: <LogoutSplit />, code: PLACEHOLDER_CODE },
];

export const forgotPasswordComponents = [
    { id: 'forgot-password-simple', name: 'Forgot Password Simple', preview: <ForgotPasswordSimple />, code: PLACEHOLDER_CODE },
    { id: 'forgot-password-split', name: 'Forgot Password Split', preview: <ForgotPasswordSplit />, code: PLACEHOLDER_CODE },
];

export const accountLockedComponents = [
    { id: 'account-locked-modern', name: 'Account Locked Modern', preview: <AccountLockedModern />, code: PLACEHOLDER_CODE },
    { id: 'account-locked-simple', name: 'Account Locked Simple', preview: <AccountLockedSimple />, code: PLACEHOLDER_CODE },
];

export const magicLinkComponents = [
    { id: 'magic-link-card', name: 'Magic Link Card', preview: <MagicLinkCard />, code: PLACEHOLDER_CODE },
    { id: 'magic-link-simple', name: 'Magic Link Simple', preview: <MagicLinkSimple />, code: PLACEHOLDER_CODE },
];

export const twoFactorComponents = [
    { id: 'two-factor-simple', name: 'Two Factor Simple', preview: <TwoFactorSimple />, code: PLACEHOLDER_CODE },
    { id: 'two-factor-card', name: 'Two Factor Card', preview: <TwoFactorCard />, code: PLACEHOLDER_CODE },
];

// Map of subcategory slug to component list
export const authenticationCategories: Record<string, { title: string; description: string; components: any[] }> = {
    'Login': {
        title: 'Login',
        description: 'Various login forms including simple, split, and social authentication.',
        components: loginComponents
    },
    'Signup': {
        title: 'Signup',
        description: 'Registration forms with different layouts and styles.',
        components: signupComponents
    },
    'Logout': {
        title: 'Logout',
        description: 'Logout confirmation screens and redirect messages.',
        components: logoutComponents
    },
    'Forgot Password': {
        title: 'Forgot Password',
        description: 'Password recovery and reset request forms.',
        components: forgotPasswordComponents
    },
    'Account Locked': {
        title: 'Account Locked',
        description: 'Screens for locked, suspended, or banned accounts.',
        components: accountLockedComponents
    },
    'Magic Link': {
        title: 'Magic Link',
        description: 'Passwordless login components using magic links.',
        components: magicLinkComponents
    },
    'Two Factor': {
        title: 'Two Factor Auth',
        description: '2FA verification screens and OTP inputs.',
        components: twoFactorComponents
    }
};
