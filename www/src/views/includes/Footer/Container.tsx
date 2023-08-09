export default function FooterContainer({ children }: any) {
    return (
        <section className="relative pt-20 pb-8 overflow-hidden backdrop-blur-sm">
        <img
          className="absolute top-0 left-0 min-w-max xs:min-w-0 w-112 xs:w-full h-full"
          src="saturn-assets/images/footers/orange-background.png"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
         {children}
        </div>
      </section>
    )
}