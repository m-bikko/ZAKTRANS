import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import EquipmentGrid from "@/components/sections/equipment/EquipmentGrid";

export const metadata: Metadata = {
    title: "Спецтехника и оборудование | ZAK Trans",
    description: "Собственный парк строительной и землеройной спецтехники для реализации масштабных проектов.",
};

const BLUR_PLACEHOLDER =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+" as const;

const equipment = [
    {
        id: 1,
        name: "TOYOTA Hilux",
        type: "Автомобиль",
        licensePlate: "827 АFO 06",
        purpose: "Служебный транспорт для доставки персонала и материалов на объект",
        image: "/equipment/hilux.webp",
        imageFull: "/equipment/hilux-full.webp",
        available: true,
    },
    {
        id: 2,
        name: "FOTON BJ1128VEJEA-F2",
        type: "Кран-манипулятор",
        licensePlate: "717 AGR06",
        purpose: "Погрузочно-разгрузочные работы, доставка крупногабаритных конструкций",
        image: "/equipment/foton.webp",
        imageFull: "/equipment/foton-full.webp",
        available: true,
    },
    {
        id: 3,
        name: "Caterpillar 428F2",
        type: "Экскаватор-погрузчик",
        licensePlate: "APD 058 E",
        purpose: "Копание траншей, погрузка сыпучих материалов, благоустройство территории",
        image: "/equipment/caterpillar.webp",
        imageFull: "/equipment/caterpillar-full.webp",
        available: true,
    },
];

export default async function EquipmentPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "equipment" });

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border bg-bg-primary">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <nav className="flex items-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">{t("breadcrumbHome")}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">{t("breadcrumbEquipment")}</span>
                    </nav>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        <div className="max-w-2xl">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6">
                                {t("titlePrefix")} <span className="text-accent-blue">{t("titleHighlight")}</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed mb-8">
                                {t("subtitle")}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-bg-elevated border border-border px-4 py-2 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                                    <span className="text-text-primary font-medium">{t("ownRepairBase")}</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-bg-elevated border border-border px-4 py-2 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                                    <span className="text-text-primary font-medium">{t("gpsMonitoring")}</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-bg-card border border-border p-8 rounded-2xl w-full lg:w-96 shrink-0 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-xl font-bold text-text-primary mb-4 relative z-10">{t("transportServices")}</h3>
                            <p className="text-text-secondary mb-6 relative z-10">
                                {t("transportDescription")}
                            </p>
                            <Link href="/contacts" className="relative z-10 text-accent-blue font-medium hover:underline inline-flex items-center">
                                {t("contactDispatcher")} <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <EquipmentGrid equipment={equipment} />
                </div>
            </section>

        </main>
    );
}
