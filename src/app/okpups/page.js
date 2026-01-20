export const metadata = {
  title: 'OK Pups',
};

import VetCommerceHero from '../../components/VetCommerceHero';
import WhatYouCanSell from '../../components/WhatYouCanSell';
import HowItWorks from '../../components/HowItWorks';
import CheckoutUpgradesSection from '../../components/CheckoutUpgradesSection';

const WA_NUMBER = '14376654926';
const WA_MESSAGE = 'Hi, my name is [your name]. I would like a website for my business.';
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function Page() {
  return (
    <>
      <VetCommerceHero ctaHref={WA_HREF} demoHref={'https://okpups.vercel.app/'} />
      <WhatYouCanSell />
      <HowItWorks />
      <CheckoutUpgradesSection ctaHref={WA_HREF} />
    </>
  );
}
