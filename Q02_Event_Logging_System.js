// Q2. Event Logging System
use NoSQL_Lab3;
db.eventLogs.drop();

db.eventLogs.insertMany([
  { userId: 1, username: "aman", eventType: "login", timestamp: ISODate("2026-10-20T09:00:00Z"), ip: "192.168.1.10" },
  { userId: 1, username: "aman", eventType: "failed-login", timestamp: ISODate("2026-10-20T09:05:00Z"), ip: "192.168.1.10" },
  { userId: 1, username: "aman", eventType: "failed-login", timestamp: ISODate("2026-10-20T09:06:00Z"), ip: "192.168.1.10" },
  { userId: 2, username: "riya", eventType: "file-upload", timestamp: ISODate("2026-10-20T10:00:00Z"), ip: "192.168.1.11" },
  { userId: 2, username: "riya", eventType: "logout", timestamp: ISODate("2026-10-20T10:30:00Z"), ip: "192.168.1.11" },
  { userId: 3, username: "neha", eventType: "password-change", timestamp: ISODate("2026-10-21T11:00:00Z"), ip: "192.168.1.12" },
  { userId: 1, username: "aman", eventType: "failed-login", timestamp: ISODate("2026-10-21T09:06:00Z"), ip: "192.168.1.10" }
]);

// 1. Display all event records
db.eventLogs.find();

// 2. Find failed login attempts
db.eventLogs.find({ eventType: "failed-login" });

// 3. Users with repeated failed-login attempts (2 or more)
db.eventLogs.aggregate([
  { $match: { eventType: "failed-login" } },
  { $group: { _id: "$userId", username: { $first: "$username" }, failedAttempts: { $sum: 1 } } },
  { $match: { failedAttempts: { $gte: 2 } } }
]);

// 4. Count frequency of every event type
db.eventLogs.aggregate([
  { $group: { _id: "$eventType", totalEvents: { $sum: 1 } } },
  { $sort: { totalEvents: -1 } }
]);

// 5. Events for one user, newest first
db.eventLogs.find({ userId: 1 }).sort({ timestamp: -1 });
