import jsonData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const mySchema = new schema.Array(notification);
const normalizedData = normalize(jsonData, mySchema);

const getAllNotificationsByUser = (userId) => {
  const notifications = Object.values(normalizedData.entities.notifications);
  const notificationsByUser = [];

  for (const notification of notifications) {
    if (notification.author === userId) {
      notificationsByUser.push(notification);
    }
  }

  return notificationsByUser;
};

module.exports = {
  normalizedData,
  getAllNotificationsByUser,
};
