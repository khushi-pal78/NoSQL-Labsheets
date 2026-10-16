// Question 2 — MongoDB CollegeDB and Students
use("CollegeDB");

db.Students.insertMany([
  { Student_ID: 201, Name: "Aarav", Course: "BCA", Semester: 2, Marks: 82 },
  { Student_ID: 202, Name: "Diya", Course: "BCA", Semester: 2, Marks: 91 },
  { Student_ID: 203, Name: "Kabir", Course: "BTech", Semester: 1, Marks: 78 },
  { Student_ID: 204, Name: "Meera", Course: "BBA", Semester: 3, Marks: 86 },
  { Student_ID: 205, Name: "Ishaan", Course: "BCA", Semester: 4, Marks: 88 }
]);

// 1. Display all documents
db.Students.find();

// 2. Find students from a particular course
db.Students.find({ Course: "BCA" });

// 3. Update marks of a student
db.Students.updateOne(
  { Student_ID: 203 },
  { $set: { Marks: 84 } }
);

// 4. Delete one student
db.Students.deleteOne({ Student_ID: 205 });

// 5. Count total students
db.Students.countDocuments({});
