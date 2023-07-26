


export default function Image({ url, src}: any) {
    return (
        <a href={url} className="flex items-center justify-center w-full">
        <img src={src} alt="brand image" className="w-full h-10" />
      </a>
          
    )
}