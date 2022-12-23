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
}
