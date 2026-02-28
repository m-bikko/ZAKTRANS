import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function StickyBar() {
    const t = useTranslations("cta");
    const company = useTranslations("company");

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-bg-primary border-b border-border flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Phone className="w-4 h-4" />
                <a href={`tel:${company("phone").replace(/\s/g, '')}`} className="hidden sm:inline-block hover:text-accent-blue transition-colors">
                    {company("phone")}
                </a>
            </div>
            <div className="flex items-center space-x-4">
                <a
                    href="https://wa.me/77001010660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-success hover:text-green-400 transition-colors"
                >
                    <span className="text-sm font-medium">{t("whatsapp")}</span>
                </a>
                <button className="bg-accent-blue hover:bg-accent-blue-hover text-text-primary text-xs sm:text-sm px-4 h-7 rounded-full transition-all shadow-btn-glow">
                    {t("estimate")}
                </button>
            </div>
        </div>
    );
}
