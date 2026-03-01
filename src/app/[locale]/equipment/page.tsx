import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Спецтехника и оборудование | ZAK Trans",
    description: "Собственный парк строительной и землеройной спецтехники для реализации масштабных проектов.",
};

const equipment = [
    {
        id: 1,
        name: "Caterpillar D6",
        type: "Бульдозер",
        purpose: "Земляные работы, снятие грунта, формирование насыпей",
        image: "https://images.unsplash.com/photo-1541888086925-0c13dcced9f5?q=80&w=2670&auto=format&fit=crop",
        available: true,
    },
    {
        id: 2,
        name: "Komatsu PC300",
        type: "Экскаватор гусеничный",
        purpose: "Разработка траншей под трубопроводы, рытье котлованов",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop",
        available: true,
    },
    {
        id: 3,
        name: "XCMG GR215A",
        type: "Автогрейдер",
        purpose: "Планировка профиля дорог, распределение инертных материалов",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
        available: true,
    },
    {
        id: 4,
        name: "Shacman F3000",
        type: "Самосвал 25т",
        purpose: "Перевозка ПГС, щебня, песка и вывоз грунта",
        image: "https://images.unsplash.com/photo-1541888086925-0c13dcced9f5?q=80&w=2670&auto=format&fit=crop",
        available: true,
    },
    {
        id: 5,
        name: "Bomag BW 216",
        type: "Грунтовый каток 16т",
        purpose: "Послойное уплотнение грунтовых и щебеночных оснований",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop",
        available: false, // На объекте
    },
    {
        id: 6,
        name: "САГ Denyo",
        type: "Сварочный агрегат",
        purpose: "Автономное обеспечение сварочных постов при сварке труб",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
        available: true,
    }
];

export default function EquipmentPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    setRequestLocale(locale);

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <nav className="flex items-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">Техника</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        <div className="max-w-2xl">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6">
                                Собственная <span className="text-accent-blue">спецтехника</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed mb-8">
                                Наличие собственного современного парка землеройной, строительной и подъемной техники позволяет нам не зависеть от субподрядчиков и гарантировать соблюдение сроков мобилизации.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-bg-elevated border border-border px-4 py-2 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                                    <span className="text-text-primary font-medium">Собственная рембаза</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-bg-elevated border border-border px-4 py-2 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                                    <span className="text-text-primary font-medium">GPS-мониторинг</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-bg-card border border-border p-8 rounded-2xl w-full lg:w-96 shrink-0 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-xl font-bold text-text-primary mb-4 relative z-10">Транспортные услуги</h3>
                            <p className="text-text-secondary mb-6 relative z-10">
                                Помимо обеспечения собственных СМР, мы предоставляем спецтехнику в аренду крупным недропользователям.
                            </p>
                            <Link href="/contacts" className="relative z-10 text-accent-blue font-medium hover:underline inline-flex items-center">
                                Связаться с диспетчером <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipment.map((item) => (
                            <div key={item.id} className="bg-bg-elevated border border-border rounded-xl overflow-hidden group">
                                {/* Photo */}
                                <div className="relative aspect-[4/3] bg-steel">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        {item.available ? (
                                            <span className="px-3 py-1 bg-green-500/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
                                                Готов к работе
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 bg-zinc-800/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg border border-zinc-700">
                                                На объекте
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="p-6">
                                    <div className="text-sm font-medium text-text-muted mb-2">{item.type}</div>
                                    <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
                                        {item.name}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {item.purpose}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}
