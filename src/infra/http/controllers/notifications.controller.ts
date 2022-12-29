import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateNotificationBady } from '../dtos/create-notification-body';
import { SendNotificationUseCase } from '@app/useCases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotificationUseCase } from '@app/useCases/cancel-notification';
import { ReadNotificationUseCase } from '@app/useCases/read-notification';
import { UnreadNotificationUseCase } from '@app/useCases/unread-notification';
import { GetRecipientNotifications } from '@app/useCases/get-recipient-notifications';
import { CountRecipientNotifications } from '@app/useCases/count-recipient-notif';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotificationUseCase: SendNotificationUseCase,
    private cancelNotification: CancelNotificationUseCase,
    private readNotification: ReadNotificationUseCase,
    private unreadNotification: UnreadNotificationUseCase,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(
    @Param('recipientId') recipientId: string,
  ) /* : Promise<{ count: number }> */ {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });

    return {
      count,
    };
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }

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
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
