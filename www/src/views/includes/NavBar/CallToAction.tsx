import type { NavBarProps } from "@typings/index";


export function PrimaryAction(url: any, name: string ) {
  return (
    <a
    className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden"
    href="#"
  >
    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
    <span className="relative">Create an account</span>
  </a>
  )
}

export function SecdonaryAction(url: any, name: string) {
  return (
    <a
    className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
    href={url}
  >
    Sign In
  </a>

  );
}

export function Container({ children }: any) {
  return (
    <div className="hidden lg:block ml-auto">
      <div className="flex items-center">{children}</div>
    </div>
  );
}



export default function NavBarCTA({
  cta: { url },
}: {
  cta: NavBarProps["cta"];
}) {

  return (
   <Container>
     <PrimaryAction url={url} />
     <SecdonaryAction url={url} />
   </Container>
  );
}
