export default function CardGrid() {
    return (
        <section className="py-4 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center justify-between mb-10 -m-2">
                    <div className="w-auto p-2">
                        <h2 className="font-heading text-3xl font-semibold">
                            Design new dashboard tools
                        </h2>
                    </div>
                    <div className="w-auto p-2">
                        <a
                            className="flex flex-wrap items-center hover:text-neutral-500"
                            href="#"
                        >
                            <span className="mr-2.5">Find more trading tools</span>
                            <svg
                                width={17}
                                height={16}
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.83333 3.33331L14.5 7.99998M14.5 7.99998L9.83333 12.6666M14.5 7.99998L2.5 7.99998"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap -m-3">
                    <div className="w-full sm:w-1/3 p-3">
                        <a
                            className="inline-block h-full bg-white border overflow-hidden rounded-xl"
                            href="#"
                        >
                            <img
                                className="w-full"
                                src="dashy-assets/images/card-media3.png"
                                alt=""
                            />
                            <div className="p-6">
                                <p className="mb-8 text-xl font-medium">
                                    Management tool that tracks, gathers, and displays business data
                                </p>
                                <div className="flex flex-wrap items-center justify-between -m-2">
                                    <div className="w-auto p-2">
                                        <p className="text-neutral-500">Cameron Williamson</p>
                                    </div>
                                    <div className="w-auto p-2">
                                        <img src="dashy-assets/images/card-avatar.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="w-full sm:w-1/3 p-3">
                        <a
                            className="inline-block h-full bg-white border overflow-hidden rounded-xl"
                            href="#"
                        >
                            <img
                                className="w-full"
                                src="dashy-assets/images/card-media.png"
                                alt=""
                            />
                            <div className="p-6">
                                <p className="mb-8 text-xl font-medium">
                                    Management tool that tracks, gathers, and displays business data
                                </p>
                                <div className="flex flex-wrap items-center justify-between -m-2">
                                    <div className="w-auto p-2">
                                        <p className="text-neutral-500">Devon Lane</p>
                                    </div>
                                    <div className="w-auto p-2">
                                        <img src="dashy-assets/images/card-avatar2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="w-full sm:w-1/3 p-3">
                        <a
                            className="inline-block h-full bg-white border overflow-hidden rounded-xl"
                            href="#"
                        >
                            <img
                                className="w-full"
                                src="dashy-assets/images/card-media2.png"
                                alt=""
                            />
                            <div className="p-6">
                                <p className="mb-8 text-xl font-medium">
                                    Management tool that tracks, gathers, and displays business data
                                </p>
                                <div className="flex flex-wrap items-center justify-between -m-2">
                                    <div className="w-auto p-2">
                                        <p className="text-neutral-500">Cody Fisher</p>
                                    </div>
                                    <div className="w-auto p-2">
                                        <img src="dashy-assets/images/card-avatar.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}