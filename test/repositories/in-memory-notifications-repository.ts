import { NotificationsRepository } from '@app/repository/notifications-repository';
import { Notification } from '@app/entities/notification';

// insere novo dado na pseudo tabela
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{

  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  findById(notification: string): Promise<Notification> {
    throw new Error('Method not implemented.');
  }
  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
