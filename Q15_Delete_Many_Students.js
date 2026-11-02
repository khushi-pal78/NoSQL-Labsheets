// Q15. Delete all students in semester 5
use StudentDB
db.Students.deleteMany({ semester: 5 })
db.Students.find()
