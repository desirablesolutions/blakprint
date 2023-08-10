import { HeroProps } from "@typings/index";

export default function HeroBanner({ banner }: { banner: HeroProps["banner"] }) {

  const { image } = banner;

  
    return (
        <div className="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
        <div className="relative max-w-lg lg:max-w-md mx-auto lg:mx-0">
          <img
            className="block h-112 md:h-150 w-full"
            src={image.src}
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
    )
}