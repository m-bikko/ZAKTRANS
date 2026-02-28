"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Shield, ArrowRight, ShieldCheck, UserCheck, SearchCheck, FileBadge } from "lucide-react";
import { motion } from "framer-motion";

export default function HseBlock() {
    const t = useTranslations("nav");

    const principles = [
        { icon: ShieldCheck, text: "Обязательный инструктаж на объекте" },
        { icon: UserCheck, text: "Допуск только аттестованных специалистов" },
        { icon: SearchCheck, text: "Многоуровневый контроль на каждом этапе" },
        { icon: FileBadge, text: "Документация по международным стандартам" },
    ];

    return (
        <section className="bg-bg-elevated border-y border-border py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

                    {/* Left: Copy */}
                    <div className="w-full lg:w-1/3 flex flex-col items-start text-left">
                        <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-accent-blue" />
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            HSE / Охрана труда и безопасность
                        </h2>
                        <p className="text-text-secondary leading-relaxed">
                            Мы строго соблюдаем международные стандарты безопасности, защищая жизнь и здоровье сотрудников, а также минимизируя воздействие на окружающую среду.
                        </p>
                    </div>

                    {/* Center: Principles */}
                    <div className="w-full lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {principles.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center space-x-3 bg-bg-card border border-border p-4 rounded-xl"
                                >
                                    <Icon className="w-5 h-5 text-success flex-shrink-0" />
                                    <span className="text-sm font-medium text-text-primary">{p.text}</span>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right: CTA */}
                    <div className="w-full lg:w-1/4 flex lg:justify-end">
                        <Link href="/hse" className="w-full lg:w-auto flex justify-center items-center bg-transparent border border-accent-blue/30 text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-4 rounded-full font-medium transition-all group whitespace-nowrap">
                            Узнать подробнее
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
