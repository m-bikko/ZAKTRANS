"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsSlider() {
    const t = useTranslations("homeReviews");
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const reviews = [
        {
            id: 1,
            text: t("review1Text"),
            author: t("review1Author"),
            position: t("review1Position"),
            initials: "МДМ",
        },
        {
            id: 2,
            text: t("review2Text"),
            author: t("review2Author"),
            position: t("review2Position"),
            initials: "ОМГ",
        },
        {
            id: 3,
            text: t("review3Text"),
            author: t("review3Author"),
            position: t("review3Position"),
            initials: "TPI",
        },
        {
            id: 4,
            text: t("review4Text"),
            author: t("review4Author"),
            position: t("review4Position"),
            initials: "КМГ",
        },
    ];

    return (
        <section className="bg-bg-secondary py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary">
                            {t("title")}
                        </h2>
                    </div>
                    <div className="hidden md:flex space-x-2">
                        <button
                            onClick={scrollPrev}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-colors"
                            aria-label="Previous review"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-colors"
                            aria-label="Next review"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative cursor-grab active:cursor-grabbing">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-6 auto-cols-[85%] sm:auto-cols-[60%] md:auto-cols-[45%] lg:auto-cols-[33%]">
                            {reviews.map((review) => (
                                <div key={review.id} className="pl-4 md:pl-6 min-w-0 flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%]">
                                    <div className="bg-bg-card border border-border rounded-xl p-6 sm:p-8 h-full flex flex-col relative">
                                        <Quote className="absolute top-6 right-6 w-12 h-12 text-accent-blue opacity-5 font-heading" />

                                        <p className="text-text-secondary text-base leading-relaxed mb-8 relative z-10 flex-grow">
                                            {review.text}
                                        </p>

                                        <div className="flex items-center mt-auto border-t border-border pt-6">
                                            <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold font-heading mr-4">
                                                {review.initials}
                                            </div>
                                            <div>
                                                <div className="text-text-primary font-medium">{review.author}</div>
                                                <div className="text-text-muted text-xs sm:text-sm">{review.position}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="flex justify-center space-x-4 mt-8 md:hidden">
                    <button
                        onClick={scrollPrev}
                        className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary active:text-accent-blue active:border-accent-blue transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary active:text-accent-blue active:border-accent-blue transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </section>
    );
}
