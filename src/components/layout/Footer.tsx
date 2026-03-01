import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
    const t = useTranslations("footer");
    const nav = useTranslations("nav");
    const coy = useTranslations("company");
    const stats = useTranslations("stats");

    return (
        <footer className="bg-bg-primary border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1 */}
                    <div className="flex flex-col space-y-6">
                        <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity">
                            <Image
                                src="/bw logo.svg"
                                alt="ZAK Trans"
                                width={180}
                                height={45}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            {coy("tagline")}
                        </p>
                        <div className="flex space-x-3">
                            <span className="px-3 py-1 bg-steel text-text-primary rounded text-xs uppercase font-medium">{stats("license")}</span>
                            <span className="px-3 py-1 bg-steel text-text-primary rounded text-xs uppercase font-medium">{stats("iso")}</span>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-2">{nav("services")}</h4>
                        <Link href="/services/plumbing" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">Сантехнические системы</Link>
                        <Link href="/services/welding" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">Сварочные работы</Link>
                        <Link href="/services/turnkey-construction" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">Строительство «под ключ»</Link>
                        <Link href="/services/roads" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">Строительство дорог</Link>
                        <Link href="/services/rvs" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">Строительство РВС</Link>
                        <Link href="/services/pipelines" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">Строительство нефтепроводов</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-2">{coy("name")}</h4>
                        <Link href="/about" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">{nav("about")}</Link>
                        <Link href="/projects" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">{nav("projects")}</Link>
                        <Link href="/hse" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">{nav("hse")}</Link>
                        <Link href="/equipment" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">{nav("equipment")}</Link>
                        <Link href="/team" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">{nav("team")}</Link>
                        <Link href="/partners" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">{nav("partners")}</Link>
                        <Link href="/reviews" className="text-sm text-text-secondary hover:text-accent-blue transition-colors">{nav("reviews")}</Link>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-2">{nav("contacts")}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{coy("addressMain")}</p>
                        <a href={`tel:${coy("phone").replace(/\s/g, '')}`} className="text-sm text-accent-blue hover:text-accent-blue-hover font-medium pt-2 block">
                            {coy("phone")}
                        </a>
                        <a href={`mailto:${coy("email")}`} className="text-sm text-text-secondary hover:text-text-primary block">
                            {coy("email")}
                        </a>
                    </div>

                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted space-y-4 md:space-y-0">
                    <p>© {new Date().getFullYear()} ZAK Trans. БИН: {coy("bin")} · {t("rights")}</p>
                    <Link href="/privacy" className="hover:text-text-secondary transition-colors">{t("privacy")}</Link>
                </div>
            </div>
        </footer>
    );
}
