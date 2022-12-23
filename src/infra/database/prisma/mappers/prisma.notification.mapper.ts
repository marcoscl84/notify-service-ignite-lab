import { Notification } from "@app/entities/notification"

export class PrismaNotificationMapper{
    // método estático pra não necessitar instanciar
    static toPrisma(notification: Notification){
        return {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                // createdAt: notification.createdAt,
        };
    }
}