"use client";

import { useState } from "react";
import { motion } from "motion/react"; // Assuming motion/react is available as per previous files
import { BiLogoGoogle, BiLogoGithub } from "react-icons/bi";

export default function AuthCard() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white dark:bg-neutral-950 py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-neutral-200 dark:border-neutral-800">
                    {/* Tabs */}
                    <div className="flex mb-8 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${isLogin ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700'}`}
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${!isLogin ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <motion.div
                        key={isLogin ? 'login' : 'signup'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                            {isLogin ? 'Welcome back' : 'Create an account'}
                        </h2>

                        <form className="space-y-5" action="#" method="POST">
                            {!isLogin && (
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-neutral-900 dark:text-white sm:text-sm h-10 px-3 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700" />
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email address</label>
                                <input type="email" required className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-neutral-900 dark:text-white sm:text-sm h-10 px-3 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Password</label>
                                <input type="password" required className="mt-1 block w-full rounded-md border-neutral-300 dark:border-neutral-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-neutral-900 dark:text-white sm:text-sm h-10 px-3 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700" />
                            </div>

                            {isLogin && (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-600 dark:bg-neutral-900" />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-900 dark:text-neutral-300">Remember me</label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Forgot password?</a>
                                    </div>
                                </div>
                            )}

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600">
                                    {isLogin ? 'Sign In' : 'Sign Up'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-neutral-300 dark:border-neutral-700" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white dark:bg-neutral-950 px-2 text-neutral-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                                    <BiLogoGoogle className="h-5 w-5" /> Google
                                </button>
                                <button className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-white dark:bg-neutral-900 px-3 py-2 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                                    <BiLogoGithub className="h-5 w-5" /> GitHub
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
