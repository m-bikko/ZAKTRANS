import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Наша команда | ZAK Trans",
    description: "Квалифицированные специалисты, инженеры и рабочие — основа успеха ZAK Trans.",
};

export default async function TeamPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: "teamPage" });

    const specialists = [
        { role: t("specialist1"), count: 12 },
        { role: t("specialist2"), count: 8 },
        { role: t("specialist3"), count: 5 },
        { role: t("specialist4"), count: 3 },
    ];

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">
            <BreadcrumbListJsonLd items={[
                { name: t("breadcrumbHome"), url: `https://zaktrans.kz/${locale}` },
                { name: t("breadcrumbTeam"), url: `https://zaktrans.kz/${locale}/team` },
            ]} />

            {/* 1. Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">{t("breadcrumbHome")}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">{t("breadcrumbTeam")}</span>
                    </nav>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {t("titlePart1")} <span className="text-accent-blue">{t("titleHighlight")}</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
                        {t("description")}
                    </p>

                    <div className="inline-block p-8 bg-bg-card border border-border rounded-2xl shadow-xl">
                        <div className="text-5xl lg:text-7xl font-mono font-bold text-accent-blue mb-2">{t("staffCount")}</div>
                        <div className="text-lg text-text-secondary font-medium uppercase tracking-wider">{t("staffLabel")}</div>
                    </div>
                </div>
            </section>

            {/* 2. Key Personnel Overview */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">{t("profileTitle")}</h2>
                        <p className="text-text-secondary text-lg">
                            {t("profileDescription")}
                        </p>
                    </div>

                    {/* Specialists Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specialists.map((item, i) => (
                            <div key={i} className="bg-bg-card border border-border p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-accent-blue/50 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-bg-elevated border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="font-mono text-2xl font-bold text-accent-blue">{item.count}</span>
                                </div>
                                <h3 className="text-lg font-bold text-text-primary px-4 line-clamp-3">{item.role}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Photos (Mosaic) */}
            <section className="py-20 bg-bg-primary border-y border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-12">{t("photosTitle")}</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Large Item */}
                        <div className="col-span-2 row-span-2 relative aspect-square rounded-2xl overflow-hidden border border-border">
                            <Image src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2670&auto=format&fit=crop" alt={t("altMain")} fill className="object-cover" />
                        </div>
                        {/* Small Items */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
                            <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop" alt={t("altWelder")} fill className="object-cover" />
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
                            <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" alt={t("altEngineer")} fill className="object-cover" />
                        </div>
                        <div className="col-span-2 relative aspect-[2/1] rounded-2xl overflow-hidden border border-border">
                            <Image src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2670&auto=format&fit=crop" alt={t("altBrigade")} fill className="object-cover" />
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
                    <Link href="/contacts" className="inline-flex items-center space-x-2 bg-accent-blue text-white px-8 py-4 rounded-full font-medium hover:bg-accent-blue-hover transition-colors">
                        <span>{t("ctaButton")}</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
