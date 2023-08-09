export default function MobileMenu() {
    return (
        <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-30">
        <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45" />
        <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
          <div className="pb-3 mb-3 border-b border-gray-100">
            <a
              className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg"
              href="#"
            >
              Featured
            </a>
            <a
              className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg"
              href="#"
            >
              Solutions
            </a>
          </div>
          <div className="pb-3 mb-3 border-b border-gray-100">
            <a
              className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg"
              href="#"
            >
              <img
                src="saturn-assets/images/headers/icon-download.svg"
                alt=""
              />
              <span className="ml-3">Download</span>
            </a>
            <a
              className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg"
              href="#"
            >
              <img
                src="saturn-assets/images/headers/icon-slack.svg"
                alt=""
              />
              <span className="ml-3">Community</span>
            </a>
            <a
              className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg"
              href="#"
            >
              <img
                src="saturn-assets/images/headers/icon-help.svg"
                alt=""
              />
              <span className="ml-3">Help</span>
            </a>
          </div>
          <div className="flex items-center pb-3 mb-3 border-b border-gray-100">
            <a
              className="inline-block px-4 py-3 mr-6 text-sm font-semibold text-orange-900 hover:text-gray-900"
              href="#"
            >
              Sign In
            </a>
            <a
              className="inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200"
              href="#"
            >
              Create an account
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex w-10 h-10 items-center justify-center bg-orange-50 rounded-full">
              <img
                src="saturn-assets/images/headers/icon-email-me.svg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <span className="block text-xs text-gray-500">
                Drop us a line
              </span>
              <a
                className="text-sm font-semibold text-black hover:text-orange-900"
                href="#"
              >
                hello@shuffle.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}