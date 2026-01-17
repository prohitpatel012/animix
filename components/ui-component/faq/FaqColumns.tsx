"use client";

const faqs = [
    {
        id: 1,
        question: "What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        id: 2,
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription at any time from your account settings page. Your access will continue until the end of your billing period.",
    },
    {
        id: 3,
        question: "Do you offer technical support?",
        answer: "Yes, we offer email support for all customers. Priority support is available for Enterprise plans.",
    },
    {
        id: 4,
        question: "Can I switch plans?",
        answer: "Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges will apply.",
    },
    {
        id: 5,
        question: "Is there a free trial?",
        answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required.",
    },
    {
        id: 6,
        question: "Do you offer discounts?",
        answer: "We offer a 20% discount if you choose annual billing. We also offer discounts for students and non-profits.",
    },
];

export default function FaqColumns() {
    return (
        <div className="bg-white dark:bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                        Common Questions
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                        Everything you need to know about the product and billing.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {faqs.map((faq) => (
                        <div key={faq.id}>
                            <dt className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">
                                {faq.question}
                            </dt>
                            <dd className="mt-1 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                                {faq.answer}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
