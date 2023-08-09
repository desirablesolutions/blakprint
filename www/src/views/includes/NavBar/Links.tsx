export default function NavBarLinks({ links }: any) {

    function Link(link: any) {
      return (
        <li className="group relative">
        <a
          className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium"
          href={link.url}
        >
          {link.name}
        </a>
       
      </li>
      )
    }

    function Container({ children }: any) {
      return (
        <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
        {children}
       
      </ul>
      )
    }

    return (
       <Container>
          {
            links.map((link: any) => {
              return (<Link {...link} key={Date.now()}/>)
            })
          }
       </Container>
    )
}