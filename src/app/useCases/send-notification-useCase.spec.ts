import { SendNotificationUseCase } from './send-notification-useCase';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotificationUseCase();

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'THis is a notification',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
