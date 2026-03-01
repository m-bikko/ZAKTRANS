import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutProfile from "@/components/sections/about/AboutProfile";
import AboutLicenses from "@/components/sections/about/AboutLicenses";
import AboutGeography from "@/components/sections/about/AboutGeography";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
    title: "О компании — ZAK Trans",
    description:
        "ZAK Trans — строительная компания с лицензией 3 категории и ISO сертификатом. Работаем на нефтегазовых объектах Атырауской области и Тенгиза с 2022 года.",
};

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className="w-full flex-1 flex flex-col">
            <AboutHero />
            <AboutProfile />
            <AboutLicenses />
            <AboutGeography />
            <AboutCTA />
        </main>
    );
}
