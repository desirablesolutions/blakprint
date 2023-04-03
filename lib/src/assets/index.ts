import { define } from "build/define"


const defineAsset = define((props) => {
    return props
})

const defineVideoAsset = define((props) => {
    return defineAsset({
        type: "video",
        ...props
    })
})

export default { defineAsset, defineVideoAsset }