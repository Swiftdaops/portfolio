import EbooksHero from "../components/ebooks/ebookshero";
import EbooksValueProp from "../components/ebooks/ebookssolutions";
import EbooksPricing from "../components/ebooks/ebookspricing";
import EbooksWhoItsFor from "../components/ebooks/ebookswho";

export const metadata = {
  title: 'Ebooks — Showcase',
  description: 'Ebooks project showcase: hero, features, who it’s for, and pricing.',
}

export default function Page2() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <EbooksHero />
      <EbooksValueProp />
      <EbooksWhoItsFor />
      <EbooksPricing />
    </main>
  );
}
