// Q6. Website Analytics System
use NoSQL_Lab3;
db.pageVisits.drop();

db.pageVisits.insertMany([
  { page: "/home", userId: 1, device: "mobile", browser: "Chrome", location: "Delhi", timestamp: ISODate("2026-10-20T09:00:00Z") },
  { page: "/home", userId: 2, device: "desktop", browser: "Edge", location: "Roorkee", timestamp: ISODate("2026-10-20T09:10:00Z") },
  { page: "/courses", userId: 1, device: "mobile", browser: "Chrome", location: "Delhi", timestamp: ISODate("2026-10-20T09:15:00Z") },
  { page: "/home", userId: 3, device: "tablet", browser: "Safari", location: "Dehradun", timestamp: ISODate("2026-10-21T10:00:00Z") },
  { page: "/courses", userId: 4, device: "desktop", browser: "Chrome", location: "Haridwar", timestamp: ISODate("2026-10-21T11:00:00Z") },
  { page: "/contact", userId: 2, device: "mobile", browser: "Chrome", location: "Roorkee", timestamp: ISODate("2026-10-21T12:00:00Z") }
]);

// 1. Show all page visits
db.pageVisits.find();

// 2. Most visited pages
db.pageVisits.aggregate([
  { $group: { _id: "$page", totalVisits: { $sum: 1 } } },
  { $sort: { totalVisits: -1 } }
]);

// 3. Commonly used devices
db.pageVisits.aggregate([
  { $group: { _id: "$device", totalVisits: { $sum: 1 } } },
  { $sort: { totalVisits: -1 } }
]);

// 4. Browser usage
db.pageVisits.aggregate([
  { $group: { _id: "$browser", totalVisits: { $sum: 1 } } },
  { $sort: { totalVisits: -1 } }
]);

// 5. Visits by location
db.pageVisits.aggregate([
  { $group: { _id: "$location", totalVisits: { $sum: 1 } } },
  { $sort: { totalVisits: -1 } }
]);
