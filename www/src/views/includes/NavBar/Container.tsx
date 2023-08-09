export default function NavBarContainer({ children }: any) {
  return (
    <nav className="sticky backdrop-blur-lg top-0 left-0 w-full py-6 bg-transparent mb-12 md:mb-24 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center relative">{children}</div>
      </div>
    </nav>
  );
}
