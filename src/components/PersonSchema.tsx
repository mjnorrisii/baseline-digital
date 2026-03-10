import { FC } from 'react';

const PersonSchema: FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Michael Norris",
        "jobTitle": "Founder & Operations Architect",
        "organization": {
            "@type": "Organization",
            "name": "Baseline Digital",
            "url": "https://baselinedigital.io"
        },
        "url": "https://baselinedigital.io",
        "image": "https://baselinedigital.io/images/michael-norris.webp",
        "description": "Michael Norris is the founder of Baseline Digital, specializing in industrial-grade revenue and operations automation for service businesses.",
        "sameAs": []
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schema)}
        </script>
    );
};

export default PersonSchema;
