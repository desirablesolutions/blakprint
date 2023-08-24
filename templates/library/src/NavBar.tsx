import { default as Burger } from "./Burger";
import { default as CallToAction } from "./CallToAction";
import { default as Container } from "./Container";
import { default as Favicon } from "./Favicon";
import { default as LeftLinks } from "./LeftLinks";
import { default as RightLinks } from "./RightLinks";

import type { NavBarType } from "t4-types-ts";

export type NavBarPropsT = NavBarType 

export function defaultProps(): NavBarProps {
  return {
    container: 1,
  leftLinks: 1,
  favicon: 1,
  burger: 1,
  rightLinks: 1,
  cta: 1
  };
}

export default function NavBar({ navBar }: {navBar?: NavBarProps}) {
  return (
    <Container>
      <LeftLinks />
      <Favicon />
      <Burger />
      <RightLinks />
      <CallToAction />
    </Container>
  );
}
