import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/uiActionTypes';

function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email: email,
      password: password,
    },
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

function loginRequest(email, password) {
  return function (dispatch) {
    dispatch(login(email, password));
    return fetch('http://localhost:3000/login-success.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((json) => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
}

module.exports = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
};
