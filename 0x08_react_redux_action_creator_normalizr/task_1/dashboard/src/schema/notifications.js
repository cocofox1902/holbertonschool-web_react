import jsonData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });
const mySchema = new schema.Array(notification);
const normalizedData = normalize(jsonData, mySchema);

const getAllNotificationsByUser = (userId) => {
  return Object.values(normalizedData.entities.notifications).filter((notif) => notif.author === userId);
};

module.exports = {
  normalizedData,
  getAllNotificationsByUser,
};
