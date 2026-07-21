"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Receipt, CheckCircle2, GraduationCap, Award, ShieldCheck, Factory } from "lucide-react";

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
    const th = useTranslations("homeHero");
    const cta = useTranslations("cta");

    const features = [
        { icon: Receipt, title: th("feature1Title"), subtitle: th("feature1Subtitle") },
        { icon: CheckCircle2, title: th("feature2Title"), subtitle: th("feature2Subtitle") },
        { icon: GraduationCap, title: th("feature3Title"), subtitle: th("feature3Subtitle") },
        { icon: Award, title: th("feature4Title"), subtitle: th("feature4Subtitle") },
        { icon: ShieldCheck, title: th("feature5Title"), subtitle: th("feature5Subtitle") },
        { icon: Factory, title: th("feature6Title"), subtitle: th("feature6Subtitle") },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/hero-bg.webp"
                alt={th("altBg")}
                fill
                priority
                quality={85}
                className="object-cover z-0"
            />

            {/* Dark Overlay — keeps text readable over the busy photo */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: "linear-gradient(100deg, rgba(9,19,27,0.94) 0%, rgba(11,24,33,0.86) 45%, rgba(14,29,40,0.62) 100%)"
                }}
            />
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: "linear-gradient(to bottom, rgba(9,19,27,0.55) 0%, rgba(9,19,27,0) 25%, rgba(9,19,27,0) 70%, rgba(9,19,27,0.65) 100%)"
                }}
            />

            {/* Grid Pattern Layer */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[15]" />

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
                        <motion.div variants={itemVariants} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-accent-blue/40 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse-blue" />
                            <span className="text-xs md:text-sm text-accent-blue uppercase tracking-wider font-bold">
                                {t("subtitle")}
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
                            {t("title").split(" для").map((part, i) => (
                                <span key={i}>
                                    {i === 0 ? part : ` для${part}`}
                                    {i === 0 && <br className="hidden md:block" />}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/85 mt-6 max-w-2xl leading-relaxed font-medium">
                            {th("descriptionText")}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-10">
                            <button className="flex items-center bg-accent-blue hover:bg-accent-blue-hover text-white px-8 py-4 rounded-full font-medium transition-all shadow-btn-glow group">
                                {cta("estimate")}
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="bg-white/10 backdrop-blur-sm border border-white/30 hover:border-accent-blue hover:bg-white/15 text-white px-8 py-4 rounded-full font-medium transition-all">
                                {cta("quote")}
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Side: Features Block */}
                    <motion.div variants={itemVariants} className="w-full lg:w-[40%]">
                        <div className="bg-bg-card backdrop-blur-sm border border-border shadow-card rounded-2xl p-4 lg:p-5">
                            <div className="grid grid-cols-2 gap-3">
                                {features.map((feature, i) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="bg-bg-elevated p-4 rounded-xl flex flex-col items-start hover:border-accent-blue/40 border border-transparent transition-colors"
                                        >
                                            <Icon className="w-6 h-6 text-accent-blue mb-2" />
                                            <span className="font-heading text-lg font-bold text-text-primary leading-tight">{feature.title}</span>
                                            <span className="text-xs text-text-secondary mt-1 leading-tight">{feature.subtitle}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer text-white/60 hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            >
                <span className="text-xs uppercase tracking-widest mb-2 font-medium">{th("scrollLabel")}</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </section>
    );
}
