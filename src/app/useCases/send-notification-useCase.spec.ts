import { SendNotificationUseCase } from './send-notification-useCase';
import { Notification } from '../entities/notification';

// simula uma tabela no banco
let notifications: Notification[] = [];

// insere novo dado na pseudo tabela
const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotificationUseCase(
      notificationsRepository,
    );

    /* const { notification } = */ await sendNotification.execute({
      category: 'social',
      content: 'This is a notification',
      recipientId: 'example-recipient-id',
    });

    console.log(notifications);
    expect(notifications).toHaveLength(1);
    // expect(notification).toBeTruthy();
  });
});
