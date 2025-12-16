// SteezeHero: server-rendered component with structured data for SEO
import SteezeHeroClient from "./SteezeHero.client";

export default function SteezeHero({
    title = "The Steeze Store — Smooth, Elegant E-Commerce for Your Customers",
    subtitle =
        "The Steeze Store delivers a fast, elegant shopping experience built with modern web technologies—focused on smooth interactions, mobile performance, and instant WhatsApp checkout so your customers can buy with confidence.",
    demoUrl = "https://thesteezestore.netlify.app/",
    siteUrl = "https://thesteezestore.netlify.app/",
    brandName = "Steeze Store",
    tools = [
        "React",
        "Next.js",
        "Tailwind CSS",
        "ShadCN UI",
        "SwiperJS",
        "TypeScript",
        "Vite",
        "Netlify",
    ],
} = {}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: title,
        description: subtitle,
        url: demoUrl,
        brand: {
            "@type": "Organization",
            name: brandName,
            url: siteUrl,
        },
        keywords: tools.join(", "),
    };

    const siteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: brandName,
        url: siteUrl,
    };

    return (
        <section
            aria-labelledby="steeze-hero-heading"
            className="w-full py-24 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
        >
            <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* LEFT CONTENT: client-only animation component */}
                <SteezeHeroClient
                    title={title}
                    subtitle={subtitle}
                    demoUrl={demoUrl}
                    tools={tools}
                />
            </div>

            {/* Structured data for SEO (server-rendered) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
            />
        </section>
    );
}
