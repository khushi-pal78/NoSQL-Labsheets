// Q11. Replace a complete student document
use StudentDB
db.Students.replaceOne(
  { rollNo: 104 },
  {
    rollNo: 104,
    name: "Rahul Sharma",
    department: "Mechanical",
    semester: 3,
    cgpa: 8.2
  }
)
db.Students.find({ rollNo: 104 })
