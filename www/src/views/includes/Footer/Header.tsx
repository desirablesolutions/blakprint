export default function FooterHeader() {
    return (
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
    )
}