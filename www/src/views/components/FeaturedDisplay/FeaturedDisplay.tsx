export default function FeaturedDisplay() {
    return (
        <section className="relative pt-20 overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="max-w-md lg:max-w-7xl mx-auto">
      <div className="relative z-10 flex flex-wrap -mx-4 mb-14 items-center">
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
              👋 MEET SATURN UI LIBRARY
            </span>
            <h1 className="font-heading text-5xl xs:text-6xl xl:text-7xl font-bold">
              <span>Manage your</span>
              <span className="block leading-snug font-serif italic">
                products
              </span>
              <span>with saturn</span>
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex lg:justify-end">
            <div className="mr-5 pt-2">
              <div className="w-12 xs:w-24 h-px bg-orange-500" />
            </div>
            <div>
              <div className="flex items-center mb-5">
                <img
                  className="mr-1.5 h-4"
                  src="saturn-assets/images/applications/star.svg"
                  alt=""
                />
                <img
                  className="mr-1.5 h-4"
                  src="saturn-assets/images/applications/star.svg"
                  alt=""
                />
                <img
                  className="mr-1.5 h-4"
                  src="saturn-assets/images/applications/star.svg"
                  alt=""
                />
                <img
                  className="mr-1.5 h-4"
                  src="saturn-assets/images/applications/star.svg"
                  alt=""
                />
                <img
                  className="h-4"
                  src="saturn-assets/images/applications/star.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-wrap items-center -mx-4 mb-6">
                <div className="w-full md:w-auto px-4">
                  <div className="flex items-center">
                    <img
                      src="saturn-assets/images/applications/avatar-photo1.png"
                      alt=""
                    />
                    <img
                      className="-ml-3"
                      src="saturn-assets/images/applications/avatar-photo2.png"
                      alt=""
                    />
                    <img
                      className="-ml-3"
                      src="saturn-assets/images/applications/avatar-photo3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-auto px-4">
                  <div>
                    <span className="block text-2xl font-bold text-gray-900">
                      500+
                    </span>
                    <span className="text-sm text-gray-400">
                      Happy Customers
                    </span>
                  </div>
                </div>
              </div>
              <a
                className="relative group inline-block py-4 px-6 text-center text-orange-50 bg-orange-900 font-semibold rounded-full overflow-hidden"
                href="#"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                <span className="relative">Start 14-days Trial</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-2xl xl:max-w-4xl mx-auto">
        <img
          className="absolute top-1/2 left-0 -ml-40 lg:-ml-72 transform -translate-y-1/2"
          src="saturn-assets/images/applications/light-full-center-blue.png"
          alt=""
        />
        <img
          className="absolute top-0 right-0 -mr-52 lg:-mr-80 -mt-52 lg:-mt-72"
          src="saturn-assets/images/applications/light-full-center-orange.png"
          alt=""
        />
        <img
          className="relative block w-full"
          src="saturn-assets/images/applications/app-center-image.png"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

    )
}