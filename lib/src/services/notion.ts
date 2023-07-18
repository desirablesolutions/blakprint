import { defineService } from "./services"



export function defineNotionService() {
    return defineService().value(() => {
        return {}
    })
}