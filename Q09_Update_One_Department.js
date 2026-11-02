// Q9. Update department of one student
use StudentDB
db.Students.updateOne(
  { rollNo: 101 },
  { $set: { department: "Information Technology" } }
)
db.Students.find({ rollNo: 101 })
