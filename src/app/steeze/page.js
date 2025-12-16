export const metadata = {
  title: 'Page 1',
}

import SteezeHero from "../components/SteezeHero";
import SteezeProblemSection from "../components/Steezeproblems";
import SteezeSolutionSection from "../components/Steezesolutions.js";
import SteezeShowcaseSection from "../components/Steezeshowcase";
import FeatureDeepDive from "../components/Steezedeepdive";
import ThreeClickPurchaseFlow from "../components/Steezepurchaseflow.js";
import SecurityArchitecture from "../components/Securityarchitecture";
import SteezeOutcome from "../components/Steezeoutcome";
import SteezeStoreCTA from "../components/Steezecta";

export default function Page1() {
  return (
    <main>
      <SteezeHero />
      <SteezeProblemSection />
      <SteezeSolutionSection />
      <SteezeShowcaseSection />
      <FeatureDeepDive />
      <ThreeClickPurchaseFlow />
        <SecurityArchitecture />
      <SteezeOutcome />
        <SteezeStoreCTA />
      {/* About section removed per request */}
    </main>
  );
}
