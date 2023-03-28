export interface DynamicComponent extends JSX.Element { }

export type ImageProps = {
    src?: string;
}
export type HeroProps = {
    title?: string,
    cover?: ImageProps;
}

export default function Hero(props: HeroProps): DynamicComponent {
    return (
        <section className="pt-24 md:py-0 relative bg-black font-mono">
            <div className="container px-6 mx-auto flex flex-wrap justify-center items-center">

                <div className="w-full md:w-1/2 px-6 md:pt-24 mb-12 md:mb-0">
                    <div className="w-full items-center justify-center flex flex-col">
                        <img
                            className="mx-auto mb-6 w-3/4 md:w-2/3"
                            src="https://github.com/blakprint/blakprint/raw/main/docs/logo.png"
                            alt=""
                        />
                        <h2 className="text-5xl md:text-6xl font-heading mb-6 text-white text-center">
                            Unique Templates
                        </h2>
                        <p className="mb-6 leading-8 text-white text-center">
                            If you have ever wondered how to develop your brand, this is the place for you. Take a big step forward in growing your business with this great tool.
                        </p>
                        <div className="flex justify-center">
                            <a className="inline-block mr-4" href="#">
                                <img src="pstls-assets/images/applications/appstore.svg" alt="" />
                            </a>
                            <a className="inline-block" href="#">
                                <img src="pstls-assets/images/applications/googleplay.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}