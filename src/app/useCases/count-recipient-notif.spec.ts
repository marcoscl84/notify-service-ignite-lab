import { Content } from '@app/entities/content';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';

import { CountRecipientNotifications } from './count-recipient-notif';
import { MakeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications', () => {
  it('should be able to count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      MakeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      MakeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      MakeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    // espera que venha um valor tipo Date
    // expect(notificationsRepository.notifications[0].canceledAt).toEqual(
    //   expect.any(Date),
    // );
    expect(count).toEqual(2);
  });
});
