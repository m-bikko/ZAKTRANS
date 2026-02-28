import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, ShieldCheck, HeartPulse, HardHat, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "HSE / Охрана труда и безопасность | ZAK Trans",
    description: "Политика в области охраны труда, промышленной безопасности и защиты окружающей среды.",
};

const principles = [
    {
        icon: ShieldCheck,
        title: "Нулевой травматизм",
        desc: "Наша главная цель — выполнение всех работ без происшествий и ущерба здоровью сотрудников.",
    },
    {
        icon: HardHat,
        title: "Обеспечение СИЗ",
        desc: "100% обеспечение персонала современными сертифицированными средствами индивидуальной защиты.",
    },
    {
        icon: HeartPulse,
        title: "Регулярные медосмотры",
        desc: "Ежедневный предсменный контроль и плановые медицинские осмотры для допуска к работам.",
    },
    {
        icon: FileText,
        title: "Обучение персонала",
        desc: "Регулярное проведение инструктажей (ТБ, ПБ, ООС) и повышение квалификации ответственных лиц.",
    }
];

export default function HsePage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    setRequestLocale(locale);

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* 1. Page Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale mix-blend-overlay"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888086925-0c13dcced9f5?q=80&w=2670&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-secondary pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">HSE</span>
                    </nav>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6 max-w-4xl mx-auto">
                        Политика <span className="text-accent-blue">HSE</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Охрана труда, промышленная безопасность и защита окружающей среды — наш фундамент при реализации каждого проекта.
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
                                    alt="Инструктаж по технике безопасности"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Texts */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">Культура безопасного производства</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>В TОО «ZAK Trans» внедрена и успешно функционирует система управления охраной труда и промышленной безопасностью (HSE), соответствующая передовым международным и казахстанским стандартам.</p>
                                <p>Перед началом любых работ на объекте весь линейный персонал и ИТР проходят строгий инструктаж, детально разбирая план производства работ (ППР) и карты оценки рисков.</p>
                                <p>Мы гордимся тем, что на ключевых объектах, таких как Тенгиз, статистика происшествий (LTI/TRIR) поддерживается на стабильно нулевом уровне.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CTA to Documents */}
            <section className="py-24 bg-bg-primary text-center">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Документация и сертификаты</h2>
                    <p className="text-lg text-text-secondary mb-10">
                        Политика компании, сертификаты качества ISO 9001/14001, а также лицензии доступны в специальном разделе для тендерных комиссий.
                    </p>
                    <Link href="/tender" className="inline-flex items-center space-x-2 bg-accent-blue hover:bg-accent-blue-hover text-white px-8 py-4 rounded-full font-medium transition-colors">
                        <span>Перейти к документам</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
