export default function MajorSection() {
    return (
        <section className="pt-24 md:py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-md lg:max-w-2xl mx-auto mb-10 text-center">
                    <span className="text-gray-400 uppercase">New feature</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mt-2 mb-6">
                        <span>Take</span>
                        <span className="text-indigo-200">quick action</span>
                        <span>that increases your brand's regular profit.</span>
                    </h1>
                    <p className="leading-8">
                        If you have ever wondered how to develop your brand, this is the place
                        for you. Take a&nbsp;big step forward in growing your business with this
                        great tool.
                    </p>
                </div>
                <div className="max-w-md lg:max-w-3xl xl:max-w-4xl mx-auto relative">
                    <img
                        className="block w-full"
                        src="pstls-assets/images/call-to-action/sofa.jpeg"
                        alt=""
                    />
                    <div>
                        <a
                            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center w-20 lg:w-40 h-20 lg:h-40 bg-white hover:bg-indigo-100 text-center font-heading text-md lg:text-2xl font-bold rounded-full"
                            href="#"
                        >
                            Try
                            <br />
                            Demo
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 h-full md:flex md:flex-col md:justify-center">
                <div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-orange-100" />
                <div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-red-100" />
                <div className="h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 bg-lime-100" />
            </div>
            <div className="absolute top-0 right-0 h-full md:flex md:flex-col md:justify-center">
                <div className="mb-8 h-16 sm:h-32 lg:h-64 w-16 sm:w-32 lg:w-64 bg-pink-100" />
                <div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 bg-indigo-100" />
                <div className="hidden md:block h-32 lg:h-64 w-32 lg:w-64 bg-blue-100" />
            </div>
        </section>

    )
}