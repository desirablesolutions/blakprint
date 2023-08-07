import { define, defineStyle } from "blakprint"



const web_font = defineStyle({
    fontFamily: "Roboto, sans-serif",
})

export const SitePages = define<{
    [key: symbol]: {
        [key: symbol]: any
    }
}>(() => {
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
}, {
    "page:name": {
        data: "any"
    }
}).value()
