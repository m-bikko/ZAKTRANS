import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, ArrowRight, Handshake } from "lucide-react";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Партнеры и Заказчики | ZAK Trans",
    description: "Работая с лидерами отрасли, мы перенимаем лучшие практики и повышаем стандарты качества строительства.",
};

const partners = [
    { name: "Tengizchevroil (TCO)", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chevron_Logo.svg/1024px-Chevron_Logo.svg.png" },
    { name: "KazMunayGas", logo: "https://upload.wikimedia.org/wikipedia/ru/3/36/KMG_Logo_2022.svg" },
    { name: "North Caspian Operating Company", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/NCOC_Logo.svg/512px-NCOC_Logo.svg.png" },
    { name: "Karachaganak Petroleum Operating", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/KPO_logo.svg/512px-KPO_logo.svg.png" },
];

export default async function PartnersPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: "partnersPage" });

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">
            <BreadcrumbListJsonLd items={[
                { name: t("breadcrumbHome"), url: `https://zaktrans.kz/${locale}` },
                { name: t("breadcrumbPartners"), url: `https://zaktrans.kz/${locale}/partners` },
            ]} />

            {/* 1. Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">{t("breadcrumbHome")}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">{t("breadcrumbPartners")}</span>
                    </nav>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {t("titlePart1")} <span className="text-accent-blue">{t("titleHighlight")}</span> {t("titlePart2")}
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
                        {t("description")}
                    </p>
                </div>
            </section>

            {/* 2. Logo Grid */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
                        {partners.map((p, i) => (
                            <div key={i} className="bg-bg-card border border-border rounded-xl aspect-[3/2] flex items-center justify-center p-8 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                                <div className="relative w-full h-full">
                                    <Image src={p.logo || "/images/placeholder-logo.svg"} alt={p.name} fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Formats of Cooperation */}
            <section className="py-20 bg-bg-primary border-y border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">{t("cooperationTitle")}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Gencontractor */}
                        <div className="bg-bg-elevated border border-border rounded-2xl p-8 hover:border-accent-blue/50 transition-colors">
                            <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                                <Handshake className="w-7 h-7 text-accent-blue" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary mb-4">{t("genContractTitle")}</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                {t("genContractDesc")}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-text-secondary">
                                    <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 mr-3 shrink-0" />
                                    {t("genContractPoint1")}
                                </li>
                                <li className="flex items-start text-sm text-text-secondary">
                                    <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 mr-3 shrink-0" />
                                    {t("genContractPoint2")}
                                </li>
                            </ul>
                        </div>

                        {/* Subcontractor */}
                        <div className="bg-bg-elevated border border-border rounded-2xl p-8 hover:border-accent-blue/50 transition-colors">
                            <div className="w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                                <Handshake className="w-7 h-7 text-accent-blue" />
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary mb-4">{t("subContractTitle")}</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                {t("subContractDesc")}
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start text-sm text-text-secondary">
                                    <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 mr-3 shrink-0" />
                                    {t("subContractPoint1")}
                                </li>
                                <li className="flex items-start text-sm text-text-secondary">
                                    <span className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 mr-3 shrink-0" />
                                    {t("subContractPoint2")}
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 text-center">
                <div className="max-w-xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">{t("ctaTitle")}</h2>
                    <p className="text-text-secondary leading-relaxed mb-8">
                        {t("ctaDescription")}
                    </p>
                    <Link href="/tender" className="inline-flex items-center space-x-2 bg-accent-blue text-white px-8 py-4 rounded-full font-medium hover:bg-accent-blue-hover transition-colors">
                        <span>{t("ctaButton")}</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
