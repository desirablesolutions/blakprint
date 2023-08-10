import type { HeroProps } from "@typings/index";
import ThinArrowSVG from "@components/ThinArrowSVG";
import PrimativeArrowSVG from "@components/PrimativeArrowSVG";

export function HeroHeaderContainer({ children }: any) {
  return (
    <div className="w-full lg:w-3/5 px-4">
      <div className="max-w-lg lg:max-w-2xl mx-auto lg:mr-0">{children}</div>
    </div>
  );
}
export default function HeroHeader({
  header,
}: {
  header: HeroProps["header"];
}) {
  const Container = HeroHeaderContainer;

  const { title, description } = header;

  return (
    <Container>
      <div className="max-w-2xl">
        <h1 className="font-heading text-8xl lg:text-9xl font-bold text-gray-900 lg:mb-8 mb-14">
          {title}
        </h1>
      </div>

      <div className="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
        <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-gray-600">
          <ThinArrowSVG />
        </div>
        <div className="max-w-md">
          <p className="md:text-xl text-gray-600 font-semibold">
            {description}
          </p>
        </div>
      </div>

      
      <div className="sm:flex items-center">
        <a
          className="relative group inline-block w-full sm:w-auto py-4 px-6 text-white font-semibold bg-orange-900 rounded-md overflow-hidden"
          href="#"
        >
          <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
          <div className="relative flex items-center justify-center">
            <span className="mr-4">Meet The Expert</span>
            <span>
        <PrimativeArrowSVG/>
            </span>
          </div>
        </a>
        <div className="flex mt-8 sm:mt-0 sm:ml-8 items-center">
          <img
            className="w-10 h-10"
            src="saturn-assets/images/headers/avatar4.png"
            alt=""
          />
          <img
            className="w-10 -ml-2 h-10"
            src="saturn-assets/images/headers/avatar3.png"
            alt=""
          />
          <img
            className="w-10 -ml-2 h-10"
            src="saturn-assets/images/headers/avatar2.png"
            alt=""
          />
          <img
            className="w-10 -ml-2 h-10"
            src="saturn-assets/images/headers/avatar1.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
}
