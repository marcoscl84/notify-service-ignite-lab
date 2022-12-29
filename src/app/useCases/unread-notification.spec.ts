import { Content } from '@app/entities/content';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';

import { Notification } from '@app/entities/notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { MakeNotification } from '@test/factories/notification-factory';
import { UnreadNotificationUseCase } from './unread-notification';

describe('Unread notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotificationUseCase(
      notificationsRepository,
    );

    // cria notificação como lida em uma data
    const notification = MakeNotification({
      readAt: new Date(),
    });

    // insere no banco
    await notificationsRepository.create(notification);

    // marca como lida
    await unreadNotification.execute({
      notificationId: notification.id,
    });

    // espera que venha um valor seja nulo
    expect(notificationsRepository.notifications[0].readAt).toBeNull;
  });

  it('Should not be able to unread a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotificationUseCase(
      notificationsRepository,
    );

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notif-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
