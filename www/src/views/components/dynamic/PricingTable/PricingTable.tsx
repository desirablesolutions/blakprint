export default function PricingTable() {
    return (
        <section className="py-24">
            <div className="container px-4 mx-auto">
                <div className="max-w-xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
                        Choose a plan
                    </h1>
                    <p className="leading-8">
                        If you have ever wondered how to develop your brand, this is the place
                        for you. Take a big step forward in growing your business with this
                        great tool.
                    </p>
                </div>
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                        <div className="p-12 max-w-md mx-auto bg-indigo-100">
                            <div className="flex mb-12 items-end justify-between">
                                <h2 className="text-4xl font-heading">Free</h2>
                                <h5 className="text-xl font-bold text-indigo-300">$0,00</h5>
                            </div>
                            <ul className="mb-10">
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8">1 component categorie</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8">1 mobile component</span>
                                </li>
                                <li className="flex items-center">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8">1 Key Visual</span>
                                </li>
                            </ul>
                            <a
                                className="block w-full px-4 py-3 text-center text-white font-bold bg-black hover:bg-gray-900"
                                href="#"
                            >
                                Try for Free
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
                        <div className="p-12 max-w-md mx-auto bg-black">
                            <div className="flex mb-12 items-end justify-between">
                                <h2 className="text-4xl font-heading text-white">Premium</h2>
                                <h5 className="text-xl font-bold text-indigo-300">$55,00</h5>
                            </div>
                            <ul className="mb-10">
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8 text-white">
                                        3 component categorie
                                    </span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8 text-white">3 mobile component</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8 text-white">3 Key Visual</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8 text-white">
                                        Popular frameworks support
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8 text-white">Infinite content</span>
                                </li>
                            </ul>
                            <a
                                className="block w-full px-4 py-3 text-center text-white font-bold bg-indigo-300 hover:bg-indigo-400"
                                href="#"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <div className="p-12 max-w-md mx-auto bg-indigo-100">
                            <div className="flex mb-12 items-end justify-between">
                                <h2 className="text-4xl font-heading">Basic</h2>
                                <h5 className="text-xl font-bold text-indigo-300">$25,00</h5>
                            </div>
                            <ul className="mb-10">
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8">3 component categorie</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8">3 mobile component</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <img
                                        className="mr-2"
                                        src="pstls-assets/icons/pricing-1-check-circle.svg"
                                        alt=""
                                    />
                                    <span className="leading-8">3 Key Visual</span>
                                </li>
                            </ul>
                            <a
                                className="block w-full px-4 py-3 text-center text-white font-bold bg-black hover:bg-gray-900"
                                href="#"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}