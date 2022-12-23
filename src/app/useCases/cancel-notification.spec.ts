import { Content } from '@app/entities/content';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotificationUseCase } from './cancel-notification';
import { Notification } from '@app/entities/notification';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotificationUseCase(
      notificationsRepository,
    );

    const notification = new Notification({
        category: 'social',
        content: new Content('Nova msg'),
        recipientId: 'ex-rec-id',
    })

    await notificationsRepository.create(notification)

    await cancelNotification.execute({
     notificationId: notification.id
    });

    // espera que venha um valor tipo Date
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
    
  });
});
