export default function Container(props: any) {

    const { children } = props

    return (
        <div className="relative bg-transparent pt-[120px] pb-[110px] lg:pt-[150px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
  {children}
           

          </div>
        </div>
      </div>
    )
}