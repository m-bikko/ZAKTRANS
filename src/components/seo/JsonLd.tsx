interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbListProps {
    items: BreadcrumbItem[];
}

export const BreadcrumbListJsonLd = ({ items }: BreadcrumbListProps): React.JSX.Element => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": item.name,
            "item": item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

interface ServiceJsonLdProps {
    name: string;
    description: string;
    url: string;
}

export const ServiceJsonLd = ({ name, description, url }: ServiceJsonLdProps): React.JSX.Element => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        "name": name,
        "description": description,
        "provider": { "@id": "https://zaktrans.kz/#organization" },
        "areaServed": [
            { "@type": "Place", "name": "Атырауская область" },
            { "@type": "Place", "name": "Казахстан" },
        ],
        "serviceType": "Строительно-монтажные работы",
        "url": url,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
