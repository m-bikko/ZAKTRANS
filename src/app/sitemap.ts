import { MetadataRoute } from "next";

const locales = ["ru", "kz", "en"];
const BASE_URL = "https://zaktrans.kz"; // Assuming this is the production URL

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
    // Project slugs would ideally come from DB/CMS, but for this static version we use constants:
    "/projects/road-kulsary-tengiz",
    "/projects/rvs-20000",
    "/projects/pipeline-15km",
    "/projects/pnhz-construction",
    "/projects/welding-dns",
    "/projects/plumbing-pvp",
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

    for (const locale of locales) {
        for (const route of routes) {
            entries.push({
                url: `${BASE_URL}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === "" ? "weekly" : "monthly",
                priority: route === "" ? 1.0 : route.includes("/services/") ? 0.9 : 0.7,
            });
        }
    }

    // Also push non-localized root url for standard parsers
    entries.push({
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
    });

    return entries;
}
