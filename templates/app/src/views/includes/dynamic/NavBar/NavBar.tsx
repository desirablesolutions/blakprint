export default function NavBar() {

    return (
        <section>
        <nav className="relative flex items-center justify-between p-8  mb-3">
          <div className="w-full xl:w-auto px-2">
            <div className="flex items-center justify-between">
              <a className="inline-flex items-center h-8" href="#">
                <img src="trizzle-assets/logos/trizzle-logo.svg" alt="" />
              </a>
              <div className="xl:hidden">
                <button className="navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none">
                  <svg
                    width={20}
                    height={12}
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path
                      d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden xl:inline-flex h-14 p-3 items-center w-full max-w-sm xl:max-w-md bg-gray-700 border border-gray-400 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <a className="inline-block text-gray-400 hover:text-gray-300" href="#">
                <svg
                  width={21}
                  height={21}
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7099 19.29L16.9999 15.61C18.44 13.8144 19.1374 11.5353 18.9487 9.24133C18.76 6.94733 17.6996 4.81281 15.9854 3.27667C14.2713 1.74053 12.0337 0.919537 9.73283 0.982497C7.43194 1.04546 5.24263 1.98759 3.61505 3.61517C1.98747 5.24275 1.04534 7.43207 0.982375 9.73295C0.919414 12.0338 1.74041 14.2714 3.27655 15.9855C4.81269 17.6997 6.94721 18.7601 9.2412 18.9488C11.5352 19.1375 13.8143 18.4401 15.6099 17L19.2899 20.68C19.3829 20.7738 19.4935 20.8482 19.6153 20.8989C19.7372 20.9497 19.8679 20.9758 19.9999 20.9758C20.1319 20.9758 20.2626 20.9497 20.3845 20.8989C20.5063 20.8482 20.6169 20.7738 20.7099 20.68C20.8901 20.4936 20.9909 20.2444 20.9909 19.985C20.9909 19.7257 20.8901 19.4765 20.7099 19.29ZM9.9999 17C8.61544 17 7.26206 16.5895 6.11091 15.8203C4.95977 15.0511 4.06256 13.9579 3.53275 12.6788C3.00293 11.3997 2.86431 9.99226 3.13441 8.63439C3.4045 7.27653 4.07119 6.02925 5.05016 5.05028C6.02912 4.07131 7.27641 3.40463 8.63427 3.13453C9.99214 2.86443 11.3996 3.00306 12.6787 3.53287C13.9578 4.06268 15.051 4.95989 15.8202 6.11103C16.5894 7.26218 16.9999 8.61556 16.9999 10C16.9999 11.8565 16.2624 13.637 14.9497 14.9498C13.6369 16.2625 11.8564 17 9.9999 17Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <input
                className="pl-3 bg-transparent text-gray-100 placeholder-gray-400 outline-none"
                id="horizontalNavInput6-1"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="hidden xl:block w-full md:w-auto px-2">
            <div className="flex flex-wrap items-center -mb-2">
              <a
                className="inline-block mb-2 mr-6 text-gray-400 hover:text-gray-300"
                href="#"
              >
                <svg
                  width={20}
                  height={16}
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="inline-block mb-2 mr-8 text-gray-400 hover:text-gray-300"
                href="#"
              >
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="group inline-flex mb-2 items-center" href="#">
                <img
                  className="h-8 w-8 mr-3 rounded-full object-cover"
                  src="trizzle-assets/images/avatar-men.png"
                  alt=""
                />
                <h4 className="text-white font-extrabold tracking-wide mr-4">
                  John Doe
                </h4>
                <span className="text-gray-400 group-hover:text-gray-300">
                  <svg
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </nav>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-3/4 lg:w-80 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50" />
          <nav className="relative flex flex-col p-8 h-full w-full bg-gray-700 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <a className="inline-flex items-center" href="#">
                <img
                  className="h-10"
                  src="trizzle-assets/logos/trizzle-logo.svg"
                  alt=""
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex w-full h-14 p-3 mb-24 items-center bg-gray-700 border border-gray-400 rounded-lg">
              <a className="inline-block text-gray-400 hover:text-gray-300" href="#">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4733 12.5267L10.9999 10.0733C11.96 8.87627 12.4249 7.35686 12.2991 5.82753C12.1733 4.2982 11.4664 2.87519 10.3236 1.85109C9.18085 0.827001 7.68914 0.279671 6.15522 0.321644C4.62129 0.363618 3.16175 0.991705 2.0767 2.07676C0.991644 3.16181 0.363557 4.62136 0.321583 6.15528C0.27961 7.6892 0.82694 9.18091 1.85103 10.3237C2.87512 11.4664 4.29814 12.1734 5.82747 12.2992C7.3568 12.425 8.87621 11.9601 10.0733 11L12.5266 13.4533C12.5886 13.5158 12.6623 13.5654 12.7436 13.5993C12.8248 13.6331 12.9119 13.6505 12.9999 13.6505C13.0879 13.6505 13.1751 13.6331 13.2563 13.5993C13.3376 13.5654 13.4113 13.5158 13.4733 13.4533C13.5934 13.329 13.6606 13.1629 13.6606 12.99C13.6606 12.8171 13.5934 12.651 13.4733 12.5267ZM6.33327 11C5.41029 11 4.50804 10.7263 3.74061 10.2135C2.97318 9.70074 2.37504 8.97191 2.02183 8.11919C1.66862 7.26646 1.57621 6.32815 1.75627 5.42291C1.93634 4.51766 2.38079 3.68614 3.03344 3.0335C3.68608 2.38085 4.5176 1.9364 5.42285 1.75633C6.32809 1.57627 7.2664 1.66868 8.11913 2.02189C8.97185 2.3751 9.70068 2.97324 10.2135 3.74067C10.7262 4.5081 10.9999 5.41035 10.9999 6.33333C10.9999 7.57101 10.5083 8.75799 9.6331 9.63316C8.75793 10.5083 7.57095 11 6.33327 11Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <input
                className="pl-3 text-sm bg-transparent text-gray-100 placeholder-gray-400 outline-none"
                id="horizontalNavInput5-1"
                type="text"
                placeholder="Search..."
              />
            </div>
            <ul className="mb-10">
              <li className="mb-10">
                <a
                  className="inline-block text-lg font-semibold text-gray-300 hover:text-gray-200"
                  href="#"
                >
                  Overview
                </a>
              </li>
              <li className="mb-10">
                <a
                  className="inline-block text-lg font-semibold text-gray-300 hover:text-gray-200"
                  href="#"
                >
                  Analytics
                </a>
              </li>
              <li className="mb-10">
                <a
                  className="inline-block text-lg font-semibold text-gray-300 hover:text-gray-200"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li className="mb-10">
                <a
                  className="inline-flex w-full items-center justify-between text-lg font-semibold text-gray-300 hover:text-gray-200"
                  href="#"
                >
                  <span>Orders</span>
                  <div className="flex w-5 h-5 ml-2 items-center justify-center text-xs text-white bg-blue-500 rounded-full">
                    4
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-lg font-semibold text-gray-300 hover:text-gray-200"
                  href="#"
                >
                  Customers
                </a>
              </li>
            </ul>
            <a className="flex mt-auto items-center justify-between" href="#">
              <div className="flex items-center">
                <img
                  className="h-8 w-8 mr-3 rounded-full"
                  src="trizzle-assets/images/avatar-men-2.png"
                  alt=""
                />
                <h5 className="leading-none font-semibold text-gray-100">John Doe</h5>
              </div>
              <svg
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#3D485B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </div>
      </section>
      
    )
}