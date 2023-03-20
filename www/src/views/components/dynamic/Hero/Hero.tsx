export default function Hero() {
    return (
        <section className="pt-24 md:py-0 relative bg-black">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full md:w-1/2 px-4 md:py-24 mb-12 md:mb-0">
                        <div className="max-w-md">
                            <img
                                className="mb-6"
                                src="pstls-assets/images/applications/logo.svg"
                                alt=""
                            />
                            <h2 className="text-5xl md:text-6xl font-heading mb-6 text-white">
                                Unique Templates
                            </h2>
                            <p className="mb-6 leading-8 text-white">
                                If you have ever wondered how to develop your brand, this is the
                                place for you. Take a big step forward in growing your business with
                                this great tool.
                            </p>
                            <div className="flex">
                                <a className="inline-block mr-4" href="#">
                                    <img src="pstls-assets/images/applications/appstore.svg" alt="" />
                                </a>
                                <a className="inline-block" href="#">
                                    <img
                                        src="pstls-assets/images/applications/googleplay.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 relative">
                        <img
                            className="relative z-10"
                            src="pstls-assets/images/applications/small-group-phones.png"
                            alt=""
                        />
                        <img
                            className="absolute top-0 right-0 -z-10"
                            src="pstls-assets/images/applications/pink-shadow.png"
                            alt=""
                        />
                        <img
                            className="absolute bottom-0 left-0 -z-10"
                            src="pstls-assets/images/applications/purple-shadow.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}