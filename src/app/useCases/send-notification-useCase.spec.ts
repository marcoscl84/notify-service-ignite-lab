import { SendNotificationUseCase } from './send-notification-useCase';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotificationUseCase = new SendNotificationUseCase();

    const { notification } = sendNotificationUseCase.execute({
      recipientId: 'example',
      content: 'This is a notification',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
