import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = "https://zaktrans.kz"; // Assuming this is the production URL

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/private/",
                "/api/",
                "*/admin/*"
            ],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
