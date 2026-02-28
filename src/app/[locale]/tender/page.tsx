"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, Download, FileText, CheckCircle2, Building, Mail, Phone, MapPin } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import EstimateForm from "@/components/forms/EstimateForm";

// -- Mock Data --
const documents = [
    { id: 1, title: "Государственная лицензия на СМР (I категория)", number: "№12345678", issuer: "ГАСК Атырауской области", date: "Бессрочная", type: "PDF", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop" },
    { id: 2, title: "Сертификат ISO 9001:2015 (Системы менеджмента качества)", number: "KZ.123.456", issuer: "Национальный центр экспертизы", date: "Действителен до 2026", type: "PDF", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop" },
    { id: 3, title: "Сертификат ISO 14001:2015 (Экологический менеджмент)", number: "KZ.123.457", issuer: "Национальный центр экспертизы", date: "Действителен до 2026", type: "PDF", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop" },
    { id: 4, title: "Сертификат ISO 45001:2018 (Охрана труда)", number: "KZ.123.458", issuer: "Национальный центр экспертизы", date: "Действителен до 2026", type: "PDF", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop" },
];

const downloads = [
    { title: "Презентация компании ZAK Trans", size: "4.2 MB", format: "PDF" },
    { title: "Официальные реквизиты", size: "120 KB", format: "PDF" },
    { title: "Справка об отсутствии налоговой задолженности", size: "350 KB", format: "PDF" },
    { title: "Портфолио выполненных проектов 2020-2024", size: "8.5 MB", format: "PDF" },
];

export default function TenderPage() {
    const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* 1. Page Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-bg-primary overflow-hidden border-b border-border">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <nav className="flex items-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">Тендеры</span>
                    </nav>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="max-w-3xl">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6">
                                Документы для <span className="text-accent-blue">тендера</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed mb-8">
                                Вся необходимая официальная документация для оценки квалификации подрядчика, прохождения комплаенса и участия в закупках.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="flex items-center space-x-2 bg-text-primary text-bg-primary px-6 py-3 rounded-full font-medium hover:bg-white transition-colors">
                                    <Download className="w-4 h-4" />
                                    <span>Скачать презентацию (PDF)</span>
                                </button>
                                <button className="flex items-center space-x-2 bg-bg-elevated text-text-primary border border-border px-6 py-3 rounded-full font-medium hover:border-accent-blue/50 transition-colors">
                                    <Download className="w-4 h-4" />
                                    <span>Скачать реквизиты</span>
                                </button>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-bg-card border border-border p-6 rounded-2xl w-full md:w-80 shrink-0">
                            <h3 className="font-bold text-text-primary mb-4">Тендерный отдел</h3>
                            <div className="space-y-4">
                                <div className="flex items-start text-sm text-text-secondary">
                                    <Phone className="w-4 h-4 text-accent-blue mt-0.5 mr-3 shrink-0" />
                                    <div>
                                        <div className="font-medium text-text-primary">+7 700 101 0660</div>
                                        <div className="text-text-muted">Для звонков и WhatsApp</div>
                                    </div>
                                </div>
                                <div className="flex items-start text-sm text-text-secondary">
                                    <Mail className="w-4 h-4 text-accent-blue mt-0.5 mr-3 shrink-0" />
                                    <div>
                                        <div className="font-medium text-text-primary text-wrap break-all">tender@zaktrans.kz</div>
                                        <div className="text-text-muted">Официальные запросы</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Requisites & Core Info */}
            <section className="py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Requisites Table */}
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-text-primary mb-8 flex items-center">
                                <Building className="w-8 h-8 text-accent-blue mr-4" />
                                Реквизиты компании
                            </h2>
                            <div className="bg-bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <tbody className="divide-y divide-border">
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium w-1/3">Наименование</th>
                                            <td className="py-4 px-6 font-bold text-text-primary">ТОО «ZAK Trans»</td>
                                        </tr>
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium">БИН</th>
                                            <td className="py-4 px-6 font-bold text-text-primary font-mono tracking-wider">220340003406</td>
                                        </tr>
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium">Юр. адрес</th>
                                            <td className="py-4 px-6 text-text-primary">РК, Атырауская обл., г. Атырау, пр-т Абулхаир Хана, строение 91 Коворкинг Center Infinity</td>
                                        </tr>
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium">Факт. адрес</th>
                                            <td className="py-4 px-6 text-text-primary">РК, Атырауская обл., г. Атырау, ул. Сырым Датов, Корпус 1</td>
                                        </tr>
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium">Руководитель</th>
                                            <td className="py-4 px-6 text-text-primary">Директор: [ФИО Руководителя]</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Competencies */}
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-text-primary mb-8 flex items-center">
                                <CheckCircle2 className="w-8 h-8 text-accent-blue mr-4" />
                                Ключевые компетенции
                            </h2>
                            <div className="space-y-6">
                                <p className="text-text-secondary leading-relaxed">
                                    Компания имеет право на осуществление строительно-монтажных работ первой категории сложности, включая объекты нефтегазового сектора.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Земляные работы на магистралях",
                                        "Монтаж технологических трубопроводов",
                                        "Строительство резервуарных парков (РВС)",
                                        "Антикоррозионная защита и АКЗ",
                                        "Геодезические работы",
                                        "Устройство инженерных сетей"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-text-primary bg-bg-elevated border border-border p-4 rounded-xl">
                                            <CheckCircle2 className="w-4 h-4 text-accent-blue mr-3 shrink-0 mt-0.5" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Licenses & ISO Certificates */}
            <section className="py-20 bg-bg-primary border-y border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-12 text-center">Лицензии и сертификаты</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {documents.map((doc) => (
                            <div key={doc.id} className="bg-bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:border-accent-blue/50 transition-colors">
                                {/* Preview */}
                                <div
                                    className="relative h-48 bg-steel border-b border-border cursor-pointer overflow-hidden p-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500"
                                    onClick={() => setSelectedDoc(doc.image)}
                                >
                                    <FileText className="w-16 h-16 text-text-muted/50 absolute z-0" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent z-10" />
                                    <span className="relative z-20 bg-bg-primary border border-border text-xs font-bold px-3 py-1 rounded-full text-text-primary shadow-sm group-hover:bg-accent-blue group-hover:text-white group-hover:border-accent-blue transition-colors">
                                        Увеличить фото
                                    </span>
                                </div>
                                {/* Info */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-xs text-text-muted mb-2 font-mono">{doc.number}</div>
                                    <h4 className="font-bold text-text-primary text-sm mb-3 flex-1">{doc.title}</h4>
                                    <div className="text-xs text-text-secondary mb-1">Выдан: {doc.issuer}</div>
                                    <div className="text-xs text-text-secondary mb-4">{doc.date}</div>
                                    <button className="flex items-center text-accent-blue text-sm font-medium hover:underline mt-auto">
                                        <Download className="w-4 h-4 mr-2" /> Скачать {doc.type}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Downloads Materials */}
            <section className="py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-8">Материалы для загрузки</h2>
                    <div className="bg-bg-card border border-border rounded-2xl p-2">
                        {downloads.map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 hover:bg-bg-elevated rounded-xl transition-colors border-b border-border last:border-0">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mr-4 shrink-0">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-text-primary">{item.title}</div>
                                        <div className="text-xs text-text-muted mt-1">{item.format} • {item.size}</div>
                                    </div>
                                </div>
                                <button className="p-2 text-text-muted hover:text-accent-blue transition-colors">
                                    <Download className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Request Form */}
            <section className="py-20 bg-bg-primary border-t border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">Запросить дополнительные данные</h2>
                            <p className="text-text-secondary">Если вам требуются специфические документы, квалификационные анкеты или расчет стоимости (КП), оставьте заявку ниже.</p>
                        </div>
                        <EstimateForm />
                    </div>
                </div>
            </section>

            {/* Document Lightbox */}
            <Dialog open={!!selectedDoc} onOpenChange={(open) => !open && setSelectedDoc(null)}>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none overflow-hidden h-[90vh]">
                    {selectedDoc && (
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedDoc}
                                alt="Просмотр документа"
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
