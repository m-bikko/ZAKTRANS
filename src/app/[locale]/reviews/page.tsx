"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, Quote } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const mockReviews = [
    {
        id: 1,
        type: "text",
        category: "construction",
        text: "Выражаем благодарность ТОО «ZAK Trans» за оперативное и качественное выполнение строительно-монтажных работ по возведению складского комплекса. Все этапы были завершены в соответствии с графиком производства работ.",
        author: "А.С. Ибрагимов",
        company: "ТОО «ПромСтройКаз»",
        role: "Директор по капитальному строительству"
    },
    {
        id: 2,
        type: "letter",
        category: "oilgas",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop", // placeholder for scanned letter
        title: "Благодарственное письмо от KMG",
    },
    {
        id: 3,
        type: "text",
        category: "oilgas",
        text: "Компания проявила себя как надежный партнер при реализации проекта по замене аварийного участка нефтепровода. Особо хотим отметить высокий уровень соблюдения техники безопасности на объекте (HSE).",
        author: "Е.В. Смирнов",
        company: "NCOC",
        role: "Руководитель проекта"
    },
    {
        id: 4,
        type: "letter",
        category: "roads",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop", // placeholder for scanned letter
        title: "Отзыв о строительстве подъездных путей",
    },
    {
        id: 5,
        type: "text",
        category: "construction",
        text: "Бригада сварщиков ZAK Trans выполнила сборку и обвязку технологических узлов на высшем уровне. 100% стыков прошли УЗК контроль без единого замечания. Рекомендуем как профессионалов своего дела.",
        author: "М.К. Досанов",
        company: "KazStroyService",
        role: "Главный инженер"
    },
];

const categories = [
    { id: "all", label: "Все отзывы" },
    { id: "oilgas", label: "Нефтегазовый сектор" },
    { id: "construction", label: "Промышленное строительство" },
    { id: "roads", label: "Дорожная инфраструктура" },
];

export default function ReviewsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    const filteredReviews = activeCategory === "all"
        ? mockReviews
        : mockReviews.filter(r => r.category === activeCategory);

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 border-b border-border bg-bg-primary">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">Отзывы</span>
                    </nav>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Отзывы <span className="text-accent-blue">заказчиков</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Оценка нашей работы от профильных специалистов, инженеров и руководителей крупнейших предприятий.
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
                                            "{item.text}"
                                        </p>
                                        <div className="flex items-center space-x-4 border-t border-border pt-6">
                                            <div className="w-12 h-12 rounded-full bg-bg-elevated flex items-center justify-center font-bold text-text-muted text-xl border border-border">
                                                {item.author?.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-text-primary">{item.author}</div>
                                                <div className="text-xs text-text-muted">{item.role}</div>
                                                <div className="text-sm font-medium text-accent-blue">{item.company}</div>
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
                                            src={item.image!}
                                            alt={item.title!}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-primary/90 to-transparent p-6 pt-20">
                                            <div className="font-medium text-white line-clamp-2">{item.title}</div>
                                            <div className="text-accent-blue text-sm mt-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                                Увеличить фото <ChevronRight className="w-4 h-4 ml-1" />
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
                    {selectedLetter && (
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedLetter}
                                alt="Скан-копия отзыва"
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
