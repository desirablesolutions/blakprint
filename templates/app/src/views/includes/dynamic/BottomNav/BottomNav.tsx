export default function BottomNav() {
    return (
        <section>
            <div className="pt-5 pb-6 px-8 bg-gray-700">
                <div className="flex flex-wrap items-center justify-between -mx-2">
                    <div className="w-full lg:w-auto px-2 mb-6 lg:mb-0">
                        <h4 className="text-2xl font-bold text-white tracking-wide leading-7 mb-1">
                            Overview
                        </h4>
                        <p className="text-xs text-gray-300">
                            Get daily review of your recent activities
                        </p>
                    </div>
                    <div className="w-full lg:w-auto px-2">
                        <div className="sm:flex items-center">
                            <div className="w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4">
                                <div className="flex flex-wrap items-center -mb-2">
                                    <a
                                        className="inline-flex items-center justify-center w-12 h-12 mb-2 mr-4 p-1 text-gray-300 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full"
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
                                        className="inline-flex items-center justify-center w-12 h-12 mb-2 mr-4 p-1 text-gray-300 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full"
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
                                    <a
                                        className="inline-flex items-center justify-center w-12 h-12 mb-2 p-1 text-gray-300 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full"
                                        href="#"
                                    >
                                        <svg
                                            width={21}
                                            height={21}
                                            viewBox="0 0 21 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20.71 19.29L17 15.61C18.4401 13.8144 19.1375 11.5353 18.9488 9.24133C18.7601 6.94733 17.6997 4.81281 15.9855 3.27667C14.2714 1.74053 12.0338 0.919537 9.73295 0.982497C7.43207 1.04546 5.24275 1.98759 3.61517 3.61517C1.98759 5.24275 1.04546 7.43207 0.982497 9.73295C0.919537 12.0338 1.74053 14.2714 3.27667 15.9855C4.81281 17.6997 6.94733 18.7601 9.24133 18.9488C11.5353 19.1375 13.8144 18.4401 15.61 17L19.29 20.68C19.383 20.7738 19.4936 20.8482 19.6154 20.8989C19.7373 20.9497 19.868 20.9758 20 20.9758C20.132 20.9758 20.2627 20.9497 20.3846 20.8989C20.5065 20.8482 20.6171 20.7738 20.71 20.68C20.8903 20.4936 20.991 20.2444 20.991 19.985C20.991 19.7257 20.8903 19.4765 20.71 19.29ZM10 17C8.61556 17 7.26218 16.5895 6.11103 15.8203C4.95989 15.0511 4.06268 13.9579 3.53287 12.6788C3.00306 11.3997 2.86443 9.99226 3.13453 8.63439C3.40463 7.27653 4.07131 6.02925 5.05028 5.05028C6.02925 4.07131 7.27653 3.40463 8.63439 3.13453C9.99226 2.86443 11.3997 3.00306 12.6788 3.53287C13.9579 4.06268 15.0511 4.95989 15.8203 6.11103C16.5895 7.26218 17 8.61556 17 10C17 11.8565 16.2625 13.637 14.9498 14.9498C13.637 16.2625 11.8565 17 10 17Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="w-full sm:w-auto">
                                <a
                                    className="inline-flex items-center justify-center py-2 pl-2 pr-3 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full"
                                    href="#"
                                >
                                    <img
                                        className="h-8 w-8 mr-3 rounded-full object-cover"
                                        src="trizzle-assets/images/avatar-men.png"
                                        alt=""
                                    />
                                    <h4 className="text-white font-extrabold tracking-wide mr-5">
                                        John Doe
                                    </h4>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}