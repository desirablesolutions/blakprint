import { NavBarProps } from "@typings/index";
import { defineInclude } from "blakprint";
import { default as Burger } from "./Burger";
import { default as CallToAction } from "./CallToAction";
import { default as Container } from "./Container";
import { default as Favicon } from "./Favicon";
import { default as Links } from "./Links";


export function defaultProps(): NavBarProps {

  return {
    links: [
      {
        name: "Home",
      }
    ],
    favicon: {
      image: {

      }
    }
  }
}

export default function NavBar(props: NavBarProps){
  
  const { links } = props;

  const Component = defineInclude<NavBarProps, React.ReactElement, Error>(
    () => (
      <Container>
        <Favicon />
        <Burger />
        <Links links={!links ? defaultProps().links : links} />
        <CallToAction />
      </Container>
    )
  );

  return Component.value() as React.ReactElement;

}
