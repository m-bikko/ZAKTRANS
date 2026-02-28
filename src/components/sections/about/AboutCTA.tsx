"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import EstimateForm from "@/components/forms/EstimateForm";

export default function AboutCTA() {
    const t = useTranslations("company");

    return (
        <section className="bg-bg-secondary py-20 lg:py-32 border-t border-border relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">

                <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
                    Готовы обсудить ваш проект?
                </h2>

                <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                    Оставьте заявку на расчет стоимости работ. Наши инженеры изучат техническое задание и подготовят коммерческое предложение.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="w-full sm:w-auto px-8 py-4 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-lg font-medium text-lg flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent-blue/20">
                                <span>Запросить смету</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] bg-bg-secondary border-border p-0 overflow-hidden">
                            <div className="p-6 md:p-8 bg-gradient-to-br from-bg-elevated to-bg-card">
                                <h2 className="font-heading text-2xl font-bold text-text-primary mb-2">Расчет стоимости работ</h2>
                                <p className="text-text-secondary mb-6">Заполните форму ниже, и мы подготовим для вас КП.</p>
                                <EstimateForm />
                            </div>
                        </DialogContent>
                    </Dialog>

                    <a
                        href={`https://wa.me/${t("whatsapp").replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-border hover:border-accent-blue hover:text-accent-blue text-text-primary rounded-lg font-medium text-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        <span>WhatsApp</span>
                    </a>

                </div>

            </div>
        </section>
    );
}
