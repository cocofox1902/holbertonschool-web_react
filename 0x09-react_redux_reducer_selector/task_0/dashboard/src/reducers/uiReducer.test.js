import { uiReducer, initState } from './uiReducer';
import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initState,
      isNotificationDrawerVisible: true,
    };
    expect(uiReducer(initState, action)).toEqual(expectedState);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initState,
      isNotificationDrawerVisible: false,
    };
    expect(uiReducer(initState, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = {
      ...initState,
      isUserLoggedIn: true,
    };
    expect(uiReducer(initState, action)).toEqual(expectedState);
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = {
      ...initState,
      isUserLoggedIn: false,
    };
    expect(uiReducer(initState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    const expectedState = {
      ...initState,
      isUserLoggedIn: false,
    };
    expect(uiReducer(initState, action)).toEqual(expectedState);
  });
});
