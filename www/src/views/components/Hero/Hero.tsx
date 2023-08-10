import type { HeroProps } from "@typings/index";
import { defineComponent } from "blakprint";
import { default as Banner } from "./Banner";
import { default as Container } from "./Container";
import { default as Header } from "./Header";

export function defaultProps(): HeroProps {
  return {
    banner: {
      image: {
        src: "https://github.com/desirablesolutions/blakprint/raw/main/docs/logo.png?raw=true"
      }
    },
  header: {
    title: "Blakprint",
    description: `
    our workbox of redefinable, composable, model, view, and controller 
    meta-modules for architecting software.
    `,
  }
  };
}

export default function Hero(props: HeroProps): React.ReactNode {

  const { banner, header } = props;

  const Component = defineComponent<HeroProps, React.ReactNode, Error>(() => (
    <Container>
      <Banner banner={defaultProps().banner} />
      <Header header={defaultProps().header}/>
    </Container>
  ));

  return Component.value() as React.ReactNode;
}
