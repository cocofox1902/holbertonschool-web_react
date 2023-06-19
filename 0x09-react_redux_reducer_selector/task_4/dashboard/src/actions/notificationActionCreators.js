import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../constants/notificationActionTypes';

function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index: index,
  };
}

function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
}

module.exports = {
  markAsAread,
  setNotificationFilter,
};
