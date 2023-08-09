
import { defineComponent, HeroType, DefinitionParams } from "blakprint";

export type HeroProps = {
  title?: string;
  description?: string;
}

export function defaultProps(): HeroProps {
  return {
    title: "Blakprint",
    description: `
    our workbox of redefinable, composable, model, view, and controller 
    meta-modules for architecting software.
    `,
  };
}

export default function Hero(props: HeroProps):React.ReactElement {

  const { title, description } = props;

  const Component = defineComponent<HeroProps, React.ReactNode, Error>(() => (

    <section className="relative pb-24 lg:pb-40 overflow-hidden">
      <img
        className="absolute bottom-0 right-0 w-52 md:w-auto"
        src="saturn-assets/images/headers/star-header-right-bottom.png"
        alt=""
      />

      <div className="relative container px-4 mx-auto z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
              <div className="relative max-w-lg lg:max-w-md mx-auto lg:mx-0">
                <img
                  className="block h-112 md:h-150 w-full"
                  src="https://github.com/desirablesolutions/blakprint/raw/main/docs/logo.png?raw=true"
                  alt=""
                />
                <div className="absolute bottom-0 right-0 p-7">
                  <div className="p-6 bg-white rounded-2xl">
                    <div>
                      <span className="text-3xl sm:text-5xl font-semibold text-gray-900">
                        18k+
                      </span>
                      <span className="block text-sm text-gray-500">
                        Projects Done
                      </span>
                    </div>
                    <div className="my-6 w-24 h-px mx-auto bg-gray-300" />
                    <div>
                      <span className="text-3xl sm:text-5xl font-semibold text-gray-900">
                        20+
                      </span>
                      <span className="block text-sm text-gray-500">
                        Awards Winning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 px-4">
              <div className="max-w-lg lg:max-w-2xl mx-auto lg:mr-0">
                <div className="max-w-2xl">
                  <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-gray-900 mb-8 sm:mb-14">
                    {!title ? defaultProps().title : title}
                  </h1>
                </div>
                <div className="md:flex mb-14 max-w-xs sm:max-w-sm md:max-w-none">
                  <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-gray-600">
                    <svg
                      width={84}
                      height={10}
                      viewBox="0 0 84 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="max-w-md">
                    <p className="md:text-xl text-gray-600 font-semibold">
                     {!description ? defaultProps().description : description}
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
                        <svg
                          width={8}
                          height={12}
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z"
                            fill="#FFF2EE"
                          />
                        </svg>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ));

  return Component.value() as React.ReactElement;
}
