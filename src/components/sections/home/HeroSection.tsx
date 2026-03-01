"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
};

export default function HeroSection() {
    const t = useTranslations("hero");
    const cta = useTranslations("cta");
    const stats = useTranslations("stats");

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541888086925-0c13dcced9f5?q=80&w=2670&auto=format&fit=crop"
                    alt="ZAK Trans Oil & Gas Construction"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: "linear-gradient(to bottom, rgba(14,17,22,0.3) 0%, rgba(14,17,22,0.6) 40%, rgba(14,17,22,0.92) 85%, #0E1116 100%)"
                }}
            />

            {/* Grid Pattern Layer */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[15]" />

            {/* Blue Vignette */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent z-10 opacity-50" />

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col lg:flex-row gap-12 items-center"
                >
                    {/* Left Side: Copy & CTAs */}
                    <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
                        <motion.div variants={itemVariants} className="flex items-center space-x-2 bg-accent-blue/10 border border-accent-blue/20 rounded-full px-3 py-1 mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse-blue" />
                            <span className="text-xs md:text-sm text-accent-blue uppercase tracking-wider font-medium">
                                {t("subtitle")}
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-text-primary">
                            {t("title").split(" для").map((part, i) => (
                                <span key={i}>
                                    {i === 0 ? part : ` для${part}`}
                                    {i === 0 && <br className="hidden md:block" />}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary mt-6 max-w-2xl leading-relaxed">
                            Комплексные инфраструктурные решения от проектирования до сдачи объекта под ключ.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-10">
                            <button className="flex items-center bg-accent-blue hover:bg-accent-blue-hover text-text-primary px-8 py-4 rounded-full font-medium transition-all shadow-btn-glow group">
                                {cta("estimate")}
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="bg-transparent border border-border hover:border-text-secondary text-text-primary px-8 py-4 rounded-full font-medium transition-all">
                                {cta("quote")}
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Side: Trust Block */}
                    <motion.div variants={itemVariants} className="w-full lg:w-[40%]">
                        <div className="bg-bg-card/80 backdrop-blur-sm border border-border shadow-card rounded-2xl p-6 lg:p-8">
                            <div className="grid grid-cols-2 gap-px bg-border">
                                {/* Stat 1 */}
                                <div className="bg-bg-card/80 backdrop-blur-sm p-4 sm:p-6 flex flex-col items-start justify-center rounded-tl-xl hover:bg-bg-elevated/80 transition-colors">
                                    <span className="font-mono text-4xl font-bold text-accent-blue">{stats("employees")}</span>
                                    <span className="text-sm text-text-secondary mt-2 leading-tight">{stats("employeesLabel")}</span>
                                </div>
                                {/* Stat 2 */}
                                <div className="bg-bg-card/80 backdrop-blur-sm p-4 sm:p-6 flex flex-col items-start justify-center rounded-tr-xl hover:bg-bg-elevated/80 transition-colors">
                                    <span className="font-mono text-3xl font-bold text-accent-blue">{stats("license")}</span>
                                    <span className="text-sm text-text-secondary mt-2 leading-tight">{stats("licenseLabel")}</span>
                                </div>
                                {/* Stat 3 */}
                                <div className="bg-bg-card/80 backdrop-blur-sm p-4 sm:p-6 flex flex-col items-start justify-center rounded-bl-xl hover:bg-bg-elevated/80 transition-colors">
                                    <span className="font-mono text-4xl font-bold text-accent-blue">{stats("iso")}</span>
                                    <span className="text-sm text-text-secondary mt-2 leading-tight">{stats("isoLabel")}</span>
                                </div>
                                {/* Stat 4 */}
                                <div className="bg-bg-card/80 backdrop-blur-sm p-4 sm:p-6 flex flex-col items-start justify-center rounded-br-xl hover:bg-bg-elevated/80 transition-colors">
                                    <span className="font-mono text-xl sm:text-3xl font-bold text-accent-blue leading-tight block truncate uppercase">{stats("guarantee")}</span>
                                    <span className="text-sm text-text-secondary mt-2 leading-tight">{stats("guaranteeLabel")}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer text-text-muted hover:text-text-primary transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            >
                <span className="text-xs uppercase tracking-widest mb-2 font-medium">Наши заказчики</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </section>
    );
}
