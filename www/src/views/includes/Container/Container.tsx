export default function Container(props: any) {

    const { children } = props
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24 overflow-x-hidden bg-white bg-opacity-25">
    {children}
      </main>
    )
}