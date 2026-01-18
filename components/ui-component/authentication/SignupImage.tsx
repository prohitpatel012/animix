"use client";

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
