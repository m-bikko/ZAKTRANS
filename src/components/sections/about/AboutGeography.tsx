"use client";

import { MapPin, Navigation, Truck } from "lucide-react";

export default function AboutGeography() {
    const regions = [
        {
            name: "Атырау и Атырауская область",
            desc: "Центральный офис и основная база. Реализация крупнейших проектов по строительству трубопроводов и монтажу инженерных систем.",
            icon: Navigation,
            highlight: true
        },
        {
            name: "Месторождение Тенгиз (ТШО)",
            desc: "Долгосрочные контракты на строительно-монтажные работы, включая сварку, монтаж ПМЛ и земляные работы в сложных условиях.",
            icon: MapPin,
            highlight: true
        },
        {
            name: "Кульсары и Жылыойский район",
            desc: "Наличие филиала и оперативной мобильной бригады для быстрого реагирования на запросы заказчиков.",
            icon: Truck,
            highlight: false
        }
    ];

    return (
        <section className="bg-bg-primary py-20 lg:py-32 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        География работ
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Мы обладаем необходимой базой и ресурсами для быстрой мобилизации на ключевые нефтегазовые объекты Западного Казахстана.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Decorative Map Placeholder (Since SVG map needs precise coordinates, using an abstract representation or placeholder for Next Image) */}
                    <div className="relative aspect-square md:aspect-video lg:aspect-square bg-Steel/30 rounded-3xl border border-border p-8 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Kazakhstan_location_map.svg/1024px-Kazakhstan_location_map.svg.png')] bg-no-repeat bg-contain bg-center opacity-10 filter sepia brightness-50 contrast-150" />

                        {/* Abstract animated pings for regions */}
                        <div className="absolute top-[40%] left-[30%]">
                            <span className="flex h-4 w-4 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-blue/50 border border-accent-blue"></span>
                            </span>
                            <div className="absolute top-6 -left-4 text-xs font-bold text-accent-blue tracking-widest uppercase bg-bg-primary px-2 py-1 rounded shadow-lg border border-border">Атырау</div>
                        </div>

                        <div className="absolute top-[45%] left-[38%]">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-50 animation-delay-500"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-blue/50 border border-accent-blue"></span>
                            </span>
                            <div className="absolute top-5 -left-2 text-xs font-bold text-text-primary tracking-wider bg-bg-primary px-2 py-1 rounded shadow-lg border border-border">Тенгиз</div>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-transparent to-transparent z-10" />
                    </div>

                    {/* Region List */}
                    <div className="space-y-8">
                        {regions.map((region, i) => {
                            const Icon = region.icon;
                            return (
                                <div key={i} className={`flex items-start space-x-6 p-6 rounded-2xl transition-colors ${region.highlight ? 'bg-bg-elevated border border-border' : 'hover:bg-bg-elevated'}`}>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${region.highlight ? 'bg-accent-blue/10' : 'bg-steel color-text-muted'}`}>
                                        <Icon className={`w-6 h-6 ${region.highlight ? 'text-accent-blue' : 'text-text-muted'}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-text-primary mb-2">{region.name}</h3>
                                        <p className="text-text-secondary leading-relaxed">{region.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
