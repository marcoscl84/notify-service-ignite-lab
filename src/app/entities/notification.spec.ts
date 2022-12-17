import { Content } from './content';
import { Notification } from './Notification';

// Testes de Content
describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova mensagem'),
      category: 'social',
      recipientId: 'example',
    });

    expect(notification).toBeTruthy();
  });
});
