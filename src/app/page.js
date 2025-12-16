import Hero from "./components/Hero";
import BusinessAppsForSale from "./components/businessappsforsale";

export const metadata = {
  title:
    "Obi Tobechukwu – Full-Stack Web Developer | USA, Canada & Australia",
  description:
    "Obi Tobechukwu is a full-stack web developer building scalable, secure, SEO-ready web apps for businesses in the USA, Canada, and Australia using React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Full Stack Web Developer USA",
    "Full Stack Web Developer Canada",
    "Full Stack Web Developer Australia",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "WhatsApp API Integration",
    "SEO Web Development",
    "Hire Web Developer",
  ],
  authors: [{ name: "Obi Tobechukwu" }],
  creator: "Obi Tobechukwu",
  alternates: {
    canonical: "https://your-domain.com",
  },
  openGraph: {
    title: "Obi Tobechukwu – Full-Stack Web Developer",
    description:
      "I design beautiful, scalable and secure web apps for businesses in the USA, Canada, and Australia.",
    url: "https://your-domain.com",
    siteName: "Obi Tobechukwu Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Hero />
      <BusinessAppsForSale />
    </main>
  );
}
