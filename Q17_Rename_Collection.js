// Q17. Rename Students to StudentDetails
use StudentDB
db.Students.renameCollection("StudentDetails")
show collections
db.StudentDetails.find()
