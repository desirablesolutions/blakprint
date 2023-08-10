export default function HeroContainer(props: any) {

    const { children } = props

    return (
   
      <section className="relative pb-24 lg:pb-40 overflow-hidden">
      <img
        className="absolute bottom-0 right-0 w-52 md:w-auto"
        src="saturn-assets/images/headers/star-header-right-bottom.png"
        alt=""
      />

      <div className="relative container px-4 mx-auto z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">


           {children}

            
          </div>
        </div>
      </div>
    </section>
    )
}