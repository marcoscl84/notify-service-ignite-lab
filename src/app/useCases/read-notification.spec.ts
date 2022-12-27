import { Content } from '@app/entities/content';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';

import { Notification } from '@app/entities/notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { MakeNotification } from '@test/factories/notification-factory';
import { ReadNotificationUseCase } from './read-notification';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotificationUseCase(
      notificationsRepository,
    );

    // cria notificação
    const notification = new Notification(MakeNotification());

    // insere no banco
    await notificationsRepository.create(notification);

    // marca como lida
    await readNotification.execute({
      notificationId: notification.id,
    });

    // espera que venha um valor tipo Date
    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('Should not be able to read a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotificationUseCase(
      notificationsRepository,
    );

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notif-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
