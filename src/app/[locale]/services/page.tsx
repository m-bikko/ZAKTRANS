"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import ServicesGrid from "@/components/sections/home/ServicesGrid";

export default function ServicesCatalogPage() {
    const t = useTranslations("nav");

    return (
        <main className="w-full flex-1 flex flex-col">
            {/* Catalog Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-border bg-bg-primary">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col items-center text-center">

                        <nav className="flex items-center text-sm font-medium text-text-muted mb-8">
                            <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-text-primary">{t("services")}</span>
                        </nav>

                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6">
                            Наши услуги
                        </h1>

                        <p className="text-xl text-text-secondary max-w-3xl leading-relaxed">
                            ZAK Trans предоставляет полный комплекс строительно-монтажных услуг для предприятий нефтегазового сектора. Мы гарантируем соблюдение сроков, высоких стандартов качества и строгих требований HSE.
                        </p>

                    </div>
                </div>
            </section>

            {/* Services Grid (Reused from Home, but can be restyled or wrapped if needed. Home grid already has a good layout) */}
            <div className="py-12 bg-bg-secondary">
                <ServicesGrid />
            </div>

            {/* SEO Bottom Text */}
            <section className="bg-bg-primary py-16 border-t border-border">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center text-text-secondary">
                    <h2 className="text-2xl font-bold text-text-primary mb-4 font-heading">Опыт и технологии для сложных проектов</h2>
                    <p className="leading-relaxed mb-4">
                        Наша компания обладает собственной базой специализированной техники и штатом квалифицированных инженеров.
                        Мы берем на себя ответственность за реализацию проектов любой сложности — от подготовки площадок и земляных работ
                        до монтажа высокотехнологичного оборудования и сдачи объектов в эксплуатацию.
                    </p>
                    <p className="leading-relaxed">
                        Наличие государственной лицензии СМР 3 категории позволяет нам выполнять функции генерального подрядчика
                        и обеспечивать полный цикл строительства с подготовкой всей необходимой исполнительной документации.
                    </p>
                </div>
            </section>
        </main>
    );
}
