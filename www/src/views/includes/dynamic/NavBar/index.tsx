import Header from "@components/dynamic/Header"
import type { NavBarProps, JSXComponentType } from "blakprint/dist/typings/index.d"

export default function NavBar(props: NavBarProps): JSXComponentType<NavBarProps> {
    return (
        <Header />
    )
}