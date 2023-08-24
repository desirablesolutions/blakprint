export default function NavBarFavicon({ favicon } : any) {
    return (
   <>
        <a
            className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 xl:block top-1/2 left-1/2"
            href="#"
          >
            <img
              className="h-14"
              src="assets/images/logo.png"
              alt=""
            />
          </a>
          <a className="inline-block xl:hidden" href="#">
            <img
              className="h-14"
              src="assets/images/logo.png"              alt=""
            />
          </a>
   
   </>
    )
}