import Immutable from 'immutable';
import notificationReducer, { initState } from './notificationReducer';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, message: 'Notification 1' },
        { id: 2, message: 'Notification 2' },
      ],
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
      ],
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const state = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
      ],
    };
    const action = { type: MARK_AS_READ, index: 1 };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: true },
      ],
    };
    expect(notificationReducer(state, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const state = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
      ],
    };
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      filter: 'URGENT',
      notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
      ],
    };
    expect(notificationReducer(state, action)).toEqual(expectedState);
  });
});
