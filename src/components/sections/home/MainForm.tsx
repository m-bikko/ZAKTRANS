"use client";

import { CheckCircle2 } from "lucide-react";
import EstimateForm from "@/components/forms/EstimateForm";

export default function MainForm() {
    const points = [
        "Бесплатный расчет сметы",
        "Работаем с ТЗ, чертежами и готовыми ведомостями",
        "Официальный договор, полная материальная и гарантийная ответственность",
        "Огромный опыт работы на Тенгизе и других месторождениях"
    ];

    return (
        <section className="bg-bg-primary py-24 sm:py-32 relative overflow-hidden" id="estimate-form">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Text Side */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="w-8 h-px bg-accent-blue" />
                            <span className="text-accent-blue text-xs font-semibold tracking-widest uppercase">
                                СОТРУДНИЧЕСТВО С НАМИ
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                            Рассчитаем стоимость <br />вашего объекта
                        </h2>

                        <p className="text-xl text-text-secondary mb-10">
                            Заполните форму, и мы свяжемся с вами в течение 2 часов для обсуждения деталей и подготовки КП.
                        </p>

                        <div className="space-y-6 mb-12">
                            {points.map((point, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <CheckCircle2 className="w-6 h-6 text-accent-blue shrink-0 mt-0.5" />
                                    <span className="text-text-primary text-lg">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-bg-elevated border border-border p-6 rounded-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            <p className="text-sm text-text-muted mb-2 font-medium uppercase tracking-wider">Прямая связь по телефону</p>
                            <a href="tel:+77001010660" className="text-2xl font-bold text-text-primary hover:text-accent-blue transition-colors">
                                +7 700 101-06-60
                            </a>
                        </div>
                    </div>

                    {/* Right Form Side */}
                    <div className="bg-bg-secondary border border-border rounded-2xl p-6 sm:p-10 shadow-2xl relative">
                        {/* Subtle glow behind form */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-2xl opacity-50 pointer-events-none" />
                        <div className="relative">
                            <EstimateForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
