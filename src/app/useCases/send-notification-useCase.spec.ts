import { SendNotificationUseCase } from './send-notification-useCase';

import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotificationUseCase(
      notificationsRepository,
    );

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'example-recipient-id',
    });

    // console.log(notificationsRepository.notifications);

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
    // expect(notification).toBeTruthy();
  });
});
