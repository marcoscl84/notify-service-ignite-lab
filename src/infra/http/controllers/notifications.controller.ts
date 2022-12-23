import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateNotificationBady } from '../dtos/create-notification-body';
import { SendNotificationUseCase } from '@app/useCases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';

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
      notification: NotificationViewModel.toHTTP(notification)
     };
  }
}
