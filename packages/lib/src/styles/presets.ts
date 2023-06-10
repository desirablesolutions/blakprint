import define from "../build/define"


export const presets = define<string, any>("presets", {
    type: "preset",
    version: 1
})

console.log(presets) // 