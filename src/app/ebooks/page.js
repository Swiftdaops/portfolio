import EbooksHero from "../components/ebooks/ebookshero";
import EbooksValueProp from "../components/ebooks/ebookssolutions";
import EbooksPricing from "../components/ebooks/ebookspricing";
import EbooksWhoItsFor from "../components/ebooks/ebookswho";
import BuyNowEbooks from "../components/BuyNowEbooks.client";

export const metadata = {
  title: 'Ebooks — Showcase',
  description: 'Ebooks project showcase: hero, features, who it’s for, and pricing.',
}

export default function Page2() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Server-side fallback anchor (always visible) — jumps to #pricing */}
      <a
        href="#pricing"
        aria-label="Jump to pricing"
        className="fixed right-6 bottom-32 z-60 inline-flex items-center gap-3 rounded-full bg-rose-500 text-white px-4 py-3 shadow-2xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-all lg:hidden"
      >
        <span className="text-sm font-semibold">Pricing</span>
      </a>
      <BuyNowEbooks />
      <EbooksHero />
      <EbooksValueProp />
      <EbooksWhoItsFor />
      <EbooksPricing />
    </main>
  );
}
