"use client";

import { useTranslations } from "next-intl";
import { FileText, Download, ShieldCheck, Star } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function AboutLicenses() {
    const t = useTranslations("aboutLicenses");

    const licenses = [
        {
            icon: FileText,
            title: t("license1Title"),
            category: t("license1Category"),
            number: t("license1Number"),
            date: t("license1Date"),
            description: t("license1Desc"),
            file: "/docs/license-smr.pdf",
        },
        {
            icon: ShieldCheck,
            title: t("license2Title"),
            category: t("license2Category"),
            number: t("license2Number"),
            date: t("license2Date"),
            description: t("license2Desc"),
            file: "/docs/zak-trans-9001-ru.pdf",
        }
    ];

    return (
        <section className="bg-bg-secondary py-20 lg:py-32 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        {t("title")}
                    </h2>
                    <p className="text-text-secondary text-lg">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {licenses.map((l, i) => {
                        const Icon = l.icon;
                        return (
                            <div key={i} className="bg-bg-card border border-border rounded-2xl p-8 relative overflow-hidden group hover:border-accent-blue/50 transition-colors">
                                {/* Decorative background logo/icon */}
                                <Icon className="absolute -right-8 -top-8 w-48 h-48 text-bg-elevated opacity-50 rotate-12 group-hover:text-accent-blue/5 transition-colors" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-accent-blue" />
                                    </div>

                                    <div className="mb-2">
                                        <span className="inline-block px-3 py-1 bg-steel text-text-primary text-xs font-semibold tracking-wider uppercase rounded-md mb-4">
                                            {l.category}
                                        </span>
                                    </div>

                                    <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
                                        {l.title}
                                    </h3>

                                    <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                                        {l.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-t border-border pt-6 mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-text-muted uppercase tracking-wider mb-1">{t("docNumberLabel")}</span>
                                            <span className="font-mono text-sm text-text-primary">{l.number}</span>
                                        </div>
                                        <a
                                            href={l.file}
                                            download
                                            className="flex items-center space-x-2 text-accent-blue hover:text-white hover:bg-accent-blue border border-accent-blue/30 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>{t("downloadPdf")}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Guarantees Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="flex items-center space-x-4 bg-bg-card p-6 rounded-xl border border-border">
                        <Star className="w-8 h-8 text-accent-blue shrink-0" />
                        <span className="font-medium text-text-primary">{t("guarantee1")}</span>
                    </div>
                    <div className="flex items-center space-x-4 bg-bg-card p-6 rounded-xl border border-border">
                        <ShieldCheck className="w-8 h-8 text-accent-blue shrink-0" />
                        <span className="font-medium text-text-primary">{t("guarantee2")}</span>
                    </div>
                    <div className="flex items-center space-x-4 bg-bg-card p-6 rounded-xl border border-border">
                        <FileText className="w-8 h-8 text-accent-blue shrink-0" />
                        <span className="font-medium text-text-primary">{t("guarantee3")}</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
