"use client";

import Image from "next/image";

export default function TrustLogos() {
    const logos = [
        { name: "Maten Petroleum", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Maten_Petroleum.svg/200px-Maten_Petroleum.svg.png" }, // Mock URLs for now
        { name: "АО Кожан", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Maten_Petroleum.svg/200px-Maten_Petroleum.svg.png" },
        { name: "CCIP", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Maten_Petroleum.svg/200px-Maten_Petroleum.svg.png" },
        { name: "ТОО Трансойл Терминал", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Maten_Petroleum.svg/200px-Maten_Petroleum.svg.png" },
        { name: "ТОО ЕМГ Строй Сервис Атырау", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Maten_Petroleum.svg/200px-Maten_Petroleum.svg.png" },
    ];

    return (
        <section className="bg-bg-secondary border-y border-border py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
                <h3 className="text-center text-text-muted text-sm uppercase tracking-widest font-medium">
                    Нам доверяют
                </h3>
            </div>

            <div className="relative flex w-full overflow-hidden">
                <div className="flex animate-ticker white-space-nowrap">
                    {/* Double the list to create a seamless infinite scroll loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-12 sm:px-16 flex items-center justify-center group"
                        >
                            <div className="relative h-8 sm:h-10 w-24 sm:w-32 opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                                {/* 
                  Note: In a real scenario we'd use next/image with actual transparent PNGs/SVGs.
                  For the sake of the mock, we simulate it with text if images are unavailable,
                  but here we use a placeholder styling to represent the logos.
                */}
                                <span className="font-heading font-bold text-lg text-text-primary uppercase tracking-wide opacity-50 whitespace-nowrap group-hover:text-accent-blue group-hover:opacity-100 transition-colors">
                                    {logo.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
