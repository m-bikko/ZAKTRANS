"use client";

import { useTranslations } from "next-intl";
import { FileText, Download, ShieldCheck, Star } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function AboutLicenses() {
    const licenses = [
        {
            icon: FileText,
            title: "Государственная лицензия СМР",
            category: "III Категория",
            number: "№ 23018241",
            date: "Бессрочная",
            description: "Дает право на выполнение полного комплекса строительно-монтажных работ.",
            file: "/docs/license-smr.pdf",
        },
        {
            icon: ShieldCheck,
            title: "Сертификация ISO",
            category: "ISO 9001, ISO 14001",
            number: "Международный стандарт",
            date: "Ежегодный аудит",
            description: "Подтверждает высокое качество управления, экологическую безопасность и охрану труда.",
            file: "/docs/zak-trans-9001-ru.pdf",
        }
    ];

    return (
        <section className="bg-bg-secondary py-20 lg:py-32 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Лицензии и сертификаты
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Мы работаем в строгом соответствии с законодательством РК и международными отраслевыми стандартами надежности.
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
                                            <span className="text-xs text-text-muted uppercase tracking-wider mb-1">Номер документа:</span>
                                            <span className="font-mono text-sm text-text-primary">{l.number}</span>
                                        </div>
                                        <a
                                            href={l.file}
                                            download
                                            className="flex items-center space-x-2 text-accent-blue hover:text-white hover:bg-accent-blue border border-accent-blue/30 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                                        >
                                            <Download className="w-4 h-4" />
                                            <span>Скачать PDF</span>
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
                        <span className="font-medium text-text-primary">Гарантия на все виды работ до 5 лет</span>
                    </div>
                    <div className="flex items-center space-x-4 bg-bg-card p-6 rounded-xl border border-border">
                        <ShieldCheck className="w-8 h-8 text-accent-blue shrink-0" />
                        <span className="font-medium text-text-primary">Строгое соблюдение техники безопасности</span>
                    </div>
                    <div className="flex items-center space-x-4 bg-bg-card p-6 rounded-xl border border-border">
                        <FileText className="w-8 h-8 text-accent-blue shrink-0" />
                        <span className="font-medium text-text-primary">Исполнительная документация "А-Я"</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
