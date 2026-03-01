import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ChevronRight, MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import EstimateForm from "@/components/forms/EstimateForm";

export const metadata: Metadata = {
    title: "Контакты | ZAK Trans",
    description: "Свяжитесь с ZAK Trans. Главный офис в Атырау, производственная база в Кульсары.",
};

const contactInfo = [
    {
        icon: Phone,
        title: "Телефон",
        details: ["+7 700 101 0660", "+7 7122 12 34 56 (Офис)"],
        action: { label: "Позвонить", href: "tel:+77001010660" }
    },
    {
        icon: Mail,
        title: "Email",
        details: ["info@zaktrans.kz (Общие вопросы)", "tender@zaktrans.kz (Тендерный отдел)"],
        action: { label: "Написать", href: "mailto:info@zaktrans.kz" }
    },
    {
        icon: MessageCircle,
        title: "Мессенджеры",
        details: ["Оперативно отвечаем в рабочее время"],
        action: { label: "Написать в WhatsApp", href: "https://wa.me/77001010660", primary: true }
    },
    {
        icon: Clock,
        title: "Режим работы офиса",
        details: ["Пн-Пт: 09:00 - 18:00", "Сб-Вс: Выходной"],
    }
];

export default async function ContactsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* 1. Page Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary pointer-events-none opacity-50" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">Контакты</span>
                    </nav>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Свяжитесь с <span className="text-accent-blue">нами</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Готовы обсудить ваш проект, ответить на вопросы и предложить оптимальные решения для строительства.
                    </p>
                </div>
            </section>

            {/* 2. Contact Details & Maps Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left: Info Cards */}
                        <div className="lg:col-span-5 space-y-6">

                            {/* Address Box */}
                            <div className="bg-bg-card border border-border p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                                <MapPin className="w-10 h-10 text-accent-blue mb-6" />
                                <h3 className="text-2xl font-bold text-text-primary mb-2">Главный офис</h3>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    г. Кульсары,<br />
                                    ул. Туймеш Сабетова, 180а
                                </p>
                                <div className="flex items-center space-x-4">
                                    <a
                                        href="https://go.2gis.com/eJDQV"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center text-sm font-medium bg-bg-elevated border border-border hover:border-accent-blue/50 text-text-primary px-4 py-2 rounded-lg transition-colors"
                                    >
                                        <Navigation className="w-4 h-4 mr-2" /> 2GIS
                                    </a>
                                </div>
                            </div>

                            {/* Other Contacts Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactInfo.map((item, i) => (
                                    <div key={i} className="bg-bg-elevated border border-border p-6 rounded-xl flex flex-col hover:border-accent-blue/50 transition-colors">
                                        <item.icon className="w-6 h-6 text-accent-blue mb-4" />
                                        <h4 className="font-bold text-text-primary mb-2">{item.title}</h4>
                                        <div className="text-sm text-text-secondary space-y-1 flex-1 mb-4">
                                            {item.details.map((detail, idx) => (
                                                <div key={idx}>{detail}</div>
                                            ))}
                                        </div>
                                        {item.action && (
                                            <a
                                                href={item.action.href}
                                                className={`text-sm font-medium mt-auto inline-flex items-center ${item.action.primary ? 'text-green-500 hover:text-green-400' : 'text-accent-blue hover:text-accent-blue-hover'}`}
                                            >
                                                {item.action.label} <ChevronRight className="w-4 h-4 ml-1" />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Right: Map & Form */}
                        <div className="lg:col-span-7 flex flex-col space-y-12">

                            {/* Map Box */}
                            <div className="w-full h-[400px] bg-steel rounded-2xl border border-border overflow-hidden relative group">
                                {/* Map iframe */}
                                <iframe
                                    src="https://maps.google.com/maps?q=46.952533,53.969613&z=16&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                ></iframe>

                                <div className="absolute bottom-4 left-4 bg-bg-card/90 backdrop-blur-sm border border-border p-4 rounded-xl shadow-lg pointer-events-none">
                                    <div className="font-bold text-text-primary mb-1">Главный офис</div>
                                    <div className="text-sm text-text-secondary">г. Кульсары, ул. Туймеш Сабетова, 180а</div>
                                </div>
                            </div>

                            {/* Embedded Form */}
                            <div className="bg-bg-primary border border-border rounded-2xl p-8 lg:p-12 shadow-sm">
                                <h2 className="font-heading text-3xl font-bold text-text-primary mb-2">Напишите нам</h2>
                                <p className="text-text-secondary mb-8">
                                    Оставьте свои контакты, и наш специалист свяжется с вами в течение рабочего дня.
                                </p>
                                <EstimateForm />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </main >
    );
}
