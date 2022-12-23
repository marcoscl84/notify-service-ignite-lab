import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateNotificationBady } from '../dtos/create-notification-body';
import { SendNotificationUseCase } from 'src/app/useCases/send-notification-useCase';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotificationUseCase: SendNotificationUseCase) {}

  @Post()
  async create(@Body() body: CreateNotificationBady) {
    console.log(body);
    const { category, content, recipientId } = body;

    const { notification } = await this.sendNotificationUseCase.execute({
      recipientId,
      content,
      category,
    });

    // return { notification };
    return { 
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId
     };
  }
}
