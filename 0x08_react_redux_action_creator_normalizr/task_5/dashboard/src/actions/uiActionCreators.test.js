import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from '../constants/uiActionTypes';

describe('login', () => {
  it('returns an action object with the LOGIN type and the given email and password', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const result = login(email, password);
    expect(result).toEqual({ type: LOGIN, user: { email, password } });
  });
});

describe('logout', () => {
  it('returns an action object with the LOGOUT type', () => {
    const result = logout();
    expect(result).toEqual({ type: LOGOUT });
  });
});

describe('displayNotificationDrawer', () => {
  it('returns an action object with the DISPLAY_NOTIFICATION_DRAWER type', () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });
});

describe('hideNotificationDrawer', () => {
  it('returns an action object with the HIDE_NOTIFICATION_DRAWER type', () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
