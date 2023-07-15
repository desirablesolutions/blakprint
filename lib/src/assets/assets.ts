import { define, Definition } from "blakprint-utils-ts";



export type AssetTypeParams<TypeParams> = {

}

export type AssetType<TypeParams> = {

}


export type AssetDefinition<TypeParams> = Definition<AssetType<TypeParams>, unknown>




export function defineAsset<TypeParams>() {

    return define<AssetDefinition<TypeParams>, unknown>((params: any) => {
        const instance = {}

        return instance
    })
}



export function defineAssets<TypeParams, MetaParams>() {

    return define(() => {

        const instance: Array<AssetDefinition<any>> = []

        return instance
    })
}


const defineMyImages = defineAssets({ type: "images", data: [""]})

const imageData = defineMyImages.value() 