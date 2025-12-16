import React from "react";
import Head from "next/head";
import SteezeShowcaseClient from "./Steezeshowcase.client";

export default function SteezeShowcaseSection({
    title = "See the Steeze Store in Action",
    description = "A visual walkthrough of the core experience—from the landing page to product exploration and WhatsApp-based checkout.",
    url = "https://example.com/steeze-demo",
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: title,
        description,
        thumbnailUrl: "https://res.cloudinary.com/dnitzkowt/image/upload/w_800,q_auto,f_auto/v1765508839/WhatsApp_Image_2025-12-12_at_4.04.07_AM_1_qtxnzv.jpg",
        uploadDate: new Date().toISOString(),
        contentUrl: "https://res.cloudinary.com/dnitzkowt/video/upload/v1765508791/WhatsApp_Video_2025-12-12_at_4.03.36_AM_kvahna.mp4",
        embedUrl: "https://res.cloudinary.com/dnitzkowt/video/upload/v1765508791/WhatsApp_Video_2025-12-12_at_4.03.36_AM_kvahna.mp4",
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:image" content="https://res.cloudinary.com/dnitzkowt/image/upload/w_1200,q_auto,f_auto/v1765508839/WhatsApp_Image_2025-12-12_at_4.04.07_AM_1_qtxnzv.jpg" />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://res.cloudinary.com/dnitzkowt/image/upload/w_1200,q_auto,f_auto/v1765508839/WhatsApp_Image_2025-12-12_at_4.04.07_AM_1_qtxnzv.jpg" />
                {/* Basic JSON-LD for the demo video */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            </Head>

            <SteezeShowcaseClient title={title} description={description} />
        </>
    );
}
