import React from "react";
import Head from "next/head";
import SteezeProblemSectionClient from "./Steezeproblems.client";

export default function SteezeProblemSection({
  title = "Steeze Store — Reduce Abandoned Carts with a 3-Click WhatsApp Checkout",
  description = "Fashion brands lose customers at checkout. The Steeze Store replaces long forms with a chat-first WhatsApp checkout that prioritizes speed, simplicity, and personal conversation.",
  url = "https://your-site.com/steeze-store",
  image = "https://your-site.com/og-image.png",
}) {
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

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section
        aria-labelledby="steeze-problem-heading"
        className="w-full py-10 md:py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-t border-[hsl(var(--border))]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
          {/* Render client-only animated content here */}
          <SteezeProblemSectionClient
            title={title}
            description={description}
          />
        </div>
      </section>
    </>
  );
}
