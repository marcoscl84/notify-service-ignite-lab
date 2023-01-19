import { SendNotificationUseCase } from "@app/useCases/send-notification";
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

interface SendNotificationPayload{
    content: string,
    category: string,
    recipientId: string
}

@Controller()
export class NotificationsController{
    constructor(
        private sendNotification: SendNotificationUseCase
    ){}
    
    @EventPattern('notifications.send-notification')
    async handleSendNotification(
        @Payload() { content, category, recipientId}: SendNotificationPayload
    ){
        console.log(content)
        await this.sendNotification.execute({
            content, category, recipientId
        })
    }
}