import DetailSummary from "@components/DetailSummary";
import FeaturedBanner from "@components/FeaturedBanner";
import FeaturedDisplay from "@components/FeaturedDisplay";
import Hero from "@components/Hero";
import PricingTable from "@components/PricingTable";
import StatsRow from "@components/StatsRow";
import type { PageProps } from "@typings/index";
import { definePage } from "blakprint";
import { usePage } from "@hooks/usePage";

export default async function Home(): Promise<PageProps> {
  
  const Component = definePage<never, PageProps, Error>(() => (
    <>
    <Hero />
    <FeaturedDisplay />
    <FeaturedBanner />
    <StatsRow />
    <PricingTable />
    <DetailSummary />
  </>
  )

  );

  return Component.value();
}
