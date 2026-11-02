// Q1. Student Activity Tracking System
// Run in mongosh. Database: NoSQL_Lab3
use NoSQL_Lab3;
db.students.drop();

db.students.insertMany([
  {
    studentId: 101, name: "Aman", email: "aman@example.com",
    enrolledCourses: ["MongoDB", "Python"],
    attendance: { totalClasses: 20, attended: 18, percentage: 90 },
    skills: ["Java", "Python", "Communication"],
    recentActivities: [
      { activity: "Completed MongoDB quiz", type: "quiz", date: ISODate("2026-10-20") },
      { activity: "Submitted Python assignment", type: "assignment", date: ISODate("2026-10-22") }
    ]
  },
  {
    studentId: 102, name: "Riya", email: "riya@example.com",
    enrolledCourses: ["MongoDB", "Java"],
    attendance: { totalClasses: 20, attended: 12, percentage: 60 },
    skills: ["C", "Java"],
    recentActivities: [
      { activity: "Watched MongoDB lecture", type: "lecture", date: ISODate("2026-10-23") }
    ]
  },
  {
    studentId: 103, name: "Neha", email: "neha@example.com",
    enrolledCourses: ["Python", "Web Development"],
    attendance: { totalClasses: 20, attended: 19, percentage: 95 },
    skills: ["HTML", "CSS", "Python"],
    recentActivities: [
      { activity: "Completed project", type: "project", date: ISODate("2026-10-24") }
    ]
  }
]);

// 1. Display all students
db.students.find();

// 2. Students enrolled in MongoDB
db.students.find({ enrolledCourses: "MongoDB" });

// 3. Students with attendance of at least 75%
db.students.find({ "attendance.percentage": { $gte: 75 } });

// 4. Students having Python skill
db.students.find({ skills: "Python" });

// 5. Students who performed a quiz activity
db.students.find({ "recentActivities.type": "quiz" });

// 6. Students with a project activity
db.students.find({ recentActivities: { $elemMatch: { type: "project" } } });
