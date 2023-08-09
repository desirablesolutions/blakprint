
export default function NavBar() {
  return (
    <nav className="sticky backdrop-blur-lg top-0 left-0 w-full py-6 bg-transparent mb-12 md:mb-24 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center relative">
          <a
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold"
            href="#"
          >
            <img
              className="h-16"
              src="https://github.com/desirablesolutions/blakprint/raw/main/docs/logo.png?raw=true"
              alt=""
              width="auto"
            />
          </a>
          <div className="lg:hidden ml-auto">
            <button className="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
            <li className="group relative">
              <a
                className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                href="#"
              >
                Featured
              </a>
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
            </li>
            <li>
              <a
                className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                href="#"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                href="#"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
                href="#"
              >
                Articles
              </a>
            </li>
          </ul>
          <div className="hidden lg:block ml-auto">
            <div className="flex items-center">
              <a
                className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
                href="#"
              >
                Sign In
              </a>
              <a
                className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden"
                href="#"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                <span className="relative">Create an account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
