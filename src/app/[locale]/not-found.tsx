import { Link } from "@/i18n/routing";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
    const t = useTranslations("NotFound");

    return (
        <main className="w-full h-screen flex items-center justify-center bg-bg-primary overflow-hidden relative">
            {/* Background Industrial Grid */}
            <div className="absolute inset-x-0 top-0 h-[50vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                <div className="font-mono text-8xl md:text-[150px] font-black text-accent-blue leading-none tracking-tighter mb-4 opacity-90 drop-shadow-2xl">
                    404
                </div>

                <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6 uppercase tracking-wider">
                    {t("title", { fallback: "Объект не найден" })}
                </h1>

                <p className="text-lg text-text-secondary mb-12">
                    {t("description", { fallback: "Запрашиваемая страница перемещена или удалена. Проверьте правильность адреса." })}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-text-primary text-bg-primary px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        <span>{t("home", { fallback: "На главную" })}</span>
                    </Link>

                    <Link
                        href="/contacts"
                        className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-transparent border border-border text-text-primary px-8 py-4 rounded-full font-medium hover:border-accent-blue/50 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        <span>{t("contacts", { fallback: "Контакты" })}</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
