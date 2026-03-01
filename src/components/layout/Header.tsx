"use client";

import { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export default function Header() {
    const t = useTranslations("nav");
    const s = useTranslations("services");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    const services = [
        { href: "/services/plumbing", label: s("plumbing.title") },
        { href: "/services/welding", label: s("welding.title") },
        { href: "/services/turnkey-construction", label: s("turnkey.title") },
        { href: "/services/roads", label: s("roads.title") },
        { href: "/services/rvs", label: s("rvs.title") },
        { href: "/services/pipelines", label: s("pipelines.title") },
    ];

    return (
        <header className="sticky top-10 z-40 h-14 md:h-16 bg-bg-primary/95 backdrop-blur-md border-b border-border flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-12 items-center">
                {/* Logo */}
                <div className="col-span-10 md:col-span-2 flex items-center">
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <Image
                            src="/bw logo.svg"
                            alt="ZAK Trans"
                            width={160}
                            height={40}
                            className="h-8 md:h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex col-span-7 justify-center items-center space-x-6">
                    <Link href="/about" className="text-sm hover:text-accent-blue transition-colors">{t("about")}</Link>

                    <div className="relative group py-4">
                        <Link href="/services" className="text-sm hover:text-accent-blue transition-colors flex items-center">
                            {t("services")} <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                        </Link>
                        <div className="absolute top-[85%] left-0 hidden group-hover:block pt-2 w-[500px] z-50">
                            <div className="bg-bg-card shadow-xl border border-border p-4 rounded-xl grid grid-cols-2 gap-4">
                                {services.map((svc) => (
                                    <Link key={svc.href} href={svc.href} className="text-sm hover:text-accent-blue transition-colors p-2 rounded-md hover:bg-bg-elevated block">
                                        {svc.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/projects" className="text-sm hover:text-accent-blue transition-colors">{t("projects")}</Link>
                    <Link href="/hse" className="text-sm hover:text-accent-blue transition-colors">{t("hse")}</Link>
                    <Link href="/equipment" className="text-sm hover:text-accent-blue transition-colors">{t("equipment")}</Link>
                    <Link href="/tender" className="text-sm hover:text-accent-blue transition-colors flex items-center">
                        {t("tender")}
                        <span className="ml-2 px-2 py-0.5 text-[10px] bg-accent-blue/20 text-accent-blue rounded-full border border-accent-blue/30 uppercase tracking-wide">
                            Ключевая
                        </span>
                    </Link>
                    <Link href="/contacts" className="text-sm hover:text-accent-blue transition-colors">{t("contacts")}</Link>
                </nav>

                {/* Locale & Mobile Menu */}
                <div className="col-span-2 md:col-span-3 flex justify-end items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-2 text-sm font-medium">
                        {["ru", "kz", "en"].map((l) => (
                            <button
                                key={l}
                                onClick={() => switchLocale(l)}
                                className={`uppercase transition-colors ${locale === l ? 'text-accent-blue font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger aria-label="Menu" className="p-2 -mr-2 text-text-primary hover:text-accent-blue transition-colors">
                                <Menu className="w-6 h-6" />
                            </SheetTrigger>
                            <SheetContent className="bg-bg-card border-l-border overflow-y-auto">
                                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                                <div className="flex flex-col space-y-2 px-2 mt-6 pb-20">
                                    <div className="flex space-x-4 border-b border-border pb-6 px-4 mb-2">
                                        {["ru", "kz", "en"].map((l) => (
                                            <button
                                                key={l}
                                                onClick={() => { switchLocale(l); setIsOpen(false); }}
                                                className={`text-lg uppercase ${locale === l ? 'text-accent-blue font-bold' : 'text-text-secondary hover:text-text-primary'}`}
                                            >
                                                {l}
                                            </button>
                                        ))}
                                    </div>

                                    <Link onClick={() => setIsOpen(false)} href="/about" className="block text-lg py-3 px-4 rounded-xl hover:bg-bg-elevated transition-colors">{t("about")}</Link>

                                    <div className="py-2">
                                        <Link onClick={() => setIsOpen(false)} href="/services" className="block text-lg py-3 px-4 rounded-xl hover:bg-bg-elevated transition-colors font-semibold">{t("services")}</Link>
                                        <div className="pl-8 flex flex-col space-y-1 mt-1 border-l-2 border-border/50 ml-4">
                                            {services.map((svc) => (
                                                <Link onClick={() => setIsOpen(false)} key={svc.href} href={svc.href} className="block text-base text-text-secondary py-2 px-4 hover:bg-bg-elevated hover:text-text-primary rounded-lg transition-colors">{svc.label}</Link>
                                            ))}
                                        </div>
                                    </div>

                                    <Link onClick={() => setIsOpen(false)} href="/projects" className="block text-lg py-3 px-4 rounded-xl hover:bg-bg-elevated transition-colors">{t("projects")}</Link>
                                    <Link onClick={() => setIsOpen(false)} href="/hse" className="block text-lg py-3 px-4 rounded-xl hover:bg-bg-elevated transition-colors">{t("hse")}</Link>
                                    <Link onClick={() => setIsOpen(false)} href="/equipment" className="block text-lg py-3 px-4 rounded-xl hover:bg-bg-elevated transition-colors">{t("equipment")}</Link>
                                    <Link onClick={() => setIsOpen(false)} href="/tender" className="block text-lg py-3 px-4 rounded-xl hover:bg-bg-elevated transition-colors text-accent-blue font-medium">{t("tender")}</Link>
                                    <Link onClick={() => setIsOpen(false)} href="/contacts" className="block text-lg py-3 px-4 rounded-xl hover:bg-bg-elevated transition-colors">{t("contacts")}</Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
