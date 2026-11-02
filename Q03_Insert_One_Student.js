// Q3. Insert one student document
use StudentDB
db.Students.insertOne({
  rollNo: 101,
  name: "Aman",
  department: "Computer Science",
  semester: 2,
  cgpa: 8.7
})
