import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Наша команда | ZAK Trans",
    description: "Квалифицированные специалисты, инженеры и рабочие — основа успеха ZAK Trans.",
};

const specialists = [
    { role: "Аттестованные сварщики (НАКС)", count: 12 },
    { role: "Монтажники технологических трубопроводов", count: 8 },
    { role: "Операторы спецтехники 6-го разряда", count: 5 },
    { role: "Инженеры ПТО и прорабы", count: 3 },
];

export default function TeamPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    setRequestLocale(locale);

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* 1. Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">Команда</span>
                    </nav>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Главный актив — <span className="text-accent-blue">Люди</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
                        ZAK Trans — это слаженный механизм, где каждый сотрудник отвечает за финальный результат. Наш коллектив состоит из проверенных годами специалистов, знающих специфику работы на сложных нефтегазовых объектах.
                    </p>

                    <div className="inline-block p-8 bg-bg-card border border-border rounded-2xl shadow-xl">
                        <div className="text-5xl lg:text-7xl font-mono font-bold text-accent-blue mb-2">20+</div>
                        <div className="text-lg text-text-secondary font-medium uppercase tracking-wider">Штатных сотрудников</div>
                    </div>
                </div>
            </section>

            {/* 2. Key Personnel Overview */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">Профессиональный профиль</h2>
                        <p className="text-text-secondary text-lg">
                            Наша команда сбалансирована для оперативного решения комплексных задач. Мы инвестируем в сертификацию и допуски каждого сотрудника.
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
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-12">Команда в деле</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Large Item */}
                        <div className="col-span-2 row-span-2 relative aspect-square rounded-2xl overflow-hidden border border-border">
                            <Image src="https://images.unsplash.com/photo-1541888086925-0c13dcced9f5?q=80&w=2670&auto=format&fit=crop" alt="Работники на объекте" fill className="object-cover" />
                        </div>
                        {/* Small Items */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
                            <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop" alt="Сварщик за работой" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
                            <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop" alt="Инженер ПТО" fill className="object-cover" />
                        </div>
                        <div className="col-span-2 relative aspect-[2/1] rounded-2xl overflow-hidden border border-border">
                            <Image src="https://images.unsplash.com/photo-1541888086925-0c13dcced9f5?q=80&w=2670&auto=format&fit=crop" alt="Бригада" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 text-center">
                <div className="max-w-xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Пригласите нас на объект</h2>
                    <p className="text-text-secondary leading-relaxed mb-8">
                        Мы готовы организовать выезд технического специалиста для оценки объемов работ и первичной консультации.
                    </p>
                    <Link href="/contacts" className="inline-flex items-center space-x-2 bg-text-primary text-bg-primary px-8 py-4 rounded-full font-medium hover:bg-white transition-colors">
                        <span>Обсудить сотрудничество</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
