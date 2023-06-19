import { getAllNotificationsByUser } from './notifications';
import notifications from '../../../dashboard/notifications.json';

describe('getAllNotificationsByUser', () => {
  it('returns an empty array when no notifications match the user id', () => {
    const userId = 'nonexistent-user-id';
    const result = getAllNotificationsByUser(userId);
    expect(result).toEqual([]);
  });

  it('returns all notifications authored by the given user id', () => {
    const userId = notifications[0].author.id;
    const result = getAllNotificationsByUser(userId);
    const expected = notifications.filter((notification) => notification.author.id === userId);
    expect(result).toEqual(expected);
  });

  it('returns an empty array when given an empty user id', () => {
    const userId = '';
    const result = getAllNotificationsByUser(userId);
    expect(result).toEqual([]);
  });
});
