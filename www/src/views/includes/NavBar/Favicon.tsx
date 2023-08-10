import { defineComponent } from "blakprint";

import type { NavBarProps } from "@typings/index";

export default function NavBarFavicon({
  favicon: { url, image },
}: {
  favicon: NavBarProps["favicon"];
}) {
  const Component = defineComponent<NavBarProps, React.ReactElement, Error>(
    () => (
      <a
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block"
        href={url}
      >
        <img
          className="h-16"
          src={image.src}
          alt={image.alt}
          width="auto"
        />
      </a>
    )
  );

  return Component.value() as React.ReactElement;
}
