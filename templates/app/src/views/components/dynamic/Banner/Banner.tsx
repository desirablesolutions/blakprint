export default function Banner() {
    return (
        <section className="py-3">
            <div className="container px-4 mx-auto">
                <div className="relative pt-12 lg:py-18 px-8 md:px-18 rounded-2xl overflow-hidden">
                    <img
                        className="absolute top-0 left-0 h-full w-full object-cover"
                        src="trizzle-assets/images/banner-background.png"
                        alt=""
                    />
                    <div className="relative max-w-sm mx-auto lg:mx-0 mb-16 lg:mb-0">
                        <h3 className="text-3xl font-bold text-white mb-3">
                            Ideal banner asset for your dashboard project
                        </h3>
                        <p className="font-medium text-blue-200 mb-6">
                            Go global with our UI Resources and solutions
                        </p>
                        <a
                            className="inline-block w-full sm:w-auto px-6 md:px-18 py-3 leading-6 text-center font-semibold text-blue-50 bg-gray-500 hover:bg-gray-600 transition duration-200 rounded-lg"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>
                    <img
                        className="hidden lg:block absolute bottom-0 right-0 lg:max-w-lg xl:max-w-2xl xl:mr-18"
                        src="trizzle-assets/images/banner-placeholder-dashboard.png"
                        alt=""
                    />
                    <img
                        className="relative lg:hidden block mx-auto"
                        src="trizzle-assets/images/banner-placeholder-dashboard.png"
                        alt=""
                    />
                </div>
            </div>
        </section>

    )
}