import { Hero } from "@/views/components/Hero";
import { Container } from "@/views/includes/Container";
import { defineAsset } from "blakprint"


const page = defineAsset(0)

export default function Home() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}
