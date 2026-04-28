"use client";

import { useTranslations } from "next-intl";

export default function TrustLogos() {
    const t = useTranslations("homeTrust");
    const logos = [
        { name: "ТОО Транс Ойл" },
        { name: "CCIC" },
    ];

    const repeated = Array(6).fill(logos).flat();

    return (
        <section className="bg-bg-secondary border-y border-border py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
                <h3 className="text-center text-text-muted text-sm uppercase tracking-widest font-medium">
                    {t("title")}
                </h3>
            </div>

            <div className="relative flex w-full overflow-hidden">
                <div className="flex animate-ticker whitespace-nowrap">
                    {repeated.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-6 sm:px-8 flex items-center justify-center group"
                        >
                            <span className="font-heading font-bold text-lg text-text-primary uppercase tracking-wide opacity-40 whitespace-nowrap group-hover:text-accent-blue group-hover:opacity-100 transition-colors">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
