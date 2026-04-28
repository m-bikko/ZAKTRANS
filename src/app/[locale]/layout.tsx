import type { Metadata } from "next";
import { Rajdhani, DM_Sans, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";

const heading = Rajdhani({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-heading",
});

const body = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-body",
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://zaktrans.kz"),
    title: {
        template: "%s | ZAK Trans",
        default: "ZAK Trans — Строительно-монтажные работы | Атырау, Тенгиз",
    },
    description:
        "ZAK Trans — строительная компания полного цикла. СМР для нефтегазовых и промышленных объектов в Атырауской области, Тенгизе и по всему Казахстану.",
    keywords: ["строительство Атырау", "СМР нефтегаз", "Тенгиз подрядчик", "сварка Атырау", "ZAK Trans", "строительная компания Казахстан"],
    icons: {
        icon: "/favicon_zak.svg",
        apple: "/favicon_zak.svg",
    },
    openGraph: {
        type: "website",
        locale: "ru_KZ",
        url: "https://zaktrans.kz",
        siteName: "ZAK Trans",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: {
        canonical: "https://zaktrans.kz/ru",
        languages: {
            "ru": "https://zaktrans.kz/ru",
            "kk": "https://zaktrans.kz/kz",
            "en": "https://zaktrans.kz/en",
            "x-default": "https://zaktrans.kz/ru",
        },
    },
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    const jsonLdOrg = {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://zaktrans.kz/#organization",
        "name": "ZAK Trans",
        "legalName": "ТОО «ZAK Trans»",
        "url": "https://zaktrans.kz",
        "logo": "https://zaktrans.kz/favicon_zak.svg",
        "image": "https://zaktrans.kz/og-image.jpg",
        "description": "Строительная компания полного цикла. СМР для нефтегазовых и промышленных объектов.",
        "foundingDate": "2022",
        "telephone": "+77001010660",
        "email": "info@zaktrans.kz",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Туймеш Сабетова, 180а",
            "addressLocality": "Кульсары",
            "addressRegion": "Атырауская область",
            "addressCountry": "KZ",
        },
        "areaServed": [
            { "@type": "Place", "name": "Атырауская область" },
            { "@type": "Place", "name": "Казахстан" },
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+77001010660",
            "contactType": "customer service",
            "availableLanguage": ["Russian", "Kazakh", "English"],
        },
        "sameAs": ["https://wa.me/77001010660"],
    };

    const jsonLdWebsite = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://zaktrans.kz/#website",
        "url": "https://zaktrans.kz",
        "name": "ZAK Trans",
        "inLanguage": locale === "kz" ? "kk" : locale,
        "publisher": { "@id": "https://zaktrans.kz/#organization" },
    };

    return (
        <html lang={locale === "kz" ? "kk" : locale}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
                />
            </head>
            <body className={`${heading.variable} ${body.variable} ${mono.variable} bg-bg-primary text-text-primary font-body antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <StickyBar />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
