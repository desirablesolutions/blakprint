import pages from "blakprint/pages"


const { definePages } = pages()



export const SitePages = definePages({
    home: {
        metaData: {},
        data: {
            hero:{
                title: meta.getTitle() as string
            }
        },
        pages: []
    }
})