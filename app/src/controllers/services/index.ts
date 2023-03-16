import services from "blakprint/dist/controllers/services"
import { notion } from {}




const { defineServices, defineService } = services




export const ApplicationServices = defineServices({
    NotionService,
    TwitchService: defineService(() =>{

    })
})