export default function Contact() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
  <img
    className="absolute top-0 left-0 md:mt-24"
    src="saturn-assets/images/contact/dots-side-1.svg"
    alt=""
  />
  <img
    className="absolute bottom-0 right-0 mb-8 lg:mb-24"
    src="saturn-assets/images/contact/dots-side-2.svg"
    alt=""
  />
  <div className="relative container px-4 mx-auto">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-20">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
          READY TO SUPPORT US
        </span>
        <h1 className="font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
          <span>Let’s stay</span>
          <span className="font-serif italic">connected</span>
        </h1>
        <p className="text-xl text-gray-500 font-semibold">
          Relax, we are ready to support 24/7 for you
        </p>
      </div>
      <div className="max-w-md lg:max-w-5xl mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
            <img
              className="h-full w-full max-w-md"
              src="saturn-assets/images/contact/red-image.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-md py-6 lg:ml-auto">
              <div className="flex mb-12 items-center">
                <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-200">
                  <img
                    src="saturn-assets/images/contact/icon-phone.svg"
                    alt=""
                  />
                </div>
                <div>
                  <span className="text-lg text-gray-500">Phone</span>
                  <span className="block text-lg font-semibold text-gray-900">
                    +1 891 4937
                  </span>
                </div>
              </div>
              <div className="flex mb-12 items-center">
                <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-200">
                  <img
                    src="saturn-assets/images/contact/icon-email.svg"
                    alt=""
                  />
                </div>
                <div>
                  <span className="text-lg text-gray-500">Email</span>
                  <span className="block text-lg font-semibold text-gray-900">
                    hello@yourdomain.com
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-green-200">
                  <img
                    className="h-8"
                    src="saturn-assets/images/contact/icon-location.svg"
                    alt=""
                  />
                </div>
                <div>
                  <span className="text-lg text-gray-500">Office</span>
                  <span className="block text-lg font-semibold text-gray-900">
                    213, New York
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}