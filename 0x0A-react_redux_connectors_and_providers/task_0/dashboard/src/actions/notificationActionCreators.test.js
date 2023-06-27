import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../constants/notificationActionTypes';

describe('markAsAread', () => {
  it('returns an action object with the MARK_AS_READ type and the given index', () => {
    const index = 1;
    const result = markAsAread(index);
    expect(result).toEqual({ type: MARK_AS_READ, index });
  });
});

describe('setNotificationFilter', () => {
  it('returns an action object with the SET_TYPE_FILTER type and the given filter', () => {
    const filter = 'urgent';
    const result = setNotificationFilter(filter);
    expect(result).toEqual({ type: SET_TYPE_FILTER, filter });
  });
});
