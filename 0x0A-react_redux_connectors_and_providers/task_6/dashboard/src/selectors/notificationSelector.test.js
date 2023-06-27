import Immutable from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('notificationSelector', () => {
  const state = Immutable.fromJS({
    filter: 'DEFAULT',
    notifications: [
      { id: 1, message: 'Notification 1', isRead: false },
      { id: 2, message: 'Notification 2', isRead: true },
      { id: 3, message: 'Notification 3', isRead: false },
    ],
  });

  it('should return the filter type selected', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('should return all notifications', () => {
    const expectedNotifications = Immutable.Map({
      1: { id: 1, message: 'Notification 1', isRead: false },
      2: { id: 2, message: 'Notification 2', isRead: true },
      3: { id: 3, message: 'Notification 3', isRead: false },
    });
    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  it('should return unread notifications', () => {
    const expectedUnreadNotifications = Immutable.Map({
      1: { id: 1, message: 'Notification 1', isRead: false },
      3: { id: 3, message: 'Notification 3', isRead: false },
    });
    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
