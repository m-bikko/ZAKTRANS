"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/shared/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    { id: "all", label: "Все проекты" },
    { id: "roads", label: "Дороги" },
    { id: "rvs", label: "РВС" },
    { id: "pipelines", label: "Нефтепроводы" },
    { id: "construction", label: "Строительство" },
    { id: "welding", label: "Сварка" },
    { id: "plumbing", label: "Сантехника" },
];

const locations = [
    { id: "all", label: "Все локации" },
    { id: "atyrau", label: "Атырау" },
    { id: "tengiz", label: "Тенгиз" },
    { id: "kulsary", label: "Кульсары" },
];

export default function ProjectsCatalogPage() {
    const t = useTranslations("nav");

    const [activeCategory, setActiveCategory] = useState("all");
    const [activeLocation, setActiveLocation] = useState("all");

    const filteredProjects = PROJECTS.filter((project) => {
        const matchCategory = activeCategory === "all" || project.category === activeCategory;
        const matchLocation = activeLocation === "all" || project.location === activeLocation;
        return matchCategory && matchLocation;
    });

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">{t("projects")}</span>
                    </nav>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Реализованные проекты
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Ознакомьтесь с примерами выполненных строительно-монтажных работ на нефтегазовых объектах.
                    </p>
                </div>
            </section>

            {/* Filters & Grid */}
            <section className="py-12 md:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8 bg-bg-secondary">

                    {/* Filters Configuration */}
                    <div className="mb-12 space-y-6">

                        {/* Categories */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-text-muted uppercase tracking-wider mr-4">Направление:</span>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                                        ? "bg-accent-blue text-white shadow-md shadow-accent-blue/20"
                                        : "bg-bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent-blue/50"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Locations */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-text-muted uppercase tracking-wider mr-4">Локация:</span>
                            {locations.map((loc) => (
                                <button
                                    key={loc.id}
                                    onClick={() => setActiveLocation(loc.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeLocation === loc.id
                                        ? "bg-steel text-text-primary border border-border"
                                        : "bg-transparent text-text-secondary hover:text-text-primary"
                                        }`}
                                >
                                    {loc.label}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bg-card border border-border text-text-muted mb-4">
                                    <span className="text-2xl">🔍</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-2">Проекты не найдены</h3>
                                <p className="text-text-secondary">Попробуйте изменить параметры фильтрации.</p>
                                <button
                                    onClick={() => { setActiveCategory("all"); setActiveLocation("all"); }}
                                    className="mt-6 text-accent-blue hover:underline font-medium"
                                >
                                    Сбросить фильтры
                                </button>
                            </motion.div>
                        )}
                    </motion.div>

                </div>
            </section>

        </main>
    );
}
