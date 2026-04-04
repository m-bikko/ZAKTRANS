"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

const BLUR_PLACEHOLDER =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+";

interface EquipmentItem {
    id: number;
    name: string;
    type: string;
    purpose: string;
    image: string;
    imageFull: string;
    available: boolean;
    licensePlate?: string;
}

interface EquipmentGridProps {
    equipment: EquipmentItem[];
}

const EquipmentGrid = ({ equipment }: EquipmentGridProps): React.JSX.Element => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedName, setSelectedName] = useState<string>("");
    const t = useTranslations("equipment");

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipment.map((item, index) => (
                    <div key={item.id} className="bg-bg-elevated border border-border rounded-xl overflow-hidden group">
                        {/* Photo */}
                        <div
                            className="relative aspect-[4/3] bg-steel cursor-pointer"
                            onClick={() => {
                                setSelectedImage(item.imageFull);
                                setSelectedName(item.name);
                            }}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                quality={75}
                                priority={index === 0}
                                placeholder="blur"
                                blurDataURL={BLUR_PLACEHOLDER}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                {item.available ? (
                                    <span className="px-3 py-1 bg-green-500/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg">
                                        {t("readyStatus")}
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 bg-zinc-800/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-lg border border-zinc-700">
                                        {t("onSiteStatus")}
                                    </span>
                                )}
                            </div>
                            {/* Preview hint */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-bg-primary/90 border border-border text-xs font-bold px-3 py-1.5 rounded-full text-text-primary shadow-sm">
                                    {t("previewImage")}
                                </span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <div className="text-sm font-medium text-text-muted mb-2">{item.type}</div>
                            <h3 className="font-heading text-2xl font-bold text-text-primary mb-1">
                                {item.name}
                            </h3>
                            {item.licensePlate && (
                                <div className="text-sm font-mono text-accent-blue mb-3">
                                    {t("licensePlatePrefix")} {item.licensePlate}
                                </div>
                            )}
                            <p className="text-text-secondary leading-relaxed">
                                {item.purpose}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Lightbox */}
            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="max-w-5xl p-0 bg-transparent border-none shadow-none overflow-hidden h-[85vh]">
                    <DialogTitle className="sr-only">{selectedName}</DialogTitle>
                    {selectedImage && (
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage}
                                alt={selectedName}
                                fill
                                sizes="100vw"
                                quality={90}
                                placeholder="blur"
                                blurDataURL={BLUR_PLACEHOLDER}
                                className="object-contain"
                            />
                            <a
                                href={selectedImage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 flex items-center gap-2 bg-bg-primary/90 border border-border px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:text-accent-blue transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                {t("openInNewTab")}
                            </a>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EquipmentGrid;
