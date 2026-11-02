// Q8. Display only Name and Department
use StudentDB
// _id is included by default; use _id: 0 to hide it.
db.Students.find({}, { name: 1, department: 1, _id: 0 })
