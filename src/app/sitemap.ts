import { MetadataRoute } from "next";

const locales = ["ru", "kz", "en"] as const;
const BASE_URL = "https://zaktrans.kz";

const routes = [
    "",
    "/about",
    "/services",
    "/services/plumbing",
    "/services/welding",
    "/services/turnkey-construction",
    "/services/roads",
    "/services/rvs",
    "/services/pipelines",
    "/projects",
    "/projects/tengiz-road-construction-2024",
    "/projects/atyrau-rvs-50-5000",
    "/projects/kulsary-pipeline-repair",
    "/projects/tengiz-welding-metal-structures",
    "/projects/atyrau-camp-plumbing",
    "/hse",
    "/equipment",
    "/team",
    "/partners",
    "/reviews",
    "/tender",
    "/contacts",
    "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const route of routes) {
        const alternates: Record<string, string> = {};
        for (const locale of locales) {
            const langKey = locale === "kz" ? "kk" : locale;
            alternates[langKey] = `${BASE_URL}/${locale}${route}`;
        }
        alternates["x-default"] = `${BASE_URL}/ru${route}`;

        entries.push({
            url: `${BASE_URL}/ru${route}`,
            lastModified: new Date(),
            changeFrequency: route === "" ? "weekly" : "monthly",
            priority: route === "" ? 1.0 : route.includes("/services/") ? 0.9 : 0.7,
            alternates: { languages: alternates },
        });
    }

    return entries;
}
