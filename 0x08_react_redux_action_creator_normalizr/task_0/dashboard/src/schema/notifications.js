import * as schema from '../../../dashboard/notifications.json';

function getAllNotificationsByUser(userId) {
    return schema.default.filter((notification) => notification.author.id === userId);
}

export { getAllNotificationsByUser };