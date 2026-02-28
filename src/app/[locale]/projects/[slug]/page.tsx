import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, Calendar, MapPin, Ruler, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import EstimateForm from "@/components/forms/EstimateForm";

// 1. Generate Static Params
export function generateStaticParams() {
    return [
        { locale: "ru" },
        { locale: "kz" },
        { locale: "en" }
    ].flatMap((l) => PROJECTS.map((p) => ({ slug: p.slug, locale: l.locale })));
}

// 2. Dynamic Metadata
export function generateMetadata({ params: { slug, locale } }: { params: { slug: string, locale: string } }): Metadata {
    const project = PROJECTS.find((p) => p.slug === slug);
    if (!project) return { title: "Проект не найден" };

    return {
        title: `${project.title} | Проекты ZAK Trans`,
        description: project.description.slice(0, 150) + "...",
    };
}

// 3. Page Component
export default function ProjectPage({
    params: { slug, locale },
}: {
    params: { slug: string; locale: string };
}) {
    setRequestLocale(locale);

    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const categoryLabels: Record<string, string> = {
        roads: "Дороги",
        rvs: "РВС",
        pipelines: "Нефтепроводы",
        construction: "Строительство",
        welding: "Сварка",
        plumbing: "Сантехника"
    };

    const locLabels: Record<string, string> = {
        atyrau: "Атырау",
        tengiz: "Тенгиз",
        kulsary: "Кульсары",
        other: "Другое"
    };

    return (
        <main className="w-full flex-1 flex flex-col bg-bg-primary">

            {/* 1. Gallery Hero */}
            <section className="relative h-[60vh] md:h-[70vh] w-full flex items-end">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-20">
                    <nav className="flex items-center text-sm font-medium text-text-muted mb-6">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/projects" className="hover:text-accent-blue transition-colors">Проекты</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary hidden sm:inline">{project.title.slice(0, 40)}{project.title.length > 40 ? '...' : ''}</span>
                    </nav>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue border border-accent-blue/30 rounded-full text-sm font-medium">
                            {categoryLabels[project.category]}
                        </span>
                        <span className="px-3 py-1 bg-steel text-text-primary border border-border rounded-full text-sm font-medium">
                            {project.year} год
                        </span>
                    </div>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight max-w-4xl">
                        {project.title}
                    </h1>
                </div>
            </section>

            {/* 2. Main Layout (Sidebar) */}
            <section className="py-12 md:py-20 lg:py-24 max-w-7xl mx-auto px-4 md:px-8 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Main Content Column */}
                    <div className="lg:w-2/3">
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-text-primary mb-6 font-heading">О проекте</h2>
                            <p className="text-lg text-text-secondary leading-relaxed mb-12">
                                {project.description}
                            </p>

                            <h2 className="text-2xl font-bold text-text-primary mb-6 font-heading">Выполненные работы</h2>
                            <div className="space-y-4 mb-12">
                                {project.worksDone.map((work, i) => (
                                    <div key={i} className="flex items-start space-x-3">
                                        <CheckCircle2 className="w-6 h-6 text-accent-blue shrink-0 mt-0.5" />
                                        <span className="text-text-secondary text-lg leading-relaxed">{work}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-text-primary mb-6 font-heading">Результат</h2>
                            <div className="p-6 bg-bg-elevated border-l-4 border-l-accent-blue rounded-r-2xl border-y border-r border-border mb-12">
                                <p className="text-text-primary font-medium text-lg leading-relaxed">
                                    {project.result}
                                </p>
                            </div>

                            {/* Photo Gallery */}
                            {project.gallery.length > 0 && (
                                <>
                                    <h2 className="text-2xl font-bold text-text-primary mb-6 font-heading">Фотогалерея</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                        {project.gallery.map((img, i) => (
                                            <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-border bg-steel">
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} - фото ${i + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Client Review */}
                            {project.clientReview && (
                                <div className="bg-bg-card border border-border rounded-2xl p-8 mb-12 relative">
                                    <span className="absolute top-4 right-6 text-6xl text-accent-blue/10 font-serif leading-none">"</span>
                                    <p className="text-lg text-text-secondary leading-relaxed italic mb-6 relative z-10">
                                        "{project.clientReview}"
                                    </p>
                                    <p className="font-bold text-text-primary">{project.clientCompany}</p>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 space-y-8">

                            {/* Meta Card */}
                            <div className="bg-bg-secondary border border-border rounded-2xl p-6 sm:p-8">
                                <h3 className="font-heading text-xl font-bold text-text-primary mb-6">Детали проекта</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">Локация</div>
                                            <div className="text-text-primary font-medium">{locLabels[project.location]}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <Clock className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">Срок реализации</div>
                                            <div className="text-text-primary font-medium">{project.duration}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <Ruler className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">Объем работ</div>
                                            <div className="text-text-primary font-medium">{project.volume}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Widget */}
                            <div className="bg-gradient-to-br from-bg-elevated to-bg-card border border-border rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="font-heading text-xl font-bold text-text-primary mb-3 relative z-10">Нужен похожий проект?</h3>
                                <p className="text-sm text-text-secondary mb-6 relative z-10">Оставьте заявку, и мы бесплатно рассчитаем стоимость работ для вашего объекта.</p>
                                <Link href="/about#estimate-form" className="w-full relative z-10 block px-6 py-3 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-lg font-medium text-center transition-colors">
                                    Запросить смету
                                </Link>
                            </div>

                            <Link href="/projects" className="inline-flex items-center space-x-2 text-text-secondary hover:text-accent-blue transition-colors font-medium group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span>Вернуться ко всем проектам</span>
                            </Link>

                        </div>
                    </div>

                </div>
            </section>

            {/* Global Form Section */}
            <section className="py-20 bg-bg-secondary border-t border-border">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-10">
                        <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">Обсудить ваш проект</h2>
                        <p className="text-text-secondary">Укажите детали, и мы подготовим для вас коммерческое предложение.</p>
                    </div>
                    <div className="bg-bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-xl">
                        <EstimateForm />
                    </div>
                </div>
            </section>

        </main>
    );
}
