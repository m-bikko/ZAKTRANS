"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function AboutProfile() {
    const t = useTranslations("aboutProfile");

    const stats = [
        { value: t("stat1Value"), label: t("stat1Label") },
        { value: t("stat2Value"), label: t("stat2Label") },
        { value: t("stat3Value"), label: t("stat3Label") },
        { value: t("stat4Value"), label: t("stat4Label") },
    ];

    return (
        <section className="bg-bg-primary py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Text Box */}
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="w-8 h-px bg-accent-blue" />
                            <span className="text-accent-blue text-xs font-semibold tracking-widest uppercase">
                                {t("tagline")}
                            </span>
                        </div>

                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
                            {t("title")}
                        </h2>

                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                            <p>
                                {t("text1")}
                            </p>
                            <p>
                                {t("text2")}
                            </p>
                        </div>
                    </div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-border">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-bg-card p-8 flex flex-col items-center justify-center text-center hover:bg-bg-elevated transition-colors"
                            >
                                <div className="font-mono text-4xl md:text-5xl font-bold text-accent-blue mb-3">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
