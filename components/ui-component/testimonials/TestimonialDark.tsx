"use client";

import { motion } from "motion/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function TestimonialDark() {
    return (
        <section className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Trusted by developers
                        </h2>
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-white">
                                <p>
                                    “The implementation was seamless. We were able to migrate our entire legacy system to the new platform in under a week. The documentation is fantastic and the support team is incredibly responsive.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-neutral-800 object-cover"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-semibold text-white">Judith Black</div>
                                    <div className="mt-1 text-neutral-400">CEO of Tuple</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Loved by designers
                        </h2>
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-white">
                                <p>
                                    “Finally, a tool that respects the design process. The ability to sync our Figma tokens directly into the codebase has saved us countless hours of manual handoff work.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-neutral-800 object-cover"
                                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-semibold text-white">Joseph Rodriguez</div>
                                    <div className="mt-1 text-neutral-400">Product Designer at Savvy</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
