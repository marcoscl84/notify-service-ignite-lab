import { Module } from '@nestjs/common';
import { SendNotificationUseCase } from '@app/useCases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotificationUseCase } from '@app/useCases/cancel-notification';
import { CountRecipientNotifications } from '@app/useCases/count-recipient-notif';
import { GetRecipientNotifications } from '@app/useCases/get-recipient-notifications';
import { ReadNotificationUseCase } from '@app/useCases/read-notification';
import { UnreadNotificationUseCase } from '@app/useCases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotificationUseCase,
    CancelNotificationUseCase,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotificationUseCase,
    UnreadNotificationUseCase,
  ],
})
export class HttpModule {}
