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
            "url": "https://www.baselinedigital.dk"
        },
        "url": "https://www.baselinedigital.dk",
        "image": "https://www.baselinedigital.dk/images/michael-norris.webp",
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
