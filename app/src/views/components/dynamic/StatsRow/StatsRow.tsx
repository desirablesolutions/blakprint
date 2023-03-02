export default function StatsRow() {
    return (<section className="py-4 overflow-hidden">
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-3">
                <div className="w-full sm:w-1/2 lg:w-1/5 p-3">
                    <div className="px-5 py-3 h-full bg-white rounded-lg">
                        <p className="mb-2.5 text-sm text-neutral-500 font-medium">
                            Total Tasks
                        </p>
                        <div className="flex flex-wrap items-center mb-2 -m-1">
                            <div className="w-auto p-1">
                                <h3 className="font-heading text-3xl font-semibold">5,943</h3>
                            </div>
                            <div className="w-auto p-1">
                                <div className="flex flex-wrap items-center py-px px-1 border border-green-500 rounded-full">
                                    <svg
                                        className="mr-0.5"
                                        width={15}
                                        height={10}
                                        viewBox="0 0 15 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.16667 0.916748C7.75245 0.916748 7.41667 1.25253 7.41667 1.66675C7.41667 2.08096 7.75245 2.41675 8.16667 2.41675V0.916748ZM13.5 1.66675H14.25C14.25 1.25253 13.9142 0.916748 13.5 0.916748V1.66675ZM12.75 7.00008C12.75 7.41429 13.0858 7.75008 13.5 7.75008C13.9142 7.75008 14.25 7.41429 14.25 7.00008H12.75ZM0.96967 7.80308C0.676777 8.09598 0.676777 8.57085 0.96967 8.86374C1.26256 9.15664 1.73744 9.15664 2.03033 8.86374L0.96967 7.80308ZM5.5 4.33341L6.03033 3.80308C5.73744 3.51019 5.26256 3.51019 4.96967 3.80308L5.5 4.33341ZM8.16667 7.00008L7.63634 7.53041C7.92923 7.8233 8.4041 7.8233 8.697 7.53041L8.16667 7.00008ZM8.16667 2.41675H13.5V0.916748H8.16667V2.41675ZM12.75 1.66675V7.00008H14.25V1.66675H12.75ZM2.03033 8.86374L6.03033 4.86374L4.96967 3.80308L0.96967 7.80308L2.03033 8.86374ZM4.96967 4.86374L7.63634 7.53041L8.697 6.46975L6.03033 3.80308L4.96967 4.86374ZM8.697 7.53041L14.0303 2.19708L12.9697 1.13642L7.63634 6.46975L8.697 7.53041Z"
                                            fill="#20C43A"
                                        />
                                    </svg>
                                    <span className="text-xs text-green-500 font-medium">16%</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-400 font-medium">Tasks</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/5 p-3">
                    <div className="px-5 py-3 h-full bg-white rounded-lg">
                        <p className="mb-2.5 text-sm text-neutral-500 font-medium">
                            Running Tasks
                        </p>
                        <div className="flex flex-wrap items-center mb-2 -m-1">
                            <div className="w-auto p-1">
                                <h3 className="font-heading text-3xl font-semibold">51</h3>
                            </div>
                            <div className="w-auto p-1">
                                <div className="flex flex-wrap items-center py-px px-1 border border-green-500 rounded-full">
                                    <svg
                                        className="mr-0.5"
                                        width={15}
                                        height={10}
                                        viewBox="0 0 15 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.16667 0.916748C7.75245 0.916748 7.41667 1.25253 7.41667 1.66675C7.41667 2.08096 7.75245 2.41675 8.16667 2.41675V0.916748ZM13.5 1.66675H14.25C14.25 1.25253 13.9142 0.916748 13.5 0.916748V1.66675ZM12.75 7.00008C12.75 7.41429 13.0858 7.75008 13.5 7.75008C13.9142 7.75008 14.25 7.41429 14.25 7.00008H12.75ZM0.96967 7.80308C0.676777 8.09598 0.676777 8.57085 0.96967 8.86374C1.26256 9.15664 1.73744 9.15664 2.03033 8.86374L0.96967 7.80308ZM5.5 4.33341L6.03033 3.80308C5.73744 3.51019 5.26256 3.51019 4.96967 3.80308L5.5 4.33341ZM8.16667 7.00008L7.63634 7.53041C7.92923 7.8233 8.4041 7.8233 8.697 7.53041L8.16667 7.00008ZM8.16667 2.41675H13.5V0.916748H8.16667V2.41675ZM12.75 1.66675V7.00008H14.25V1.66675H12.75ZM2.03033 8.86374L6.03033 4.86374L4.96967 3.80308L0.96967 7.80308L2.03033 8.86374ZM4.96967 4.86374L7.63634 7.53041L8.697 6.46975L6.03033 3.80308L4.96967 4.86374ZM8.697 7.53041L14.0303 2.19708L12.9697 1.13642L7.63634 6.46975L8.697 7.53041Z"
                                            fill="#20C43A"
                                        />
                                    </svg>
                                    <span className="text-xs text-green-500 font-medium">16%</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-400 font-medium">Tasks</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/5 p-3">
                    <div className="px-5 py-3 h-full bg-white rounded-lg">
                        <p className="mb-2.5 text-sm text-neutral-500 font-medium">
                            Pending Tasks
                        </p>
                        <div className="flex flex-wrap items-center mb-2 -m-1">
                            <div className="w-auto p-1">
                                <h3 className="font-heading text-3xl font-semibold">3,305</h3>
                            </div>
                            <div className="w-auto p-1">
                                <div className="flex flex-wrap items-center py-px px-1 border border-red-500 rounded-full">
                                    <svg
                                        className="mr-0.5"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.66667 7.58341C7.25245 7.58341 6.91667 7.9192 6.91667 8.33341C6.91667 8.74763 7.25245 9.08341 7.66667 9.08341V7.58341ZM13 8.33341V9.08341C13.4142 9.08341 13.75 8.74763 13.75 8.33341H13ZM13.75 3.00008C13.75 2.58587 13.4142 2.25008 13 2.25008C12.5858 2.25008 12.25 2.58587 12.25 3.00008H13.75ZM1.53033 1.13642C1.23744 0.843525 0.762563 0.843525 0.46967 1.13642C0.176777 1.42931 0.176777 1.90418 0.46967 2.19708L1.53033 1.13642ZM5 5.66675L4.46967 6.19708C4.76256 6.48997 5.23744 6.48997 5.53033 6.19708L5 5.66675ZM7.66667 3.00008L8.197 2.46975C7.9041 2.17686 7.42923 2.17686 7.13634 2.46975L7.66667 3.00008ZM7.66667 9.08341H13V7.58341H7.66667V9.08341ZM13.75 8.33341V3.00008H12.25V8.33341H13.75ZM0.46967 2.19708L4.46967 6.19708L5.53033 5.13642L1.53033 1.13642L0.46967 2.19708ZM5.53033 6.19708L8.197 3.53041L7.13634 2.46975L4.46967 5.13642L5.53033 6.19708ZM7.13634 3.53041L12.4697 8.86374L13.5303 7.80308L8.197 2.46975L7.13634 3.53041Z"
                                            fill="#FF3131"
                                        />
                                    </svg>
                                    <span className="text-xs text-red-500 font-medium">12%</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-400 font-medium">Tasks</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/5 p-3">
                    <div className="px-5 py-3 h-full bg-white rounded-lg">
                        <p className="mb-2.5 text-sm text-neutral-500 font-medium">
                            Confirmed Payments
                        </p>
                        <div className="flex flex-wrap items-center mb-2 -m-1">
                            <div className="w-auto p-1">
                                <h3 className="font-heading text-3xl font-semibold">$194k</h3>
                            </div>
                            <div className="w-auto p-1">
                                <div className="flex flex-wrap items-center py-px px-1 border border-green-500 rounded-full">
                                    <svg
                                        className="mr-0.5"
                                        width={15}
                                        height={10}
                                        viewBox="0 0 15 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.16667 0.916748C7.75245 0.916748 7.41667 1.25253 7.41667 1.66675C7.41667 2.08096 7.75245 2.41675 8.16667 2.41675V0.916748ZM13.5 1.66675H14.25C14.25 1.25253 13.9142 0.916748 13.5 0.916748V1.66675ZM12.75 7.00008C12.75 7.41429 13.0858 7.75008 13.5 7.75008C13.9142 7.75008 14.25 7.41429 14.25 7.00008H12.75ZM0.96967 7.80308C0.676777 8.09598 0.676777 8.57085 0.96967 8.86374C1.26256 9.15664 1.73744 9.15664 2.03033 8.86374L0.96967 7.80308ZM5.5 4.33341L6.03033 3.80308C5.73744 3.51019 5.26256 3.51019 4.96967 3.80308L5.5 4.33341ZM8.16667 7.00008L7.63634 7.53041C7.92923 7.8233 8.4041 7.8233 8.697 7.53041L8.16667 7.00008ZM8.16667 2.41675H13.5V0.916748H8.16667V2.41675ZM12.75 1.66675V7.00008H14.25V1.66675H12.75ZM2.03033 8.86374L6.03033 4.86374L4.96967 3.80308L0.96967 7.80308L2.03033 8.86374ZM4.96967 4.86374L7.63634 7.53041L8.697 6.46975L6.03033 3.80308L4.96967 4.86374ZM8.697 7.53041L14.0303 2.19708L12.9697 1.13642L7.63634 6.46975L8.697 7.53041Z"
                                            fill="#20C43A"
                                        />
                                    </svg>
                                    <span className="text-xs text-green-500 font-medium">6%</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-400 font-medium">Payment</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/5 p-3">
                    <div className="px-5 py-3 h-full bg-white rounded-lg">
                        <p className="mb-2.5 text-sm text-neutral-500 font-medium">
                            Pending Payments
                        </p>
                        <div className="flex flex-wrap items-center mb-2 -m-1">
                            <div className="w-auto p-1">
                                <h3 className="font-heading text-3xl font-semibold">$37k</h3>
                            </div>
                            <div className="w-auto p-1">
                                <div className="flex flex-wrap items-center py-px px-1 border border-red-500 rounded-full">
                                    <svg
                                        className="mr-0.5"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.66667 7.58341C7.25245 7.58341 6.91667 7.9192 6.91667 8.33341C6.91667 8.74763 7.25245 9.08341 7.66667 9.08341V7.58341ZM13 8.33341V9.08341C13.4142 9.08341 13.75 8.74763 13.75 8.33341H13ZM13.75 3.00008C13.75 2.58587 13.4142 2.25008 13 2.25008C12.5858 2.25008 12.25 2.58587 12.25 3.00008H13.75ZM1.53033 1.13642C1.23744 0.843525 0.762563 0.843525 0.46967 1.13642C0.176777 1.42931 0.176777 1.90418 0.46967 2.19708L1.53033 1.13642ZM5 5.66675L4.46967 6.19708C4.76256 6.48997 5.23744 6.48997 5.53033 6.19708L5 5.66675ZM7.66667 3.00008L8.197 2.46975C7.9041 2.17686 7.42923 2.17686 7.13634 2.46975L7.66667 3.00008ZM7.66667 9.08341H13V7.58341H7.66667V9.08341ZM13.75 8.33341V3.00008H12.25V8.33341H13.75ZM0.46967 2.19708L4.46967 6.19708L5.53033 5.13642L1.53033 1.13642L0.46967 2.19708ZM5.53033 6.19708L8.197 3.53041L7.13634 2.46975L4.46967 5.13642L5.53033 6.19708ZM7.13634 3.53041L12.4697 8.86374L13.5303 7.80308L8.197 2.46975L7.13634 3.53041Z"
                                            fill="#FF3131"
                                        />
                                    </svg>
                                    <span className="text-xs text-red-500 font-medium">5%</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-400 font-medium">Payment</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
