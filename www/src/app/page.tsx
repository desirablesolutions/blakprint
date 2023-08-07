import { Hero } from "@/views/components/Hero";
import { Container } from "@/views/includes/Container";
import FeaturedDisplay from "@/views/components/FeaturedDisplay";
import DetailSummary from "@/views/components/DetailSummary";

export default function Home() {
  return (
    <>
    <Hero />
    <FeaturedDisplay/>
    <DetailSummary/>
    </>
  );
}
