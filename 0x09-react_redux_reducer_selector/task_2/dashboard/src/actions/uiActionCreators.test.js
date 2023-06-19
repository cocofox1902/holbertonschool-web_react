import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from './uiActionCreators';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/uiActionTypes';

describe('uiActionCreators', () => {
  describe('login', () => {
    it('should create a LOGIN action with user email and password', () => {
      const email = 'test@example.com';
      const password = 'password123';
      const expectedAction = {
        type: LOGIN,
        user: { email, password },
      };
      expect(login(email, password)).toEqual(expectedAction);
    });
  });

  describe('logout', () => {
    it('should create a LOGOUT action', () => {
      const expectedAction = {
        type: LOGOUT,
      };
      expect(logout()).toEqual(expectedAction);
    });
  });

  describe('displayNotificationDrawer', () => {
    it('should create a DISPLAY_NOTIFICATION_DRAWER action', () => {
      const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER,
      };
      expect(displayNotificationDrawer()).toEqual(expectedAction);
    });
  });

  describe('hideNotificationDrawer', () => {
    it('should create a HIDE_NOTIFICATION_DRAWER action', () => {
      const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER,
      };
      expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
  });

  describe('loginSuccess', () => {
    it('should create a LOGIN_SUCCESS action', () => {
      const expectedAction = {
        type: LOGIN_SUCCESS,
      };
      expect(loginSuccess()).toEqual(expectedAction);
    });
  });

  describe('loginFailure', () => {
    it('should create a LOGIN_FAILURE action', () => {
      const expectedAction = {
        type: LOGIN_FAILURE,
      };
      expect(loginFailure()).toEqual(expectedAction);
    });
  });

  describe('loginRequest', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      dispatch.mockClear();
    });

    it('should dispatch login and loginSuccess actions when login is successful', () => {
      const email = 'test@example.com';
      const password = 'password123';
      const expectedActions = [
        { type: LOGIN, user: { email, password } },
        { type: LOGIN_SUCCESS },
      ];

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ success: true }),
        })
      );

      return loginRequest(
        email,
        password
      )(dispatch).then(() => {
        expect(dispatch.mock.calls.length).toBe(2);
        expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
        expect(dispatch.mock.calls[1][0]).toEqual(expectedActions[1]);
      });
    });

    it('should dispatch login and loginFailure actions when login fails', () => {
      const email = 'test@example.com';
      const password = 'password123';
      const expectedActions = [
        { type: LOGIN, user: { email, password } },
        { type: LOGIN_FAILURE },
      ];

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ success: false }),
        })
      );

      return loginRequest(
        email,
        password
      )(dispatch).then(() => {
        expect(dispatch.mock.calls.length).toBe(2);
        expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
        expect(dispatch.mock.calls[1][0]).toEqual(expectedActions[1]);
      });
    });
  });
});
