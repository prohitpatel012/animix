export const LoginSimpleCode = `"use client";

import { BiLogoGoogle, BiLogoGithub, BiLogoFacebook } from "react-icons/bi";

export default function LoginSimple() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-neutral-950">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-10">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                        </div>
                        <div className="relative flex justify-center text-sm font-medium leading-6">
                            <span className="bg-white dark:bg-neutral-950 px-6 text-neutral-900 dark:text-neutral-400">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                            <BiLogoGoogle className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Sign in with Google</span>
                        </a>
                        <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                            <BiLogoGithub className="h-5 w-5" aria-hidden="true" />
                            <span className="sr-only">Sign in with GitHub</span>
                        </a>
                        <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                            <BiLogoFacebook className="h-5 w-5 text-[#1877F2]" aria-hidden="true" />
                            <span className="sr-only">Sign in with Facebook</span>
                        </a>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
}
`;

export const LoginModernCode = `"use client";

import { motion } from "motion/react";

export default function LoginModern() {
    return (
        <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1481487196290-c352beb62887?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                    <p className="text-neutral-200 mt-2">Please enter your details.</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            placeholder="mail@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-neutral-200 cursor-pointer">
                            <input type="checkbox" className="mr-2 rounded border-white/20 bg-white/10 checked:bg-purple-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-purple-300 hover:text-purple-200">Forgot password?</a>
                    </div>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center text-neutral-300 text-sm">
                    Don't have an account? <a href="#" className="text-white font-bold hover:underline">Sign up for free</a>
                </div>
            </motion.div>
        </div>
    )
}
`;

export const LoginSplitCode = `"use client";

import { BiLogoGoogle, BiWind } from "react-icons/bi";

export default function LoginSplit() {
    return (
        <div className="flex min-h-screen bg-white dark:bg-neutral-950">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                            <BiWind className="h-8 w-8" />
                            <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">Animix</span>
                        </div>
                        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                            Not a member?{' '}
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                Start a 14 day free trial
                            </a>
                        </p>
                    </div>

                    <div className="mt-10">
                        <div>
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-600 dark:bg-neutral-900 dark:border-neutral-700"
                                        />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm leading-6">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-10">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-neutral-200 dark:border-neutral-800" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white dark:bg-neutral-950 px-6 text-neutral-900 dark:text-neutral-400">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                                    <BiLogoGoogle className="h-5 w-5" aria-hidden="true" />
                                    <span className="sr-only">Sign in with Google</span>
                                </a>
                                <a href="#" className="flex w-full items-center justify-center gap-3 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-transparent">
                                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">SSO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt=""
                />
                <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply" />
            </div>
        </div>
    )
}
`;

export const LoginSocialCode = `"use client";

import { BiLogoGoogle, BiLogoGithub, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";

export default function LoginSocial() {
    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Sign in to your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-neutral-950 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-neutral-200 dark:border-neutral-800">
                    <div className="grid grid-cols-1 gap-4">
                        <button className="flex w-full justify-center items-center gap-3 rounded-md bg-[#DB4437] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#c23321] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#DB4437]">
                            <BiLogoGoogle className="h-5 w-5" aria-hidden="true" />
                            <span className="">Continue with Google</span>
                        </button>
                        <button className="flex w-full justify-center items-center gap-3 rounded-md bg-[#24292F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#24292F]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#24292F]">
                            <BiLogoGithub className="h-5 w-5" aria-hidden="true" />
                            <span className="">Continue with GitHub</span>
                        </button>
                        <button className="flex w-full justify-center items-center gap-3 rounded-md bg-[#1877F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1877F2]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1877F2]">
                            <BiLogoFacebook className="h-5 w-5" aria-hidden="true" />
                            <span className="">Continue with Facebook</span>
                        </button>
                        <button className="flex w-full justify-center items-center gap-3 rounded-md bg-[#1DA1F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1DA1F2]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1DA1F2]">
                            <BiLogoTwitter className="h-5 w-5" aria-hidden="true" />
                            <span className="">Continue with Twitter</span>
                        </button>
                    </div>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-neutral-300 dark:border-neutral-700" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white dark:bg-neutral-950 px-2 text-neutral-500">Or use email</span>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                Log in with email address <span aria-hidden="true">&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
`;

export const SignupSimpleCode = `"use client";

import { BiRightArrowAlt } from "react-icons/bi";

export default function SignupSimple() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white dark:bg-neutral-950 p-8 rounded-xl shadow-lg ring-1 ring-neutral-900/5 dark:ring-white/10">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        Join thousands of users building the future.
                    </p>
                </div>

                <form className="space-y-6" action="#" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                            />
                        </div>
                        <p className="mt-1 text-xs text-neutral-500">Must be at least 8 characters.</p>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-600 dark:bg-neutral-900 dark:border-neutral-700"
                        />
                        <label htmlFor="terms" className="ml-3 block text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                            I agree to the <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Terms</a> and <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                        >
                            Create Account <BiRightArrowAlt className="w-5 h-5" />
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                    Already have an account?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    )
}
`;

export const SignupSplitCode = `"use client";

import { BiCheck } from "react-icons/bi";

export default function SignupSplit() {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Marketing */}
            <div className="hidden lg:flex flex-1 relative bg-indigo-900 text-white flex-col justify-between p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

                <div className="relative z-10">
                    <span className="text-2xl font-bold tracking-tight">Animix</span>
                </div>

                <div className="relative z-10 max-w-lg">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Start building your dream project today.</h1>
                    <p className="text-indigo-200 text-lg mb-8">
                        Join over 10,000 developers who use our platform to ship faster and better.
                    </p>
                    <ul className="space-y-4">
                        {['Unlimited public projects', 'Community support', 'Free SSL certificates'].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <div className="flex-none rounded-full bg-indigo-500/20 p-1">
                                    <BiCheck className="w-5 h-5 text-indigo-300" />
                                </div>
                                <span className="text-indigo-100">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative z-10 text-xs text-indigo-300">
                    © 2024 Animix Inc. All rights reserved.
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white dark:bg-neutral-950">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-white">
                        Get started for free
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                        No credit card required. Cancel anytime.
                    </p>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Work Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Company Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-200">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:ring-neutral-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                        Already have an account?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
`;

export const SignupImageCode = `"use client";

import { BiArrowBack } from "react-icons/bi";

export default function SignupImage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="hidden lg:block relative">
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    alt="Abstract"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 p-12 text-white">
                    <p className="text-2xl font-medium">"This platform revolutionized how we handle our daily operations. Highly recommended."</p>
                    <div className="mt-4 font-bold">- Sarah Chen, CTO</div>
                </div>
            </div>

            {/* Form Side */}
            <div className="flex flex-col justify-center p-8 sm:p-12 md:p-16 bg-white dark:bg-neutral-950">
                <div className="max-w-md mx-auto w-full">
                    <a href="#" className="flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-8">
                        <BiArrowBack className="mr-2" /> Back
                    </a>

                    <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">Create Account</h1>
                    <p className="text-neutral-500 dark:text-neutral-400 mb-8">Choose your preferred sign up method.</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button className="flex items-center justify-center py-3 px-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
                            <span className="text-sm font-medium dark:text-white">Google</span>
                        </button>
                        <button className="flex items-center justify-center py-3 px-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-5 h-5 mr-2" alt="LinkedIn" />
                            <span className="text-sm font-medium dark:text-white">LinkedIn</span>
                        </button>
                    </div>

                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-200 dark:border-neutral-800" /></div>
                        <div className="relative flex justify-center text-xs uppercase text-neutral-500"><span className="bg-white dark:bg-neutral-950 px-2">Or continue with</span></div>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="w-full rounded-lg border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-500" />
                            <input type="text" placeholder="Last Name" className="w-full rounded-lg border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <input type="email" placeholder="Email Address" className="w-full rounded-lg border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-500" />
                        <input type="password" placeholder="Password" className="w-full rounded-lg border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-500" />

                        <button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
`;
