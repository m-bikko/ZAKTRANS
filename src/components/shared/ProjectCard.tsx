"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Project } from "@/lib/types";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const t = useTranslations("shared");

    const categoryLabels: Record<string, string> = {
        roads: t("categoryRoads"),
        rvs: t("categoryRvs"),
        pipelines: t("categoryPipelines"),
        construction: t("categoryConstruction"),
        welding: t("categoryWelding"),
        plumbing: t("categoryPlumbing"),
    };

    const locLabels: Record<string, string> = {
        atyrau: t("locationAtyrau"),
        tengiz: t("locationTengiz"),
        kulsary: t("locationKulsary"),
        other: t("locationOther"),
    };

    return (
        <Link href={`/projects/${project.slug}`} className="group block relative overflow-hidden rounded-xl aspect-[4/3] bg-bg-elevated border border-border">
            {/* Background Image */}
            <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">

                {/* Category Badge */}
                <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-accent-blue/20 backdrop-blur-md border border-accent-blue/30 text-accent-blue text-xs uppercase tracking-wider font-semibold rounded-full">
                        {categoryLabels[project.category] || project.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                    {project.title}
                </h3>

                {/* Metadata */}
                <div className="flex items-center text-sm text-white/80 space-x-2 mb-4">
                    <span>{locLabels[project.location] || project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-white/50" />
                    <span>{project.year}</span>
                </div>

                {/* Hover Action */}
                <div className="flex items-center text-accent-blue text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {t("readMore")} <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>

            {/* Hover Border Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-accent-blue/30 rounded-xl transition-colors duration-300 pointer-events-none" />
        </Link>
    );
}
