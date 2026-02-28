import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
    return (
        <Link href={href} className="group block">
            <div className="bg-bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:border-accent-blue/40 hover:-translate-y-1 hover:shadow-card-hover h-full flex flex-col">

                <div className="bg-bg-elevated w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue/10 transition-colors">
                    <Icon className="w-7 h-7 text-accent-blue" />
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3 text-text-primary">
                    {title}
                </h3>

                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {description}
                </p>

                <div className="flex items-center text-accent-blue text-sm font-medium mt-auto w-fit">
                    <span className="relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Подробнее</span>
                        <span className="inline-block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">Подробнее</span>
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

            </div>
        </Link>
    );
}
