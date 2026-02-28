"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactMap() {
    const c = useTranslations("company");

    return (
        <section className="bg-bg-elevated relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Contact Info Block */}
                <div className="p-12 md:p-16 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
                    <div className="max-w-md mx-auto lg:mx-0 w-full">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-10">
                            Наши контакты
                        </h2>

                        <div className="space-y-8 mb-12">
                            {/* Address 1 */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-accent-blue" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-text-muted uppercase mb-1 tracking-wider">Центральный офис</h4>
                                    <p className="text-text-primary text-lg">{c("addressAtyrau")}</p>
                                </div>
                            </div>

                            {/* Address 2 */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-accent-blue" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-text-muted uppercase mb-1 tracking-wider">Филиал</h4>
                                    <p className="text-text-primary text-lg">{c("addressKulsary")}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-accent-blue" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-text-muted uppercase mb-1 tracking-wider">Телефон</h4>
                                    <a href={`tel:${c("phone").replace(/\s/g, '')}`} className="text-text-primary text-lg font-bold hover:text-accent-blue transition-colors">
                                        {c("phone")}
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-bg-card border border-border rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-accent-blue" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-text-muted uppercase mb-1 tracking-wider">Email</h4>
                                    <a href={`mailto:${c("email")}`} className="text-text-primary text-lg hover:text-accent-blue transition-colors">
                                        {c("email")}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Map iframe */}
                <div className="h-[400px] lg:h-auto min-h-[500px] w-full bg-border order-1 lg:order-2">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3251e1ba1f1bcfb4c27f9194ecdc8c2a3e0cecf8&amp;source=constructor"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        title="Офис ZAK Trans"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}
