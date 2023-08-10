import { default as Container } from "./Container";
import { defineInclude } from "blakprint";

export type FooterProps = {
  bottom?: {
    copyright: string
  },
  header: {
    title: string;
    description: string;
  }
};

export default function Footer(props: FooterProps) {
  const Component = defineInclude<FooterProps, React.ReactElement, Error>(
    () => (
      <Container>
        <div className="max-w-3xl mb-24 sm:mb-52 pr-8 sm:pr-0">
          <h1 className="font-heading text-4xl xs:text-5xl md:text-6xl font-semibold text-white mb-20">
            <span>Join &amp; Let's Build</span>
            <span className="font-serif italic">Magnificent</span>
            <span>Products</span>
          </h1>
          <div className="sm:flex items-center">
            <div className="sm:flex mb-6 sm:mb-0 sm:mr-12 items-center">
              <div className="flex mb-3 sm:mb-0 sm:mr-3 items-center justify-center w-12 h-12 bg-white rounded-full">
                <img src="saturn-assets/images/footers/map-pin.svg" alt="" />
              </div>
              <div>
                <span className="block text-orange-50">
                  1929, Bancangan, Sambit,
                </span>
                <span className="block text-orange-50">Wakanda Kidul</span>
              </div>
            </div>
            <div className="sm:flex items-center">
              <div className="flex mb-3 sm:mb-0 sm:mr-3 items-center justify-center w-12 h-12 bg-white rounded-full">
                <img src="saturn-assets/images/footers/envelope.svg" alt="" />
              </div>
              <div>
                <span className="block text-orange-50">
                  hello@yourdomain.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t-2 border-orange-400 border-opacity-50">
          <div className="sm:flex items-center justify-between">
            <span className="inline-block mb-4 sm:mb-0 text-gray-50">
              © All rights reserved
            </span>
            <div className="sm:flex mb-6 sm:mb-0 items-center">
              <a
                className="inline-block mr-6 sm:mr-12 text-orange-200 hover:text-orange-100"
                href="#"
              >
                Terms &amp; Conditions
              </a>
              <a
                className="inline-block text-orange-200 hover:text-orange-100"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </Container>
    )
  );

  return Component.value() as React.ReactElement;
}
