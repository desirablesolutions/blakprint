import { defineInclude } from "blakprint";

export type ContainerProps = {
  type: "application" | "custom";
  children: any;
};

export default function Container(props: ContainerProps) {

  const { children } = props;

  const Component = defineInclude(
    <main className="flex flex-col items-center justify-between min-h-screen p-24 overflow-x-hidden bg-white bg-opacity-25">
      {children}
    </main>
  );

  return Component.value();
}


export const variants = {
  application: ({ children }: any) => (
    <html lang="en">
      <body className={"web_font.className"}>{children}</body>
    </html>
  ),
};