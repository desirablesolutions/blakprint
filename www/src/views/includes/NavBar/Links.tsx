import { LinkProps, NavBarProps } from "@typings/index";

export function Link(link: LinkProps) {
  return (
    <li className="group relative">
      <a
        className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
        href={link.url}
      >
        {link.name}
      </a>
    </li>
  );
}

export function Container({ children }: any) {
  return <ul className="hidden lg:flex lg:w-auto lg:space-x-12">{children}</ul>;
}

export default function NavBarLinks({
  links,
}: {
  links: NavBarProps["links"];
}) {
  return (
    <Container>
      {Array.from(links).map((link: LinkProps) => (
        <Link {...link} key={Date.now()} />
      ))}
      <Link name="Get Started" url="/" />
    </Container>
  );
}
