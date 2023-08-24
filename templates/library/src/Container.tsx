export default function NavBarContainer({ children, sx}: any) {
    return (
      <section className="sticky top-0 left-0 z-50 w-full backdrop-blur-sm">
      <nav>
        <div className="container px-4 mx-auto">
          <div className="relative flex items-center h-24">
      {children}
          </div>
        </div>
      </nav>
  
    </section>
    
    )
}