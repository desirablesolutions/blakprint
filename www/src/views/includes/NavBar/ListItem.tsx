export default function ListItem({ children, navItemStyles, NavLink }: any) {
    return (
        <>
          <li>
            <a
              href={NavLink}
              className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
            >
              {children}
            </a>
          </li>
        </>
      );
  };