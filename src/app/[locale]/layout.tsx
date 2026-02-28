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
        template: "%s | ZAK Trans — СМР для нефтегазовых объектов",
        default: "ZAK Trans — Строительно-монтажные работы | Атырау, Тенгиз",
    },
    description:
        "ZAK Trans — строительная компания полного цикла. СМР для нефтегазовых и промышленных объектов в Атырауской области, Тенгизе и по всему Казахстану.",
    keywords: ["строительство Атырау", "СМР нефтегаз", "Тенгиз подрядчик", "сварка Атырау"],
    openGraph: {
        type: "website",
        locale: "ru_KZ",
        url: "https://zaktrans.kz",
        siteName: "ZAK Trans",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
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

    return (
        <html lang={locale} className="dark">
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
