"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
    const t = useTranslations("nav");

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-border bg-bg-secondary">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Subtle Glow */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center text-center">

                    {/* Breadcrumb */}
                    <nav className="flex items-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">{t("about")}</span>
                    </nav>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6">
                        О компании ZAK<span className="text-accent-blue">TRANS</span>
                    </h1>

                    <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                        Надежный генподрядчик для нефтегазовых и промышленных объектов. Строим инфраструктуру с 2022 года.
                    </p>

                </div>
            </div>
        </section>
    );
}
