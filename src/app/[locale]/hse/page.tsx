import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, ShieldCheck, HeartPulse, HardHat, FileText, ArrowRight } from "lucide-react";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "HSE / Охрана труда и безопасность | ZAK Trans",
    description: "Политика в области охраны труда, промышленной безопасности и защиты окружающей среды.",
};

export default async function HsePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: "hsePage" });

    const principles = [
        {
            icon: ShieldCheck,
            title: t("principle1Title"),
            desc: t("principle1Desc"),
        },
        {
            icon: HardHat,
            title: t("principle2Title"),
            desc: t("principle2Desc"),
        },
        {
            icon: HeartPulse,
            title: t("principle3Title"),
            desc: t("principle3Desc"),
        },
        {
            icon: FileText,
            title: t("principle4Title"),
            desc: t("principle4Desc"),
        }
    ];

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">
            <BreadcrumbListJsonLd items={[
                { name: t("breadcrumbHome"), url: `https://zaktrans.kz/${locale}` },
                { name: "HSE", url: `https://zaktrans.kz/${locale}/hse` },
            ]} />

            {/* 1. Page Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale mix-blend-overlay"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2670&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-secondary pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[5]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">{t("breadcrumbHome")}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">HSE</span>
                    </nav>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6 max-w-4xl mx-auto">
                        {t("title")} <span className="text-accent-blue">{t("titleHighlight")}</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>
            </section>

            {/* 2. HSE Principles Info Grid */}
            <section className="py-20 lg:py-32 bg-bg-primary">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {principles.map((item, i) => (
                            <div key={i} className="bg-bg-card border border-border rounded-2xl p-8 hover:border-accent-blue/50 transition-colors">
                                <item.icon className="w-12 h-12 text-accent-blue mb-6" />
                                <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Text Section & Image */}
            <section className="py-20 bg-bg-secondary border-y border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                                <Image
                                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                                    alt={t("imageAlt")}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Texts */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">{t("cultureTitle")}</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>{t("cultureText1")}</p>
                                <p>{t("cultureText2")}</p>
                                <p>{t("cultureText3")}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CTA to Documents */}
            <section className="py-24 bg-bg-primary text-center">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">{t("docsTitle")}</h2>
                    <p className="text-lg text-text-secondary mb-10">
                        {t("docsDescription")}
                    </p>
                    <Link href="/tender" className="inline-flex items-center space-x-2 bg-accent-blue hover:bg-accent-blue-hover text-white px-8 py-4 rounded-full font-medium transition-colors">
                        <span>{t("docsLink")}</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
