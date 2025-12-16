"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const apps = [
  {
    name: "The Steeze Store",
    slug: "/steeze",
    price: "$2,500",
    delivery: "30 days",
    summary:
      "A fast, stylish e-commerce system with WhatsApp checkout, admin dashboard, and mobile-first UX.",
    highlights: [
      "WhatsApp order flow",
      "Admin product & order management",
      "Modern UI with dark mode",
    ],
  },
  {
    name: "Ebooks Platform",
    slug: "/ebooks",
    price: "$1,800",
    delivery: "30 days",
    summary:
      "A theme-aware ebook storefront with a 3-click WhatsApp purchase flow for authors and digital sellers.",
    highlights: [
      "Author-friendly setup",
      "Instant WhatsApp checkout",
        "Modern UI",
    ],
  },
];

export default function BusinessAppsForSale() {
  return (
    <section
      aria-labelledby="business-apps-heading"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <header className="mb-10 max-w-2xl">
        <h2
          id="business-apps-heading"
          className="text-3xl font-semibold tracking-tight"
        >
          Business Apps Available for Purchase
        </h2>
        <p className="mt-3 text-muted-foreground">
          Production-ready digital products built for speed, conversions, and
          long-term scalability.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {apps.map((app) => (
          <Card
            key={app.name}
            className="relative overflow-hidden border bg-background/60 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-xl">{app.name}</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {app.summary}
              </p>

              <ul className="space-y-2 text-sm">
                {app.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4">
                <span className="text-sm text-muted-foreground">
                  Average delivery:{" "}
                  <strong className="text-foreground">
                    {app.delivery}
                  </strong>
                </span>

                <Link href={app.slug}>
                  <Button
                    className="
                      relative overflow-hidden
                      bg-primary text-primary-foreground
                      after:absolute after:inset-0
                      after:bg-white/20 after:opacity-0
                      hover:after:opacity-100
                      after:transition
                    "
                  >
                    More information
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
