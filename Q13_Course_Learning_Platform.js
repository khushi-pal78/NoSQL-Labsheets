// Q13. Course Learning Platform
use NoSQL_Lab3;
db.learningCourses.drop();

db.learningCourses.insertMany([
  {
    courseId: 1, title: "MongoDB Basics",
    instructor: { name: "Mr Sharma", email: "sharma@example.com" },
    modules: [{ title: "Introduction" }, { title: "CRUD" }, { title: "Aggregation" }],
    students: [
      { studentId: 101, name: "Aman", progress: 100, completed: true },
      { studentId: 102, name: "Riya", progress: 60, completed: false }
    ]
  },
  {
    courseId: 2, title: "Python",
    instructor: { name: "Ms Verma", email: "verma@example.com" },
    modules: [{ title: "Basics" }, { title: "Functions" }],
    students: [
      { studentId: 103, name: "Neha", progress: 40, completed: false },
      { studentId: 101, name: "Aman", progress: 80, completed: false }
    ]
  }
]);

// 1. Display all courses and enrolled students
db.learningCourses.find();

// 2. Students with progress of at least 75%
db.learningCourses.aggregate([
  { $unwind: "$students" },
  { $match: { "students.progress": { $gte: 75 } } },
  { $project: { _id: 0, course: "$title", student: "$students.name", progress: "$students.progress", completed: "$students.completed" } }
]);

// 3. Students who completed their course
db.learningCourses.aggregate([
  { $unwind: "$students" },
  { $match: { "students.completed": true } },
  { $project: { _id: 0, course: "$title", student: "$students.name", progress: "$students.progress" } }
]);

// 4. Students with progress below 50%
db.learningCourses.aggregate([
  { $unwind: "$students" },
  { $match: { "students.progress": { $lt: 50 } } },
  { $project: { _id: 0, course: "$title", student: "$students.name", progress: "$students.progress" } }
]);
