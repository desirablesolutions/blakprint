export default function NavBar() {

    return (
        <section className="overflow-hidden">
            <nav className="py-3.5 xl:pb-0 px-7 bg-dark">
                <div className="flex items-center justify-between xl:mb-5">
                    <div className="w-full xl:w-auto px-2 xl:mr-10">
                        <div className="flex items-center justify-between">
                            <a className="inline-flex items-center h-7" href="#">
                                <img src="dashy-assets/logos/dashy-logo-light.svg" alt="" />
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
                                        <path
                                            d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:block w-full md:w-auto px-2 mr-auto">
                        <div className="flex items-center pr-4 border border-neutral-500 rounded-lg focus-within:border-neutral-400">
                            <div className="pl-4 pr-3.5">
                                <svg
                                    width={19}
                                    height={18}
                                    viewBox="0 0 19 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.4999 16.2803C15.7928 16.5732 16.2677 16.5732 16.5606 16.2803C16.8535 15.9874 16.8535 15.5126 16.5606 15.2197L15.4999 16.2803ZM12.0606 10.7197C11.7677 10.4268 11.2928 10.4268 10.9999 10.7197C10.7071 11.0126 10.7071 11.4874 10.9999 11.7803L12.0606 10.7197ZM12.2803 7.5C12.2803 9.98528 10.2656 12 7.78027 12V13.5C11.094 13.5 13.7803 10.8137 13.7803 7.5H12.2803ZM7.78027 12C5.29499 12 3.28027 9.98528 3.28027 7.5H1.78027C1.78027 10.8137 4.46656 13.5 7.78027 13.5V12ZM3.28027 7.5C3.28027 5.01472 5.29499 3 7.78027 3V1.5C4.46656 1.5 1.78027 4.18629 1.78027 7.5H3.28027ZM7.78027 3C10.2656 3 12.2803 5.01472 12.2803 7.5H13.7803C13.7803 4.18629 11.094 1.5 7.78027 1.5V3ZM16.5606 15.2197L12.0606 10.7197L10.9999 11.7803L15.4999 16.2803L16.5606 15.2197Z"
                                        fill="#495460"
                                    />
                                </svg>
                            </div>
                            <input
                                className="py-2 text-sm text-neutral-400 placeholder-neutral-400 bg-transparent outline-none"
                                id="horizontalNav3-1"
                                type="text"
                                placeholder="Type to search"
                            />
                        </div>
                    </div>
                    <div className="hidden xl:block w-full md:w-auto px-2">
                        <div className="md:flex items-center">
                            <div className="w-full md:w-auto mb-6 md:mb-0">
                                <div className="flex flex-wrap items-center">
                                    <a
                                        className="mr-5 px-3 py-1.5 text-sm font-medium text-white hover:text-neutral-200"
                                        href="#"
                                    >
                                        Create account
                                    </a>
                                    <a
                                        className="px-3 py-1.5 text-sm font-medium text-white bg-gradient-purple-left focus:ring-4 focus:ring-purple-300 rounded-lg"
                                        href="#"
                                    >
                                        Sign In
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex xl:flex-wrap">
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Home
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-transparent font-medium bg-clip-text bg-gradient-purple-top">
                            Payments
                        </span>
                        <div className="h-0.5 bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Business operations
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Financial services
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Developer tools
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Security
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            All products
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                </div>
            </nav>
            <div className="navbar-menu fixed top-0 left-0 bottom-0 z-50 hidden">
                <div className="navbar-backdrop fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50" />
                <nav className="fixed w-full h-full max-w-xss bg-white">
                    <div className="flex flex-wrap items-center justify-between px-7 py-2 pb-1 border-b border-gray-200">
                        <div className="w-auto">
                            <a className="inline-block" href="#">
                                <img src="dashy-assets/logos/dashy-logo-dark.svg" alt="" />
                            </a>
                        </div>
                        <div className="w-auto">
                            <a className="text-neutral-300 hover:text-neutral-400" href="#">
                                <svg
                                    width={23}
                                    height={22}
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.97944 7.71965C6.68654 8.01254 6.68654 8.48742 6.97944 8.78031C7.27233 9.0732 7.7472 9.0732 8.0401 8.78031L6.97944 7.71965ZM11.1764 4.58331L11.7068 4.05298C11.4139 3.76009 10.939 3.76009 10.6461 4.05298L11.1764 4.58331ZM14.3128 8.78031C14.6057 9.0732 15.0805 9.0732 15.3734 8.78031C15.6663 8.48742 15.6663 8.01254 15.3734 7.71965L14.3128 8.78031ZM15.3734 14.2803C15.6663 13.9874 15.6663 13.5125 15.3734 13.2196C15.0805 12.9268 14.6057 12.9268 14.3128 13.2196L15.3734 14.2803ZM11.1764 17.4166L10.6461 17.947C10.939 18.2399 11.4139 18.2399 11.7068 17.947L11.1764 17.4166ZM8.0401 13.2196C7.7472 12.9268 7.27233 12.9268 6.97944 13.2196C6.68654 13.5125 6.68654 13.9874 6.97944 14.2803L8.0401 13.2196ZM8.0401 8.78031L11.7068 5.11364L10.6461 4.05298L6.97944 7.71965L8.0401 8.78031ZM10.6461 5.11364L14.3128 8.78031L15.3734 7.71965L11.7068 4.05298L10.6461 5.11364ZM14.3128 13.2196L10.6461 16.8863L11.7068 17.947L15.3734 14.2803L14.3128 13.2196ZM11.7068 16.8863L8.0401 13.2196L6.97944 14.2803L10.6461 17.947L11.7068 16.8863Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="py-6 h-full overflow-y-auto">
                        <div className="flex flex-col flex-wrap px-7 -m-2.5">
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center" href="#">
                                    <img
                                        className="mr-3"
                                        src="dashy-assets/images/home-2.svg"
                                        alt=""
                                    />
                                    <p className="hover:text-neutral-700 font-medium">Dashboard</p>
                                </a>
                            </div>
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center mb-3.5" href="#">
                                    <img className="mr-3" src="dashy-assets/images/gear.svg" alt="" />
                                    <p className="hover:text-neutral-700 font-medium">
                                        People &amp; Settings
                                    </p>
                                </a>
                                <div className="ml-8">
                                    <div className="flex flex-wrap -m-1">
                                        <div className="w-auto p-1">
                                            <a
                                                className="font-medium text-neutral-500 hover:text-neutral-600"
                                                href="#"
                                            >
                                                Help with Sketch
                                            </a>
                                        </div>
                                        <div className="w-auto p-1">
                                            <a
                                                className="font-medium text-neutral-500 hover:text-neutral-600"
                                                href="#"
                                            >
                                                All Documents
                                            </a>
                                        </div>
                                        <div className="w-auto p-1">
                                            <a
                                                className="font-medium text-neutral-500 hover:text-neutral-600"
                                                href="#"
                                            >
                                                Shared with Me
                                            </a>
                                        </div>
                                        <div className="w-auto p-1">
                                            <a
                                                className="font-medium text-neutral-500 hover:text-neutral-600"
                                                href="#"
                                            >
                                                Libraries
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center" href="#">
                                    <img
                                        className="mr-3"
                                        src="dashy-assets/images/loader-rec.svg"
                                        alt=""
                                    />
                                    <p className="hover:text-neutral-700 font-medium">Discover</p>
                                </a>
                            </div>
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center" href="#">
                                    <img
                                        className="mr-3"
                                        src="dashy-assets/images/lifebuoy.svg"
                                        alt=""
                                    />
                                    <p className="hover:text-neutral-700 font-medium">
                                        Help with Sketch
                                    </p>
                                </a>
                            </div>
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center" href="#">
                                    <img
                                        className="mr-3"
                                        src="dashy-assets/images/folder-open.svg"
                                        alt=""
                                    />
                                    <p className="hover:text-neutral-700 font-medium">
                                        All Documents
                                    </p>
                                </a>
                            </div>
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center" href="#">
                                    <img
                                        className="mr-3"
                                        src="dashy-assets/images/user-circle.svg"
                                        alt=""
                                    />
                                    <p className="hover:text-neutral-700 font-medium">
                                        Shared with Me
                                    </p>
                                </a>
                            </div>
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center" href="#">
                                    <img
                                        className="mr-3"
                                        src="dashy-assets/images/link-2-rec.svg"
                                        alt=""
                                    />
                                    <p className="hover:text-neutral-700 font-medium">Libraries</p>
                                </a>
                            </div>
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center" href="#">
                                    <img
                                        className="mr-3"
                                        src="dashy-assets/images/list-unordered-3-rec.svg"
                                        alt=""
                                    />
                                    <p className="hover:text-neutral-700 font-medium">My Drafts</p>
                                </a>
                            </div>
                            <div className="w-auto p-2.5">
                                <a className="flex flex-wrap items-center" href="#">
                                    <img
                                        className="mr-3"
                                        src="dashy-assets/images/trash.svg"
                                        alt=""
                                    />
                                    <p className="hover:text-neutral-700 font-medium">Trash</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}