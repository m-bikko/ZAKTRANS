"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, Quote } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface TextReview {
    id: number;
    type: "text";
    category: string;
    textKey: string;
    authorKey: string;
    companyKey: string;
    roleKey: string;
}

interface LetterReview {
    id: number;
    type: "letter";
    category: string;
    image: string;
    titleKey: string;
}

type ReviewItem = TextReview | LetterReview;

const mockReviews: ReviewItem[] = [
    {
        id: 1,
        type: "text",
        category: "construction",
        textKey: "review1Text",
        authorKey: "review1Author",
        companyKey: "review1Company",
        roleKey: "review1Role",
    },
    {
        id: 2,
        type: "letter",
        category: "oilgas",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
        titleKey: "letter1Title",
    },
    {
        id: 3,
        type: "text",
        category: "oilgas",
        textKey: "review2Text",
        authorKey: "review2Author",
        companyKey: "review2Company",
        roleKey: "review2Role",
    },
    {
        id: 4,
        type: "letter",
        category: "roads",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop",
        titleKey: "letter2Title",
    },
    {
        id: 5,
        type: "text",
        category: "construction",
        textKey: "review3Text",
        authorKey: "review3Author",
        companyKey: "review3Company",
        roleKey: "review3Role",
    },
];

export default function ReviewsPage() {
    const t = useTranslations("reviewsPage");
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    const categories = [
        { id: "all", label: t("categoryAll") },
        { id: "oilgas", label: t("categoryOilgas") },
        { id: "construction", label: t("categoryConstruction") },
        { id: "roads", label: t("categoryRoads") },
    ];

    const filteredReviews = activeCategory === "all"
        ? mockReviews
        : mockReviews.filter(r => r.category === activeCategory);

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">{t("breadcrumbHome")}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">{t("breadcrumbReviews")}</span>
                    </nav>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {t("titlePart1")} <span className="text-accent-blue">{t("titleHighlight")}</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-12 md:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8 bg-bg-secondary">

                    {/* Filters */}
                    <div className="flex justify-center mb-12">
                        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-3xl overflow-x-auto pb-4 hide-scrollbar">
                            <TabsList className="bg-bg-card border border-border h-12 w-max min-w-full sm:min-w-0 p-1 mx-auto flex">
                                {categories.map((cat) => (
                                    <TabsTrigger
                                        key={cat.id}
                                        value={cat.id}
                                        className="rounded-md px-4 sm:px-6 h-full data-[state=active]:bg-bg-elevated data-[state=active]:text-text-primary text-text-muted hover:text-text-primary transition-all whitespace-nowrap"
                                    >
                                        {cat.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Masonry-like Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredReviews.map((item) => (
                            <div key={item.id} className="break-inside-avoid">
                                {item.type === "text" ? (
                                    // Text Review Card
                                    <div className="bg-bg-card border border-border p-8 rounded-2xl relative group hover:border-accent-blue/50 transition-colors">
                                        <Quote className="absolute top-6 right-6 w-10 h-10 text-accent-blue/10 group-hover:text-accent-blue/20 transition-colors rotate-180" />
                                        <p className="text-text-secondary leading-relaxed mb-8 relative z-10 italic">
                                            &ldquo;{t(item.textKey)}&rdquo;
                                        </p>
                                        <div className="flex items-center space-x-4 border-t border-border pt-6">
                                            <div className="w-12 h-12 rounded-full bg-bg-elevated flex items-center justify-center font-bold text-text-muted text-xl border border-border">
                                                {t(item.authorKey).charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-text-primary">{t(item.authorKey)}</div>
                                                <div className="text-xs text-text-muted">{t(item.roleKey)}</div>
                                                <div className="text-sm font-medium text-accent-blue">{t(item.companyKey)}</div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Scanned Letter Card
                                    <div
                                        className="bg-steel border border-border rounded-2xl overflow-hidden cursor-pointer group relative aspect-[1/1.4]"
                                        onClick={() => item.image && setSelectedLetter(item.image)}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={t(item.titleKey)}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-primary/90 to-transparent p-6 pt-20">
                                            <div className="font-medium text-white line-clamp-2">{t(item.titleKey)}</div>
                                            <div className="text-accent-blue text-sm mt-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                                {t("enlargePhoto")} <ChevronRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Lightbox Dialog for Letters */}
            <Dialog open={!!selectedLetter} onOpenChange={(open) => !open && setSelectedLetter(null)}>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none overflow-hidden h-[90vh]">
                    <DialogTitle className="sr-only">{t("lightboxTitle")}</DialogTitle>
                    {selectedLetter && (
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedLetter}
                                alt={t("lightboxAlt")}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </main>
    );
}
