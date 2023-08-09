export default function NavBarFavicon(props: any) {

    const { title } = props
    return (
        <a
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold"
        href="#"
      >
        <img
          className="h-10"
          src={title}
          alt=""
          width="auto"
        />
      </a>
    )
}