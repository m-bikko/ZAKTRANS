"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronRight, CheckCircle2, Loader2 } from "lucide-react";
import EstimateForm from "@/components/forms/EstimateForm";
import ProjectsPreview from "@/components/sections/home/ProjectsPreview";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export interface ServiceData {
    id: string;
    title: string;
    shortOffer: string;
    bgImage: string;
    worksDone: string[];
    objectsType: { title: string; desc: string }[];
    stages: { id: number; name: string; desc: string }[];
    guarantees: { title: string; desc: string }[];
    faq: { q: string; a: string }[];
}

interface ServiceTemplateProps {
    data: ServiceData;
}

const formatKzPhone = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length === 0) return "";
    if (digits.length <= 1) return `+${digits}`;
    if (digits.length <= 4) return `+${digits[0]} (${digits.slice(1)}`;
    if (digits.length <= 7) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
};

function QuickForm({ serviceTitle }: { serviceTitle: string }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const digits = phone.replace(/\D/g, "");
        if (digits.length !== 11 || !digits.startsWith("7")) return;

        setStatus("loading");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    phone: `+${digits}`,
                    email: "-",
                    serviceType: serviceTitle,
                    location: "-",
                    comment: `Быстрая заявка со страницы услуги: ${serviceTitle}`,
                }),
            });
            if (!response.ok) throw new Error("Failed");
            setStatus("success");
            setName("");
            setPhone("");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-text-primary mb-2">Оперативный расчет</h3>
            <p className="text-sm text-text-secondary mb-6">Оставьте телефон для связи с инженером ПТО</p>
            {status === "success" ? (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm text-center">
                    Заявка отправлена! Мы перезвоним в течение 30 минут.
                </div>
            ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                        required
                    />
                    <input
                        type="tel"
                        inputMode="numeric"
                        placeholder="+7 (700) 101-06-60"
                        value={phone}
                        onChange={(e) => setPhone(formatKzPhone(e.target.value))}
                        onFocus={() => { if (!phone) setPhone("+7 ("); }}
                        className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-text-primary focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-colors"
                        required
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-accent-blue hover:bg-accent-blue-hover text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {status === "loading" ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Отправка...
                            </span>
                        ) : "Рассчитать стоимость"}
                    </button>
                    {status === "error" && (
                        <p className="text-red-400 text-xs text-center">Ошибка отправки. Попробуйте ещё раз.</p>
                    )}
                </form>
            )}
        </div>
    );
}

export default function ServiceTemplate({ data }: ServiceTemplateProps) {
    const t = useTranslations("nav");

    return (
        <main className="w-full flex-1 flex flex-col bg-bg-secondary">

            {/* 1. Page Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale mix-blend-overlay"
                    style={{ backgroundImage: `url(${data.bgImage})` }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-secondary pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[5]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row justify-between gap-12">

                        <div className="flex flex-col justify-center max-w-2xl">
                            <nav className="flex items-center text-sm font-medium text-text-muted mb-8">
                                <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                                <ChevronRight className="w-4 h-4 mx-2" />
                                <Link href="/services" className="hover:text-accent-blue transition-colors">{t("services")}</Link>
                                <ChevronRight className="w-4 h-4 mx-2" />
                                <span className="text-text-primary">{data.title}</span>
                            </nav>

                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6">
                                {data.title}
                            </h1>

                            <p className="text-xl text-text-secondary leading-relaxed border-l-2 border-accent-blue pl-6 ml-1">
                                {data.shortOffer}
                            </p>
                        </div>

                        {/* Quick CTA Card */}
                        <div className="bg-bg-card border border-border p-8 rounded-2xl shadow-xl w-full lg:w-96 shrink-0 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                            <QuickForm serviceTitle={data.title} />
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. What We Do */}
            <section className="py-20 lg:py-32 bg-bg-primary border-b border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center lg:text-left">
                        Виды выполняемых работ
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.worksDone.map((work, i) => (
                            <div key={i} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-bg-elevated transition-colors border border-transparent hover:border-border">
                                <CheckCircle2 className="w-6 h-6 text-accent-blue shrink-0 mt-0.5" />
                                <span className="text-text-primary text-lg">{work}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Objects / For Whom */}
            <section className="py-20 lg:py-32 bg-bg-secondary border-b border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            Типовые объекты
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Опыт реализации инфраструктурных проектов на месторождениях и промышленных базах.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.objectsType.map((obj, i) => (
                            <div key={i} className="bg-bg-card border border-border p-6 rounded-2xl">
                                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">{obj.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{obj.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Stages */}
            <section className="py-20 lg:py-32 bg-bg-primary border-b border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-16 text-center">
                        Этапы взаимодействия
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
                        {data.stages.map((stage, i) => (
                            <div key={stage.id} className="relative flex flex-col pt-6 md:pt-8 bg-bg-card p-6 rounded-xl border border-border xl:bg-transparent xl:border-none xl:p-0">
                                <div className="absolute top-0 right-6 md:right-auto md:left-6 xl:top-auto xl:-top-12 xl:left-0 font-mono text-5xl font-bold text-accent-blue/20">
                                    0{stage.id}
                                </div>
                                <h4 className="text-xl font-bold text-text-primary mb-3 mt-4 xl:mt-0 relative z-10">{stage.name}</h4>
                                <p className="text-text-secondary text-sm leading-relaxed relative z-10">{stage.desc}</p>

                                {/* Decorative line for desktop timeline */}
                                {i < data.stages.length - 1 && (
                                    <div className="hidden xl:block absolute top-[10px] left-[30px] w-[calc(100%+30px)] h-px bg-gradient-to-r from-accent-blue/30 to-transparent z-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Guarantees */}
            <section className="py-20 bg-bg-secondary border-b border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.guarantees.map((g, i) => (
                            <div key={i} className="bg-bg-elevated rounded-2xl p-8 border border-border border-l-4 border-l-accent-blue">
                                <h4 className="text-lg font-bold text-text-primary mb-2">{g.title}</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">{g.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ Block */}
            <section className="py-20 lg:py-32 bg-bg-primary border-b border-border">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
                        Частые вопросы
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                        {data.faq.map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-border">
                                <AccordionTrigger className="text-left text-lg font-medium text-text-primary hover:text-accent-blue hover:no-underline py-6">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-text-secondary text-base leading-relaxed pb-6">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* 7. Bottom Projects Preview (Reused Home Component) */}
            <div className="py-12 bg-bg-secondary">
                <ProjectsPreview />
            </div>

            {/* 8. Full Estimate Form */}
            <section className="py-20 lg:py-32 bg-bg-primary" id="service-form">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <div className="bg-bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent pointer-events-none" />
                        <div className="relative z-10 text-center mb-10">
                            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">Оставить заявку</h2>
                            <p className="text-text-secondary">Укажите вид работ, и мы свяжемся с вами в течение 2 часов.</p>
                        </div>
                        <div className="relative z-10">
                            <EstimateForm />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
