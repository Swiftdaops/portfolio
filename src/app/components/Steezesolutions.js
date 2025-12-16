import React from "react";
import Head from "next/head";
import SteezeSolutionSectionClient from "./Steezesolutions.client";

export default function SteezeSolutionSection({
  title = "A Boutique-Style Shopping Experience, Engineered for Conversions",
  description = "The Steeze Store blends premium UI, ultra-fast performance, and a WhatsApp-first checkout model.",
  url = "https://example.com/steeze-solutions",
  image = "https://res.cloudinary.com/dnitzkowt/image/upload/w_1200,q_auto,f_auto/v1765508839/WhatsApp_Image_2025-12-12_at_4.04.07_AM_1_qtxnzv.jpg",
} = {}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <section aria-labelledby="steeze-solution-heading" className="w-full py-10 md:py-16 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <SteezeSolutionSectionClient />
        </div>
      </section>
    </>
  );
}
