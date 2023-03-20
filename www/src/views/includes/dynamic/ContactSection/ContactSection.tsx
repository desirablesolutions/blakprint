export default function ContactSection() {
    return (
        <section className="py-24 relative">
            <img
                className="absolute top-0 left-0"
                src="pstls-assets/images/contacts/shadow-small.png"
                alt=""
            />
            <div className="container px-4 mx-auto relative">
                <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
                        <div className="max-w-md">
                            <h3 className="mb-5 text-xl md:text-2xl font-heading text-indigo-200">
                                Get in touch with us
                            </h3>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
                                Is the answer to your question missing?
                            </h2>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4 mb-10">
                                <p className="text-gray-500">E-mail</p>
                                <a
                                    className="inline-block text-black hover:underline"
                                    href="mailto:contact@pstls.com"
                                >
                                    contact@pstls.com
                                </a>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-10">
                                <p className="text-gray-500">Phone</p>
                                <p>+1-2020-555-109</p>
                            </div>
                            <div className="w-full px-4">
                                <p className="text-gray-500 mb-2">Socials</p>
                                <div>
                                    <a className="inline-block" href="#">
                                        <img src="pstls-assets/images/contacts/facebook.png" alt="" />
                                    </a>
                                    <a className="inline-block" href="#">
                                        <img src="pstls-assets/images/contacts/twitter.png" alt="" />
                                    </a>
                                    <a className="inline-block" href="#">
                                        <img src="pstls-assets/images/contacts/google.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}