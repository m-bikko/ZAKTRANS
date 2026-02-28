"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Droplets, Flame, Building2, Route, Cylinder, GitBranch } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function ServicesGrid() {
    const s = useTranslations("services");

    const services = [
        {
            id: "plumbing",
            title: s("plumbing.title"),
            description: s("plumbing.short"),
            icon: Droplets,
            href: "/services/plumbing",
        },
        {
            id: "welding",
            title: s("welding.title"),
            description: s("welding.short"),
            icon: Flame,
            href: "/services/welding",
        },
        {
            id: "turnkey",
            title: s("turnkey.title"),
            description: s("turnkey.short"),
            icon: Building2,
            href: "/services/turnkey-construction",
        },
        {
            id: "roads",
            title: s("roads.title"),
            description: s("roads.short"),
            icon: Route,
            href: "/services/roads",
        },
        {
            id: "rvs",
            title: s("rvs.title"),
            description: s("rvs.short"),
            icon: Cylinder,
            href: "/services/rvs",
        },
        {
            id: "pipelines",
            title: s("pipelines.title"),
            description: s("pipelines.short"),
            icon: GitBranch,
            href: "/services/pipelines",
        },
    ];

    return (
        <section className="bg-bg-primary py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="mb-16 md:mb-20 max-w-2xl">
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="w-8 h-px bg-accent-blue" />
                        <span className="text-accent-blue text-xs font-semibold tracking-widest uppercase">
                            ЧТО МЫ ДЕЛАЕМ
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
                        {s("title")}
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        Полный комплекс строительно-монтажных работ для объектов промышленности и нефтегазовой отрасли с гарантией качества и соблюдением сроков.
                    </p>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={itemVariants} className="h-full">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                href={service.href}
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
