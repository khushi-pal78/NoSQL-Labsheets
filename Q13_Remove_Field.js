// Q13. Remove the CGPA field from all student documents
use StudentDB
db.Students.updateMany(
  {},
  { $unset: { cgpa: "" } }
)
db.Students.find()
