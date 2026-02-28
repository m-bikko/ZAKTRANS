"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PROJECTS } from "@/lib/constants";

const categories = [
    { id: "all", label: "Все проекты" },
    { id: "roads", label: "Дороги" },
    { id: "rvs", label: "РВС" },
    { id: "pipelines", label: "Нефтепроводы" },
    { id: "construction", label: "Строительство" },
    { id: "welding", label: "Сварка" },
];

export default function ProjectsPreview() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = activeCategory === "all"
        ? PROJECTS.slice(0, 6)
        : PROJECTS.filter(p => p.category === activeCategory).slice(0, 6);

    return (
        <section className="bg-bg-primary py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="w-8 h-px bg-accent-blue" />
                            <span className="text-accent-blue text-xs font-semibold tracking-widest uppercase">КАК МЫ РАБОТАЕМ</span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary">
                            Выполненные проекты
                        </h2>
                    </div>
                    <Link href="/projects" className="group hidden md:flex items-center text-text-secondary hover:text-accent-blue transition-colors font-medium">
                        Все проекты
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Filters */}
                <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-12 w-full overflow-x-auto pb-4 hide-scrollbar">
                    <TabsList className="bg-bg-secondary border border-border h-12 inline-flex w-max min-w-full sm:min-w-0 px-1 p-1">
                        {categories.map((cat) => (
                            <TabsTrigger
                                key={cat.id}
                                value={cat.id}
                                className="rounded-md px-6 h-full data-[state=active]:bg-bg-elevated data-[state=active]:text-text-primary text-text-muted hover:text-text-primary transition-all"
                            >
                                {cat.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </motion.div>

                {/* Mobile View All Button */}
                <div className="mt-10 md:hidden flex justify-center">
                    <Link href="/projects" className="w-full flex justify-center items-center bg-bg-secondary border border-border hover:border-text-secondary text-text-primary px-8 py-4 rounded-full font-medium transition-all group">
                        Смотреть все проекты
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
