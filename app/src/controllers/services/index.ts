import services from "blakprint/services"
import NotionService from "bp-notion-service"

const { defineServices, defineService } = services()

export const ApplicationServices = defineServices({
    NotionService,
    
})