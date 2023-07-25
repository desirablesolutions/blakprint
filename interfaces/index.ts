export type LanguageInterface<MetaParams> = {
    title: string,
    isHosted: true | false
} & MetaParams



export type ClojureInterface = LanguageInterface<{
    title: string,
    isHosted: true
}>