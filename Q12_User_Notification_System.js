// Q12. User Notification System
use NoSQL_Lab3;
db.notifications.drop();

db.notifications.insertMany([
  { notificationId: 1, userId: 101, type: "message", message: "You have a new message", isRead: false, createdAt: new Date() },
  { notificationId: 2, userId: 101, type: "order-update", message: "Your order has shipped", isRead: false, createdAt: new Date() },
  { notificationId: 3, userId: 102, type: "system-alert", message: "Scheduled maintenance", isRead: true, createdAt: new Date() },
  { notificationId: 4, userId: 101, type: "system-alert", message: "Profile updated", isRead: false, createdAt: new Date() }
]);

// 1. Display all notifications for user 101
db.notifications.find({ userId: 101 });

// 2. Retrieve unread notifications for user 101
db.notifications.find({ userId: 101, isRead: false }).sort({ createdAt: -1 });

// 3. Mark notification 1 as read
db.notifications.updateOne(
  { notificationId: 1, userId: 101 },
  { $set: { isRead: true, readAt: new Date() } }
);

// 4. Mark all notifications of user 101 as read
db.notifications.updateMany(
  { userId: 101, isRead: false },
  { $set: { isRead: true, readAt: new Date() } }
);

// 5. Count unread notifications for each user
db.notifications.aggregate([
  { $match: { isRead: false } },
  { $group: { _id: "$userId", unreadCount: { $sum: 1 } } }
]);
