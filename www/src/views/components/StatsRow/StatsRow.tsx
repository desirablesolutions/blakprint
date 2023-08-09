export default function StatsRow() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
  <img
    className="absolute top-0 right-0 md:mt-10 -mr-20 md:-mr-0"
    src="saturn-assets/images/stats/star-circle.svg"
    alt=""
  />
  <img
    className="absolute bottom-0 left-0"
    src="saturn-assets/images/stats/left-blue-light.png"
    alt=""
  />
  <div className="relative container px-4 mx-auto">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap -mx-4 mb-24 items-end">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="max-w-md md:max-w-lg">
            <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
              PRODUCT OVERVIEW
            </span>
            <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
              <span>Build</span>
              <span className="font-serif italic">Exclusively</span>
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="max-w-md lg:ml-auto lg:pb-3">
            <p className="text-xl text-gray-500 font-semibold">
              Nisi eu pellentesque felis volutpat aliquet pulvinar sed. Vitae
              fames vestibulum urna vel odio mauris urna orci est.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="relative w-full md:w-1/3 px-4 pb-9 md:pb-0 mb-12 lg:mb-0">
          <div className="hidden md:block absolute top-1/2 right-0 w-px h-28 bg-gray-200 transform -translate-y-1/2" />
          <div className="md:hidden absolute bottom-0 left-1/2 h-px w-40 bg-gray-200 transform -translate-x-1/2" />
          <div className="text-center">
            <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">
              300+
            </span>
            <span className="text-xl text-gray-500">PRODUCTS</span>
          </div>
        </div>
        <div className="relative w-full md:w-1/3 px-4 pb-9 md:pb-0 mb-12 lg:mb-0">
          <div className="hidden md:block absolute top-1/2 right-0 w-px h-28 bg-gray-200 transform -translate-y-1/2" />
          <div className="md:hidden absolute bottom-0 left-1/2 h-px w-40 bg-gray-200 transform -translate-x-1/2" />
          <div className="text-center">
            <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">
              85
            </span>
            <span className="text-xl text-gray-500">WEB TEMPLATE</span>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="text-center">
            <span className="block text-5xl lg:text-7xl font-bold text-gray-900 mb-5">
              215
            </span>
            <span className="text-xl text-gray-500">MOBILE TEMPLATE</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}