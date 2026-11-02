// Q10. Change semester for all Computer Science students
use StudentDB
db.Students.updateMany(
  { department: "Computer Science" },
  { $set: { semester: 5 } }
)
db.Students.find({ department: "Computer Science" })
