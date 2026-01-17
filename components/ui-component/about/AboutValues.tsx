"use client";

import { motion } from "motion/react";
import { BiCube, BiShapeSquare, BiLayer, BiCommand } from "react-icons/bi";

const features = [
    {
        name: 'Be world-class',
        description: 'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
        icon: BiCube,
    },
    {
        name: 'Share everything you know',
        description: 'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
        icon: BiShapeSquare,
    },
    {
        name: 'Always learning',
        description: 'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam distinctive.',
        icon: BiLayer,
    },
    {
        name: 'Be supportive',
        description: 'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
        icon: BiCommand,
    },
];

export default function AboutValues() {
    return (
        <div className="bg-neutral-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Our Values</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Built for the long haul
                    </p>
                    <p className="mt-6 text-lg leading-8 text-neutral-300">
                        We are a company that values craftsmanship, curiosity, and collaboration above all else. We build tools that empower developers to create their best work.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col"
                            >
                                <dt className="text-base font-semibold leading-7 text-white flex items-center gap-3">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-neutral-300">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
