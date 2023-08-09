import { defineUsePages } from "blakprint";



export function usePage() {

    return defineUsePages(({ type, id } : any) => {
         return {
             home: {
                 name: "Home",
                 path: "/"
             },
             about: {
                 name: "About",
                 path: "/about"
             },
         }
    })
}

