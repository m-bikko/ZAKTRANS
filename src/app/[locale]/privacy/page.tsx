import { setRequestLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ChevronRight, Shield } from "lucide-react";
import { BreadcrumbListJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Политика конфиденциальности | ZAK Trans",
    description: "Политика конфиденциальности и обработки персональных данных ZAK Trans.",
};

export default async function PrivacyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "privacyPage" });

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">
            <BreadcrumbListJsonLd items={[
                { name: t("breadcrumbHome"), url: `https://zaktrans.kz/${locale}` },
                { name: t("breadcrumbPrivacy"), url: `https://zaktrans.kz/${locale}/privacy` },
            ]} />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">{t("breadcrumbHome")}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">{t("breadcrumbPrivacy")}</span>
                    </nav>

                    <Shield className="w-16 h-16 text-accent-blue mx-auto mb-6" />
                    <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {t("title")}
                    </h1>
                    <p className="text-lg text-text-secondary">
                        {t("lastUpdated")}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 md:px-8 prose prose-zinc dark:prose-invert">
                    <p className="text-text-secondary leading-relaxed">
                        {t("intro")}
                    </p>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">{t("section1Title")}</h2>
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                        {t("section1Text")}
                    </p>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">{t("section2Title")}</h2>
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                        {t("section2Text")}
                    </p>
                    <ul className="text-text-secondary list-disc pl-6 space-y-2 mb-6">
                        <li>{t("section2Item1")}</li>
                        <li>{t("section2Item2")}</li>
                        <li>{t("section2Item3")}</li>
                        <li>{t("section2Item4")}</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">{t("section3Title")}</h2>
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                        {t("section3Text")}
                    </p>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">{t("section4Title")}</h2>
                    <p className="text-text-secondary leading-relaxed">
                        {t("section4Text")}
                    </p>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">{t("section5Title")}</h2>
                    <p className="text-text-secondary leading-relaxed">
                        {t("section5Text")}
                        <a href="mailto:info@zaktrans.kz" className="text-accent-blue hover:underline ml-1">info@zaktrans.kz</a>
                    </p>
                </div>
            </section>

        </main>
    );
}
