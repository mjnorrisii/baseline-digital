import { FC } from 'react';

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

const BreadcrumbSchema: FC<BreadcrumbSchemaProps> = ({ items }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://www.baselinedigital.dk${item.item}`
        }))
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schema)}
        </script>
    );
};

export default BreadcrumbSchema;
