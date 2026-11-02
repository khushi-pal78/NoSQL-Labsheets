// Q14. Delete one student by Roll Number
use StudentDB
db.Students.deleteOne({ rollNo: 105 })
db.Students.find()
