// Q4. Insert multiple student documents
use StudentDB
db.Students.insertMany([
  { rollNo: 102, name: "Riya", department: "Computer Science", semester: 2, cgpa: 9.1 },
  { rollNo: 103, name: "Neha", department: "Information Technology", semester: 3, cgpa: 8.5 },
  { rollNo: 104, name: "Rahul", department: "Electronics", semester: 2, cgpa: 7.9 },
  { rollNo: 105, name: "Priya", department: "Computer Science", semester: 4, cgpa: 9.4 }
])
