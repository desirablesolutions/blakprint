import { NavBarProps } from "@typings/index";
import { defineInclude, Weak } from "blakprint";
import { default as Burger } from "./Burger";
import { default as CallToAction } from "./CallToAction";
import { default as Container } from "./Container";
import { default as Favicon } from "./Favicon";
import { default as Links } from "./Links";

export function defaultProps(): NavBarProps {
  return {
    burger: {
      isVisible: true,
    },
    links: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Documentation",
      },
      {
        name: "About",
      },
      {
        name: "Support",
      },
    ],
    cta: {
      url: "/",
      name: "Get Started",
    },
    favicon: {
      image: {
        src: "https://github.com/desirablesolutions/blakprint/raw/main/docs/logo.png?raw=true"
      },
      url: ".",
    },
  };
}

export default function NavBar(props: Weak<NavBarProps>) {

  const { links, favicon, burger, cta } = props as NavBarProps;

  const Component = defineInclude<NavBarProps, React.ReactElement, Error>(
    () => (
      <Container>
        <Favicon favicon={defaultProps().favicon} />
        <Burger burger={defaultProps().burger} />
        <Links links={defaultProps().links} />
        <CallToAction cta={defaultProps().cta}/>
      </Container>
    )
  );

  return Component.value() as React.ReactElement;
}
